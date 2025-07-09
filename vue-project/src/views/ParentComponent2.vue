<template>
  <child-component @send-message="sendMessage" ref="child_component" />
  <!--v-on을 @축약하여 사용-->
</template>
<script>
import ChildComponent from "./ChildComponent2.vue";
export default {
  components: { ChildComponent },
  mounted() {
    this.$refs.child_component.callFromParent();
  },
};
</script>
