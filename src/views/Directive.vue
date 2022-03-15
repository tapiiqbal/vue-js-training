<template>
  <div class="about">
    <h1>This is an about directive</h1>
    <p v-html="message + ' | v-html'"> </p>
    <p v-once>{{ message }} | v-once</p>
    <p v-text="message"> | v-text</p>
    <!-- sama dengan -->
    <p>{{ message }}</p>
    <p v-show="displayMessage">{{ message }} | v-show</p>
    <div v-if="number === 1">
    1
    </div>
    <div v-else-if="number === 2">
    2
    </div>
    <div v-else-if="number === 3">
    3
    </div>
    <div v-else>
    4
    </div>
    <button @click="info('hello')">
      Info
    </button>
    <div v-bind:class="[classA, classB]">this is green</div>
    <p v-bind:style="[red]">this is red</p>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {
      message: 'Hello World!',
      displayMessage: true,
      number: 2,
      red: {
        'color': 'red'
      },
      classA: 'green',
      classB: 'font'
    }
  },

  computed: {
  },

  filters: {},

  methods: {
    info(val) {
      console.log(val)
    }
  }
}
</script>
<style scoped>
.green {
  color: green
}

.font {
  font-size: 50px;
}
</style>

