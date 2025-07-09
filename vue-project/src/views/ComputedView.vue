<template>
  <h3>Computed</h3>
  <h3>FirstName: {{ firstName }}</h3>
  <!--//지정된 data라도 mounted의 데이터가 우선으로 적용됨.-->
  <h3>LastName: {{ lastName }}</h3>
  <h3>{{ fullName }}</h3>
  <br />
  <hr />
  <br />
  <h3>장바구니</h3>
  <div v-bind:key="product.id" v-for="product in cart">
    <strong>{{ product.name }}</strong> - 가격: {{ product.price }}원 - 수량:
    <input type="number" v-model.number="product.quantity" />
  </div>
  <p><strong>총 수량:</strong> {{ totlaQuantity }}개</p>
  <p><strong>총 금액:</strong> {{ totlaPrice }}원</p>
</template>

<script>
export default {
  data() {
    return {
      firstName: "길동",
      lastName: "홍",
      cart: [
        { id: 1, name: "사과", price: 2000, quantity: 2 },
        { id: 2, name: "바나나", price: 1000, quantity: 3 },
        { id: 3, name: "딸기", price: 3000, quantity: 1 },
      ],
    };
  },
  computed: {
    //속성을 감시하다가 변화가 생기면 반영해줌.
    fullName() {
      return this.firstName + ", " + this.lastName;
    },
    totlaQuantity() {
      return this.cart.reduce((acc, item) => acc + item.quantity, 0); //초기값을 0으로 지정. reduce(): 누적계산
    },
    totlaPrice() {
      return this.cart.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
    },
  },
  mounted() {
    //mount되는 시점에 실행.
    //hook
    console.log(this);
    this.firstName = "kildong";
  },
};
</script>
