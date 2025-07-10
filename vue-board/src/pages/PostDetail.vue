<template>
  <section class="container">
    <h1>{{ post?.title }}</h1>
    <p>{{ post?.content }}</p>
    <router-link to="/">← 목록으로 돌아가기</router-link>
  </section>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    post() {
      return this.$store.getters.getPostById(this.id);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 720px;
  margin: 30px auto;
  padding: 0 15px;
}
h1 {
  font-weight: 700;
  color: #222;
}
p {
  white-space: pre-line;
  line-height: 1.5;
  margin: 20px 0;
}
</style>
