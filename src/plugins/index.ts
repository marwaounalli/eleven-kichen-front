/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import type { App } from 'vue';

import vuetify from './vuetify';
import router from '../router';
import pinia from '../store';

// Types

export default (app: App) => {
  app
    .use(vuetify)
    .use(router)
    .use(pinia);
};
