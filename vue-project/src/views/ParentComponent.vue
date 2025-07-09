<template>
  <h3>부모컴포넌트(ParentComponent.vue)</h3>
  <p class="parent-component">{{ msg }}</p>
  <ChildComponent
    v-on:send-message="sendMessage"
  /><!--클릭시 발생하는 이벤트로 자식컴포넌트에서 전달된 값을~~~  P163-->
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  data() {
    return {
      msg: "길동! GO",
    };
  },
  components: { ChildComponent },
  methods: {
    sendMessage(data) {
      console.log("전달받은 데이터" + data);
    },
  },
};
</script>
