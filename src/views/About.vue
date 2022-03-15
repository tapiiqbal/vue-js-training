<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ counter }}</h1>
    <div>
      <button @click="counter--"> - </button>
    </div>
    <div>
      <button @click="counter++"> + </button>
    </div>

    <p>{{ fullName | upper }}</p>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      counter: 0,
      firstName: 'Jhon',
      lastName: 'Wick'
    }
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

