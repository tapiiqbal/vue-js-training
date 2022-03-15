<template>
  <div class="components">
    <app-button-counter></app-button-counter>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import ButtonCounter from '../components/ButtonCounter.vue'

export default defineComponent({
  data() {
    return {
      counter: 0,
      firstName: 'Jhon',
      lastName: 'Wick'
    }
  },

  components: {
    appButtonCounter: ButtonCounter
  },

  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  },

  filters: {
    upper(text) {
      return text.toUpperCase()
    },

    reverse (text) {
      return text.split('').reverse().join('')
    }
  },

  methods: {
    increment() {
      this.counter++
    }
  }
})
</script>

