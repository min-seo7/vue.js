<template>
  <h3>Event</h3>
  <P :key="i" v-for="(num, i) in list">
    <button v-on:click="ClickFnc(num)">이벤트클릭</button>
  </P>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      list: [10, 20, 30],
    };
  },
  methods: {
    ClickFnc(num) {
      //매개값 전달받음.
      alert(num + "클릭확인");
    },
  },
};
</script>

<style></style>
