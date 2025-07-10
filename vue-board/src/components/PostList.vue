<template>
  <ul class="post-list">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import PostItem from "./PostItem.vue";

export default {
  components: { PostItem },
  computed: {
    ...mapGetters(["allPosts"]),
    posts() {
      return this.allPosts;
    },
  },
};
</script>

<style scoped>
.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
