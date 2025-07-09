<template>
  <h3>Event</h3>
  <P :key="i" v-for="(num, i) in list">
    <button v-on:click="ClickFnc(num)">이벤트클릭</button>
    <!--v-on:click은 @Click 축약형으로 사용가능. -->
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
