<template>
  <h3>Parent Button</h3>
  <MyButton v-on:my-event="EventClick" label="확인" />
  <MyButton @my-event="EventClick" label="취소" />
  <MyButton @my-event="EventClick" />
</template>

<script>
import MyButton from "../components/MyButton.vue";

export default {
  components: { MyButton },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    EventClick(data) {
      console.log(data);
    },
  },
};
</script>

<style scoped>
h3 {
  color: #333;
}
</style>
