<!--데이터를 핸들링해서 화면에 보여질 수 있도록.-->
<template>
  <h3>Todo</h3>
  <div id="myDIV" class="header">
    <h2>My To Do List</h2>
    <input type="text" id="myInput" v-model="msg" placeholder="Title..." />
    <span onclick="newElement()" class="addBtn" @click="addTodo()">Add</span>
  </div>

  <ul id="myUL">
    <li
      v-bind:key="todo.id"
      v-for="todo in todoList"
      v-bind:class="{ checked: todo.chk }"
      @click="checked(todo.id)"
    >
      {{ todo.name }}
      <span v-on:click.stop="removeTodo(todo.id)" class="close">X</span>
    </li>
  </ul>
</template>

<script>
//import axios from "axios";

export default {
  data() {
    return {
      msg: "",
      todoList: [], //DB와 연결해서 todoList
    };
  },
  methods: {
    checked(no) {
      //li 클릭시 발생(v-on:click)시 chk가 true가 되어 취소선.
      for (let todo of this.todoList) {
        if (todo.id == no) {
          todo.chk = !todo.chk; //true&false로 토글
        }
      }
    },
    addTodo() {
      //data에 totoLIst 배열요소가 추가[this.todoList.push()]하는 클릭이벤트!
      let max_id = this.todoList[this.todoList.length - 1].id; // id값 부여.
      let todo = { id: max_id + 1, name: this.msg, chk: false }; // id + inputbox 입력값 + chk 디폴드값으로 하나의 배열요소 생성.
      this.todoList.push(todo); // 배열에 추가.
    },
    removeTodo(no) {
      //배열내장함수 filter를 사용해서 조건에 만족하는 새로운 배열을 반환.
      this.todoList = this.todoList.filter((item) => item.id != no); // 배열의 요소(item) 중 전달받은 id를 제외하고 새로운 배열반환.
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  min-width: 250px;
}

/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
