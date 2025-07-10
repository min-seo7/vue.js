<template>
  <li class="post-item">
    <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style scoped>
.post-item {
  padding: 12px 0;
  border-bottom: 1px solid #ddd;
  font-weight: 600;
}
.post-item a {
  color: #444;
  text-decoration: none;
}
.post-item a:hover {
  color: #000;
}
</style>
