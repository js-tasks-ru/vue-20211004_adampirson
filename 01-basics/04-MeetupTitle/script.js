import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupByID(meetupID) {
  return fetch(`${API_URL}/meetups/${meetupID}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const MainComponent = defineComponent({
  data() {
    return {
      meetupID: null,
      meetupData: null,
    };
  },
  watch: {
    meetupID(newMeetupID) {
      this.meetupData = null;
      if (newMeetupID !== null) {
        fetchMeetupByID(newMeetupID).then((meetup) => {
          this.meetupData = meetup;
        });
      }
    },
  },
});

// Создаем Vue приложение
const vApp = createApp(MainComponent);
vApp.mount('#app');
