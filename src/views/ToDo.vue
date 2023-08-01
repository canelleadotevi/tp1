<template>
   <div class="wrapper">
    <h1>TO DO LIST</h1>
    <div v-bind:class="{ 'active , barre': element.isfinished }" v-for="element in tab"  >
      <div class="todo_item">
        <p> {{ element.name }}</p> <input v-bind:chexcked="element.isfinished" type="checkbox" name="" id="" />
        <!--  {{ count }} -->
    </div>
      
    </div>
  </div> 
 <!--  <button @click="count++"> {{ count }}</button> -->
 <button @click=""></button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
 /* const task = ref({ name: '' isfinished: false
 }) */
/* const count = ref(0) */

 const tab = [
 {
    name: 'Lessive',
    isfinished: true,
  },
  {
    name: 'apprendre',
    isfinished: false,
  },
  {
    name: 'Manger',  
    isfinished: true,
  },
  {
    name: 'jouer',
    isfinished: false,
  },
  {
    name: 'Cuisiner',
    isfinished: false,
  },
  {
    name: 'Chanter',
    isfinished: true
  },
  {
    name: 'Vaisselle',
    isfinished: true
  } 
];

</script>
<style scoped>
 *{
  font-size: 18px;
  font-weight: 400px;
  margin: 0;
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #fff;
  max-width: 800px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 9px;
  box-shadow: 0px 1px 50px black;

}
 h1 {
  text-align: center;
  font-size: 24px;
  font-weight: 700px;
  padding-bottom: 10px;
}
.active {
  border: 2px solid green;
}

.barre {
  text-decoration: line-through;
}
.todo_item{
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

</style>
 
<!-- On a bien dire de nommer les fichiers Todo.vue  Juste les initiaux en majuscule. Ca va marcher en minsucule,
   mais il faut suivre la convention -->
