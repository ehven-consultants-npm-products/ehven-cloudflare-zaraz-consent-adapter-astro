import type {installConsentController, Controller} from '@ehven/cloudflare-zaraz-consent-controller-core/browser';
import type {BrowserOptions} from '@ehven/cloudflare-zaraz-consent-controller-core';
type Environment = NonNullable<Parameters<typeof installConsentController>[1]>;
export function readConsentOptions(options?: {element?: HTMLElement; document?: Document}): BrowserOptions | undefined;
export function mountConsentController(options?: Environment & {options?: BrowserOptions; element?: HTMLElement}): Controller | undefined;
