import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const MainComponentOptions = {
  data() {
    return {
      leftOperandValue: null,
      rightOperandValue: null,
      operatorName: null,
    };
  },
  computed: {
    operationResultValue() {
      if (this.leftOperandValue === null || this.rightOperandValue === null) {
        return '';
      }

      let resultValue = null;

      switch (this.operatorName) {
        case 'sum':
          resultValue = this.leftOperandValue + this.rightOperandValue;
          break;
        case 'subtract':
          resultValue = this.leftOperandValue - this.rightOperandValue;
          break;
        case 'multiply':
          resultValue = this.leftOperandValue * this.rightOperandValue;
          break;
        case 'divide':
          resultValue = this.leftOperandValue / this.rightOperandValue;
          break;
      }

      return resultValue;
    },
  },
};

const MainComponent = defineComponent(MainComponentOptions);

// Создаем Vue приложение
const vApp = createApp(MainComponent);
vApp.mount('#app');
