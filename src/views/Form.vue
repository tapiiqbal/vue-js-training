<template>
  <div class="form">
    <form>
      <input type="text" v-model="userName"><br>
      <input type="password" v-model="password">
    </form>
    <div>
      Result: 
      <p>Username: {{ userName }}</p>
      <p>Password: {{ password }}</p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      userName: '',
      password: '',
    }
  },

  computed: {},

  filters: {},

  methods: {}
})
</script>

