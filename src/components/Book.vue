<template>
  <div class="book">
    <h3>{{ book.title }}</h3>
    <button @click="$emit('selected', book.title)">Select</button>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    book: {
      type: Object
    }
  },

  data() {
    return {
      count: 0,
      selected: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
