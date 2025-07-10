<template>
  <section class="container">
    <h3>home</h3>
    <PostList />
  </section>
</template>

<script>
import PostList from "../components/PostList.vue";

export default {
  name: "HomePage",
  components: { PostList },
};
</script>

<style scoped>
.container {
  max-width: 720px;
  margin: 30px auto;
  padding: 0 15px;
}
</style>
