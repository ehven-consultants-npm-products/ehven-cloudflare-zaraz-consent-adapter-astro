# Astro adapter for the Zaraz consent controller

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
Astro 7.3.8 is the initial integration target. Node fixture tests do not establish
a complete host build, browser compatibility or native vendor acceptance; those
checks must run against the installed packages in the intended host.

Support continued development through [Ehven Consultants](https://ehven.com/contact/).

Install the package in the host project:

```sh
npm install @ehven/cloudflare-zaraz-consent-adapter-astro @ehven/cloudflare-zaraz-consent-controller-core
```

Requires Astro `^7.3.8` and Node.js 24+.
Report reproducible issues through the repository issue tracker. Keep cookie values,
credentials, identities and private form contents out of reports. Support is best effort.
