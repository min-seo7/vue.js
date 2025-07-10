<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style>
/* 전체 기본 스타일 (저채도, 깔끔하게) */
body {
  font-family: "Noto Sans KR", sans-serif;
  background-color: #f0f1f3;
  margin: 0;
  color: #333;
}
</style>
