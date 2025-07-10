<template>
  <section class="container">
    <form @submit.prevent="submitPost" class="form">
      <input
        v-model="title"
        type="text"
        placeholder="제목"
        required
        maxlength="100"
      />
      <textarea
        v-model="content"
        placeholder="내용"
        rows="6"
        required
      ></textarea>
      <button type="submit">등록</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    submitPost() {
      this.$store.dispatch("addPost", {
        title: this.title,
        content: this.content,
      });
      this.title = "";
      this.content = "";
      this.$router.push("/");
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
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
input,
textarea {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 15px;
  font-size: 1rem;
  font-family: inherit;
  color: #333;
  background-color: #fafafa;
  transition: border-color 0.3s ease;
}
input:focus,
textarea:focus {
  border-color: #777;
  outline: none;
}
button {
  background-color: #555;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.25s ease;
}
button:hover {
  background-color: #333;
}
</style>
