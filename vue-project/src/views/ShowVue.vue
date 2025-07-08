<template>
  <h3>v-if</h3>
  <div>
    <!--조건에 따라 요소를 추가/제거(로그인 후 메뉴가 다르게 나올때)-->
    <button @click="toggle">토글</button>
    <p v-if="isVisible">이 문장은 v-if 조건이 참일 때만 보여요!</p>
  </div>

  <h3>v-show</h3>
  <div>
    <!--조건이 자주 바뀌는 토글 ui(탭메뉴, 모달창)-->
    <button @click="toggle2">토글</button>
    <p v-show="isVisible">이 문장은 항상 렌더링되고, 보이기만 제어돼요!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
    toggle2() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style></style>

<!-- v- if예시 -->

<!-- <template>
  <div>
    <button @click="toggle">토글</button>
    <p v-if="isVisible">이 문장은 v-if 조건이 참일 때만 보여요!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script> -->

<!-- v-show예시 -->

<!-- <template>
  <div>
    <button @click="toggle">토글</button>
    <p v-show="isVisible">이 문장은 항상 렌더링되고, 보이기만 제어돼요!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script> -->
