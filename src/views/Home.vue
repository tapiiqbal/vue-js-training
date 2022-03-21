<template>
  <div class="home">
    <p @click="test">Home</p>
    <input v-model="message" />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <app-hello-world :msg="msg"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      message: 'Hello World!',
      msg: 'Welcome to Your Vue.js App'  
    }

  },

  components: {
    // appHelloWorld: HelloWorld
  },

  watch: {
    message(newValue, oldValue) {
      console.log('newValue ', newValue);
      console.log('oldValue ', oldValue);
    }
  },

  beforeCreate() {
    console.log(`beforeCreate ${this.message}`)
  },

  created() {
    console.log(`created ${this.message}`)
  },

  // Kedua hook ini dapat mengakses DOM, namun pada hook beforeMount, data belum dirender dengan template, sedangkan hook mounted sudah.
  beforeMount() {
    console.log(`beforeMount ${this.$el.textContent}`)
  },

  mounted() {
    console.log(`mounted ${this.$el.textContent}`)
  },

  // kedua hook ini akan bekerja ketika ada data yang dirubah
  beforeUpdate() {
    // console.log(`beforeUpdate ${this.message}`)
    console.log(`beforeUpdate ${this.$el.textContent}`)
  },

  updated() {
    // console.log(`updated ${this.message}`)
    console.log(`updated ${this.$el.textContent}`)
  },

  beforeDestroy () {
    console.log('before destroy')
  },

  destroyed () {
    console.log('destroyed')
  },

  methods: {
    test() {
      // this.message = 'Hallo dunia!'
      this.msg = 'Welcome to Your Vue.js App update'
      console.log(this.message);
    }
  }

}
</script>
