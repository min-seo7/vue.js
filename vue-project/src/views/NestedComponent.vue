<!--PageTitle.vue로 전달-->
<template>
  <h3>상위컴포넌트(Nested) = 하위컴포넌트(PageTitle)</h3>
  <!--상위컴포넌트에서 하위로 데이터전달후 화면출력-->
  <!--하위컴포넌트선언??-->
  <PageTitle
    v-bind:title="titleMsg"
    v-bind:likes="likeCnt"
    v-bind:isOk="Okval"
    v-bind:members="memberList"
  >
    <!--v-bind는 하위영역과 binding되어 하위컴포넌트에서 출력됨.-->
    <template v-slot><p>slot의 내용입니다.</p></template>
    <template v-slot:header><p>Header의 slot입니다.</p></template>
    <template v-slot:footer><p>Footer의 slot입니다.</p></template>
  </PageTitle>
</template>

<script>
import PageTitle from "../components/PageTitle.vue"; //1)pageTitle 컴포넌트 import
export default {
  components: {
    //2))사용할 컴포넌트 등록
    PageTitle,
  },
  data() {
    return {
      titleMsg: "동적인 내용을 전달하기",
      likeCnt: 3,
      Okval: true,
      memberList: [
        { name: "아버지", age: 40 },
        { name: "어머니", age: 35 },
        { name: "아들", age: 5 },
      ],
    };
  },
};
</script>
