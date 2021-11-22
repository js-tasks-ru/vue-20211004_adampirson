import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupDescription',
  props: {
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      meetupDescription: this.description,
    };
  },
  watch: {
    description(newDescription) {
      this.meetupDescription = newDescription;
    },
  },
  template: `<p class="meetup-description">{{ meetupDescription }}</p>`,
});
