<!--상위: nested 하위: PadgrTitle-->
<template>
  <slot name="header"></slot>
  <h3>PageTitle</h3>
  <P>{{ title }}</P>
  <p>{{ likes }}</p>
  <p v-bind:class="{ 'red-font': isOk }">환영합니다.</p>
  <ul>
    <li v-bind:key="i" v-for="(member, i) in members">
      이름:{{ member.name }}, 나이: {{ member.age }}
    </li>
  </ul>
  <slot name="footer"></slot>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  props: {
    //상위컴포넌트에서 하위컴포넌트로 값을 전달함.
    title: { type: String, default: "페이지 제목" },
    likes: { type: Number, default: 0 },
    isOk: { type: Boolean, default: false },
    members: {
      type: Array,
      default: function () {
        return [{ name: "삼촌", age: 33 }];
      },
    },
  },
};
</script>

<style scoped>
.red-font {
  color: red;
}
</style>
