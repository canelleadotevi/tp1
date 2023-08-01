
<template>
  <div class="wrapper">
    <h1>TO DO LIST</h1>
    <div v-bind:class="{ 'active barre': element.is_finished }" v-for="element in tab">
      <p> {{ element.name }}</p> <input v-bind:chexcked="element.is_finished" type="checkbox" name="" id="" />
      {{ count }}
      <button @click="count++"> {{ count }}</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)
const tab = [
  {
    name: 'Lessive',
    is_finished: true
  },
  {
    name: 'apprendre',
    is_finished: false
  }
];
</script>
<style scoped>
.wrapper {
  border: 2px solid black;
  max-width: 800px;
  margin: 10px auto;
}

.active {
  border: 2px solid green;
}

.barre {
  text-decoration: line-through;
}
</style>


<!-- On a bien dire de nommer les fichiers Todo.vue  Juste les initiaux en majuscule. Ca va marcher en minsucule,
   mais il faut suivre la convention -->