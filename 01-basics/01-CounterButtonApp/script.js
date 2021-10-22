import { createApp, defineComponent } from "./vendor/vue.esm-browser.js";

const MainComponentOptions = {
  data() {
    return {
      counterValue: 0,
    };
  },
  methods: {
    incrementCounter(incrementValue) {
      this.counterValue += incrementValue;
    },
  },
};

const MainComponent = defineComponent(MainComponentOptions);

// Создаем Vue приложение
const vApp = createApp(MainComponent);
vApp.mount('#app');
