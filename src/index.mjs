import {installConsentController} from '@ehven/cloudflare-zaraz-consent-controller-core/browser';

/** Host supplies one startup entrypoint and any connector hooks explicitly. */
export function readConsentOptions({element, document: doc = globalThis.document} = {}) {
  const node = element ?? doc?.querySelector('[data-zaraz-consent-options]');
  if (!node?.dataset?.options) return;
  return JSON.parse(node.dataset.options);
}
export function mountConsentController({options, element, document: doc = globalThis.document, window: win = globalThis.window, ...environment} = {}) {
  options ??= readConsentOptions({element, document: doc});
  if (!options) return;
  return installConsentController(options, {
    window: win, document: doc,
    settingsElement: doc.querySelector('[data-cookie-settings], [data-consent-settings]'),
    statusElement: doc.querySelector('[data-cookie-status], [data-consent-status]'),
    ...environment,
  });
}
