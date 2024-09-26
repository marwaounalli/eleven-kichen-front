// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import colors from 'vuetify/util/colors'

// Vuetify
import { createVuetify } from 'vuetify';
import { md2 } from 'vuetify/blueprints';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default createVuetify({
  blueprint: md2,
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.yellow.darken2,
          secondary: colors.amber.darken3,
        }
      },
    },
  },
  // https://vuetifyjs.com/en/features/global-configuration/
  defaults: {
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
