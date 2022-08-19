import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#000000',
        secondary: '#D8B6A4',
        accent: '#630000',
        fondo: '#EEEBDD',
        success: '#689F38',
        error: '#D32F2F',
      },
    },
  },
});
