<template>
  <div class="grand-child">
    <h3>GrandChildComponent.vue(최하위 -injector)</h3>
    <p>
      주입받은이름: <strong>{{ providerUsername }}</strong>
      <!--최상위 app.vue에서 받음.-->
    </p>
    <button @click="updateParentName">부모사용이름 변경</button>
    <!--이벤트를 발생시켜 상위로 전달-->
  </div>
</template>

<script>
export default {
  inject: ["providerUsername", "updateUserName"], //상위(app.vue)에서 전달받은 데이터속성 & 함수.
  methods: {
    updateParentName() {
      // 버튼클릭시 발생이벤트 - app.vue 메소드로 전달
      this.updateUserName("김길동");
    },
  },
};
</script>
<style scoped>
.grand-child {
  border: 1px solid purple;
}
</style>
