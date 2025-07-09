<!--속성(attribute)바인딩 v-bind-->

<template>
  <h3>DataBindingAttr.vue</h3>
  <p>attribude 바인딩하기.</p>
  <img v-bind:src="imgSrc" v-bind:width="widVal" />
  <p><input type="number" v-model.number="widVal" /></p>
  <!--v-bind: 객체의 속성에 데이터를 바인딩하기 위해서 사용-->
  <p>
    <input type="text" v-model="msg" />
    <button v-bind:disabled="msg == '' ? true : false" v-on:click="alertFnc">
      <!--클릭이벤트 발생시 alertfnc실행-->
      클릭
    </button>
    <!--input박스에 값이 없으면 버튼 비활성화, 있으면 활성화-->
  </p>
  <p>객체를 활용한 바인딩</p>
  <h3 v-bind:class="{ 'text-red': isRed, active: isActive }">홍길동</h3>
  <p>배열을 활용한 바인딩.</p>
  <h3 v-bind:class="[activeClass, errorClass]">김길동</h3>
  <p><button v-on:click="showfnc">에러스타일</button></p>
</template>

<script>
export default {
  //data영역
  data() {
    return {
      imgSrc: "https://vuejs.org/images/logo.png",
      imgWid: "130px",
      widVal: 100,
      btnShow: true, //true면 버튼 비활성화, false면 활성화  -> 1차례 더 조건을 추가해서 input박스가 공백이면 버튼 비활성화 기능을 추가가능!
      msg: "",

      isRed: true, //객체방식 {'클래스명':true, '클래스명':false}
      isActive: false,

      activeClass: "active", //배열을 활용한 방식.
      errorClass: "text-red",

      classAry: ["active", "text-red"],
    };
  },
  methods: {
    alertFnc() {
      alert(this.msg);
    },
    showfnc() {
      //홍길동의 폰트색 변경.
      this.isRed = !this.isRed;
    },
  },
  mounted() {
    //mount되는 시점에!
    console.log(this);
    this.msg = "홍길동";
    this.imgWod = "230px";
  },
};
</script>

<style scoped>
.text-red {
  color: red;
}
.active {
  background-color: antiquewhite;
}
</style>
