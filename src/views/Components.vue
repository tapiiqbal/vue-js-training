<template>
  <div class="components">
    <app-header :title="title" @changeTitle="updateTitle($event)"></app-header>
    <app-button-counter 
      :title="'im title'" 
      :likes="42" 
      :is-published="true" 
      :author="author"
      :comment-ids="commentIds"
    ></app-button-counter>
    <div>
      <h1>Selected: {{ selectedBook }}</h1>
      <app-book 
        v-for="book in books"
        :key="book.id"
        :book="book"
        @selected="selectedBook = $event"
      ></app-book>
    </div>
    <p @click="onClick">Click me!</p>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import ButtonCounter from '../components/ButtonCounter.vue'
import Book from '../components/Book.vue'
import Header from '../components/Header.vue'
import exampleMixins from '../mixins/exampleMixin'

export default defineComponent({
  mixins: [exampleMixins],
  data() {
    return {
      counter: 0,
      firstName: 'Jhon',
      lastName: 'Wick',
      author: {
        name: 'iqbal',
        company: 'Sigma Cipta Utama'
      },
      commentIds: [234, 266, 273],
      books : [
        {
          id: 1,
          title: 'JavaScript',
        },
        {
          id: 2,
          title: 'Java',
        },
      ],
      selectedBook: '',
      title: 'Component'
    }
  },

  components: {
    appButtonCounter: ButtonCounter,
    appBook: Book,
    appHeader: Header
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
    },

    updateTitle(updatedTitle) {
      console.log(updatedTitle);
      this.title = updatedTitle
    }
  }
})
</script>

