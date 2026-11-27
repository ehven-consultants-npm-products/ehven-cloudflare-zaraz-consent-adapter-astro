import test from 'node:test';
import assert from 'node:assert/strict';
import {mountConsentController} from '../src/index.mjs';
import {browserOptions, defineConfig} from '@ehven/cloudflare-zaraz-consent-controller-core';
test('no rendered configuration means no initialization; server import is inert', () => {
  assert.equal(mountConsentController({document: {querySelector: () => null}}), undefined);
});
test('rendered browser projection binds host elements without importing providers', () => {
  const options = browserOptions(defineConfig({origin: 'https://example.test'}));
  const win = {location: {href: options.origin + '/'}, navigator: {}, clearTimeout() {}};
  const doc = {querySelector: () => null};
  const controller = mountConsentController({element: {dataset: {options: JSON.stringify(options)}}, window: win, document: doc});
  assert.equal(controller.getSnapshot().state, 'idle'); controller.destroy();
  assert.throws(() => mountConsentController({element: {dataset: {options: 'invalid'}}, window: win, document: doc}), SyntaxError);
});
