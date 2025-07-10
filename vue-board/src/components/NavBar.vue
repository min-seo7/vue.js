<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">게시글 목록</router-link>
    <router-link to="/post/write" class="nav-link">글쓰기</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  background: #e0e2e5;
  padding: 15px 30px;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #ccc;
}
.nav-link {
  color: #555;
  font-weight: 600;
  text-decoration: none;
}
.nav-link.router-link-exact-active {
  color: #222;
  border-bottom: 2px solid #222;
}
</style>
