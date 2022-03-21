<template>
  <div class="button-counter">
    <p>Title: {{ title }}</p>
    <p>Likes: {{ likes }}</p>
    <p>Published: {{ isPublished }}</p>
    <p>Author: {{ author.name }}</p>
    <div v-for="commentId in commentIds" :key="commentId">
      <p >Comment: {{ commentId }}</p>
    </div>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonCounter',
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise // or any other constructor
  },

  data() {
    return {
      count: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
