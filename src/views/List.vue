<template>
  <div class="list">
    <p class="text-bold">Mapping an Array to Elements with v-for</p>
    <div class="flex-container">
      <ul id="example-1">
        <li v-for="item in items" :key="item.message">
          {{ item.message }}
        </li>
      </ul>
    </div>
    <div class="flex-container">
      <ul id="example-2">
        <li v-for="(item, index) in items" :key="item.message">
          {{ index+1 }} - {{ item.message }}
        </li>
      </ul>
    </div>
    <div class="flex-container">
      <ul id="example-3">
        <li v-for="(item, index) in items" :key="item.message">
          {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
      </ul>
    </div>
    <div class="flex-container">
      <ul id="example-4">
        <li v-for="value in object" :key="value">
          {{ value }}
        </li>
      </ul>
    </div>
    <div class="flex-container">
      <ul id="example-5">
        <li v-for="(value, name, index) in object" :key="value">
          {{ index + 1 }}. {{ name }}: {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      parentMessage: 'Parent',
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
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
.text-bold{
  font-weight: bold;
}

.flex-container {
  display: flex;
  text-align: left;
  /* background-color: DodgerBlue; */
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
</style>

