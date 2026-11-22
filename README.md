# Astro adapter for the Zaraz consent controller

Development candidate for `@ehven/cloudflare-zaraz-consent-adapter-astro`.
`Controller.astro` renders only a public browser-options projection. It makes no
network requests and imports no provider. The application owns the startup script:

```astro
---
import Controller from '@ehven/cloudflare-zaraz-consent-adapter-astro/Controller.astro';
import {browserOptions} from '@ehven/cloudflare-zaraz-consent-controller-core';
import config from '../config/consent.mjs';
---
<Controller options={browserOptions(config)} />
<button data-consent-settings hidden>Cookie settings</button>
<output data-consent-status role="status"></output>
<script>
  import {mountConsentController} from '@ehven/cloudflare-zaraz-consent-adapter-astro';
  mountConsentController();
</script>
```

Supply connector instances through `mountConsentController({connectors: [...]})`
when needed. `mountConsentController` returns the core controller or undefined
when no configuration element exists. Dispose it through the returned `destroy()`
when the host removes the page. This initial adapter targets full-page navigation;
client-side routing needs an explicitly tested host lifecycle. Do not place whole
native tool settings or secrets in component props. Core remains a peer dependency.
Astro version/build support remains to be verified against the real consumer.
