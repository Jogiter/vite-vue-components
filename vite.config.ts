import legacy from '@vitejs/plugin-legacy';
import { createVuePlugin } from 'vite-plugin-vue2';

module.exports = {
  plugins: [
    createVuePlugin(),
    legacy({
      targets: 'IE 11',
    }),
  ],
};
