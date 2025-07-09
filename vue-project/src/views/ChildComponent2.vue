<template>
  <h3>자식컴포넌트에서 정의된 함수 부모에서 호출! console창을 확인하시오</h3>
</template>

<script>
export default {
  methods: {
    callFromParent() {
      console.log("부모 컴포넌트에서 직접 호출한 함수");
    },
  },
};
</script>
