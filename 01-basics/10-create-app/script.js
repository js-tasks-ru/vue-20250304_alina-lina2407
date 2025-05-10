import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  name: 'App',

  setup() {
    function localeDate() {
      return new Date().toLocaleDateString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }

    return {
      localeDate,
    }
  },

  template: `
  <div> Сегодня {{ localeDate() }}</div>
  `
})

createApp(App).mount('#app')
