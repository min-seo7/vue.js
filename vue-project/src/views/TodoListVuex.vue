<!--todoList의 요소를 저장소에 저장 & 사용!-->
<template>
  <h3>Vuex 사용하기// 기존 Todoview을 공통저장소 사용!</h3>
  <div id="myDIV" class="header">
    <h2 style="margin: 5px">My To Do List</h2>
    <form @submit.prevent="addNewTodo">
      <!--submit의 기본기능을 prevent로 차단-->
      <input type="text" v-model="msg" placeholder="Title..." />
      <button type="submit">추가</button>
    </form>
  </div>

  <ul id="myUL">
    <li v-bind:key="todo.id" v-for="todo in allTodos">
      {{ todo.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  computed: {
    allTodos() {
      return this.$store.getters.todoList; //저장소에서 가지고 옴.
    },
  },
  methods: {
    addNewTodo() {
      //input태그의 msg를 추가.
      this.$store.commit("addTodo", this.msg); //store/index.js의 addTodo메소드에 전달.
    },
  },
  mounted() {
    console.log(this.$store);
    this.allTodos = this.$store.getters.todoList; //저장소에서 가지고 옴.
  },
  updated() {
    //console.log(updated);
    console.log(this.$store);
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
