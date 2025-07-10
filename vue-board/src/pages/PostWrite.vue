<template>
  <section class="container">
    <h2>글쓰기</h2>
    <PostForm />
  </section>
</template>

<script>
import PostForm from "../components/PostForm.vue";

export default {
  components: { PostForm },
};
</script>

<style scoped>
.container {
  max-width: 720px;
  margin: 30px auto;
  padding: 0 15px;
}
h2 {
  font-weight: 700;
  margin-bottom: 20px;
}
</style>
