import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  data() {
    return {
      localCount: this.count,
    };
  },
  watch: {
    count(newCount) {
      this.localCount = newCount;
    },
  },
  methods: {
    incrementCount() {
      this.$emit('update:count', this.localCount + 1);
    },
  },
  template: `<button type="button" @click="incrementCount()">{{ localCount }}</button>`,
});
