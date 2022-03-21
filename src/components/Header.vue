<template>
  <div class="header">
    <header @click="changeTitle">{{ title }}</header>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    title: {
      type: String,
      default: 'Emit'
    }
  },

  data() {
    return {}
  },

  methods: {
    changeTitle() {
      this.$emit('changeTitle', 'Component update')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
