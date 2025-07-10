//src/store/index.js
//vuex store 연습. p205
//main에 아래에 입려된 데이터들이 등록됨.

import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, name: "Vue공부하기", chk: false },
      { id: 2, name: "TV 시청", chk: false },
      { id: 3, name: "저녁운동", chk: false },
    ],
    title: "Hello World",
  },
  getters: {
    titling(state) {
      return state.title;
    },
    todoList(state) {
      return state.todos;
    },
  },
  mutations: {
    //기능구현
    addTodo(state, name) {
      // 값이 위에 totos에 등록되어야 함.
      const id = state.todos[state.todos.length - 1].id; //state 중 todos의 길이의 -1은 마지막 데이터의 아이디 값 반환.
      const todo = {
        id: id + 1,
        name: name,
        chk: false,
      };
      state.todos.push(todo);
    },
  },
});
