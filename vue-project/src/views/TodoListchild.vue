<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="$emit('delete-todo', todo.id)">삭제</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: { 
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
li {
  margin: 8px 0;
}
button {
  margin-left: 10px;
}
</style>
