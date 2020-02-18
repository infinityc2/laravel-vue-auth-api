import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#702692',
                secondary: '#6e3694',
                accent: '#6b4696',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FFC107',
                error: '#FF5252'
            },
            dark: {
                primary: '#000000',
                secondary: '#1d1d1d',
                accent: '#464646',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FFC107',
                error: '#FF5252'
            }
        },
        options: {
            customProperties: true
        }
    },
    icons: {
        iconfont: 'mdi'
    }
});
