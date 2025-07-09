<!--데이터가 변화면 화면도 변화, 화면이 변하면 데이터도 변화 => 화면&데이터 Binding작업. p.92데이터 바인딩-->

<template>
  <!--html영역-->
  <!--텍스트는 1) {{}} 2) v-text를 사용.-->
  <h1>Hello, {{ msg }}</h1>
  <h1 v-text="msg"></h1>
  <!--html코드는 v-html을 사용.-->
  <h2 v-html="htmlStr"></h2>
  <!--input[checkbox, radio 등등]은 v-model을 사용.-->
  <p><input type="text" v-model="valueModel" /></p>
  <p><input type="number" v-model.number="numberModel" /></p>
  <p>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="042">대전</option>
      <option value="052">부산</option>
    </select>
  </p>

  <p>
    <label>{{ checking }}</label>
    <input
      type="checkbox"
      true-value="yes"
      false-value="no"
      v-model="checking"
      checked
    />
  </p>
  <p>
    <label><input type="radio" v-model="picked" />what??</label>
    <label><input type="radio" v-model="picked" />who??</label>
    <label><input type="radio" v-model="picked" />when??</label>
  </p>

  <p>{{ valueModel }}, {{ numberModel }}, {{ city }}, {{ picked }}</p>
  <!--양방향특징, valueModel이 바뀌면 반영됨. -->
</template>

<script>
//js영역
export default {
  data() {
    //데이터
    return {
      msg: "World!!!!", //html영역에서 v-text or {{}}
      htmlStr: '<span style="color: red;">Red Text</span>', //v-html
      valueModel: "홍길동", //input태그 -> v-model
      numberModel: 10, //지정해줘도 값이 변경되면 변경된 값을 반영해줌. (양방향) data- view - viewmodel ==>
      city: "042",
      checking: "yes",
      picked: "what??",
    };
  },
};
</script>

<!--scoped로 현 페이지의 h1만 스타일 적용가능. -->
<style scoped>
h1 {
  color: green;
}
</style>
