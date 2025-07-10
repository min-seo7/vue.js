<!--ParentComponent.vue: 입력창과 추가버튼으로 자식컴포넌트에게 '할일 목록' 데이터를 전달
TodoListchild.vue: '할일 목록'을 렌더링 & 삭제버튼 클릭시 이벤트를 부모에게 보냄. 

//일반적으로 
부모는 자식에게 데이터를 전달
자식은 이벤트를 부모에게 전달하는 구조.

-->

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
