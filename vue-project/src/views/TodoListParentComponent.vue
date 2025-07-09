<template>
  <div>
    <h2>ToDo List</h2>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="할 일 입력" />
    <button @click="addTodo">추가</button>

    <todo-list :todos="todos" @delete-todo="deleteTodo" />
  </div>
</template>

<script>
import TodoList from "./TodoListchild.vue";

export default {
  components: { TodoList },
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() === "") return;

      this.todos.push({ id: Date.now(), text: this.newTodo });
      this.newTodo = "";
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style scoped>
input {
  margin-right: 8px;
}
</style>
