<template>
  <h3>자식컴포넌트 ChildComponent.vue</h3>
  <p><input type="text" v-model="msg" /></p>
  <button v-on:click="sendMessage">메세지보내기</button>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    sendMessage() {
      //click이벤트 정의. send-message부모컴포넌트에 클릭이벤트 정의되있고, 상위컴포넌트로 전달함.
      this.$emit("send-message", this.msg); //메세지보내기 버튼 클릭시 부모가 가지고 있는 곳으로 전달. [$emit]
      //this.$parent.msg = this.msg; //부모컴포넌트로 Parent~
      //this.$root.msg = this.msg; //제일 상위존재 컴포넌트(App.vue)=$root~로
    },
  },
  mounted() {
    console.log(this.$parent);
  },
};
</script>
