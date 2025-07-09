<!--라우터 정보 (router -index.js)에 link 정보에 있음. -->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/data">Data link</router-link> |
    <router-link to="/dataAttr">DataAtrr link</router-link> |
    <router-link to="/dataList">DataList link</router-link> |
    <router-link to="/eventClick">Event Click</router-link> |
    <router-link to="/showVue">Show Vue</router-link> |
    <router-link to="/Computed">Computed Vue</router-link> |
    <router-link to="/WatchView">Watch Vue</router-link> |
    <router-link to="/TodoView">Todo Vue</router-link> |
    <router-link to="/Nested">Nest Vue</router-link> |
    <router-link to="/Parent">Parent</router-link> |
    <router-link to="/Parent2">Parent2</router-link> |
    <router-link to="/TodoUseCompo"
      >TodoList with parent&child Component</router-link
    >
    |
  </nav>
  <router-view />
  <p>App.vue:{{ msg }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
