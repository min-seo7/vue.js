<!--라우터 정보 (router -index.js)에 link 정보에 있음. -->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/data">Data link</router-link> |
    <router-link to="/dataAttr">DataAtrr link</router-link> |
    <router-link to="/dataList">DataList link</router-link> |
    <router-link to="/eventClick">Event Click</router-link> |
    <router-link to="/showVue">Show Vue</router-link> |
    <router-link to="/Computed">Computed Vue</router-link> |
    <router-link to="/WatchView">Watch Vue</router-link> |
    <router-link to="/TodoView">Todo Vue</router-link> |
    <router-link to="/Nested">Nest Vue</router-link> |
    <router-link to="/Parent">Parent</router-link> |
    <router-link to="/Parent2">Parent2</router-link> |
    <router-link to="/TodoUseCompo"
      >TodoList with parent&child Component</router-link
    >
    | <router-link to="/ParentButton">상하위컴포넌트 활용</router-link> |
    <router-link to="/Vuex">Vuex</router-link> |
  </nav>
  <div class="grand-parent">
    <h3>App.vue(부모컴포넌트 - Provider)</h3>
    <!--app.vue-middelComponent-GrandChild 구조로 흐름-->
    <p>
      제공자이름: <strong>{{ username }}</strong>
    </p>
    <!--import-->
    <MiddleComponent />
  </div>

  <!--
  장바구니 예제
  -->
  <div class="cartsec">
    <h1>Vue Provide/Inject 장바구니 예제</h1>
    <ProductList />
    <CartView />
  </div>
  <!--장바구니예제 end-->

  <router-view />
  <p>App.vue:{{ msg }}</p>
</template>

<script>
import MiddleComponent from "./views/MiddleComponent.vue";
//장바구니 예제용
import ProductList from "./components/ProductList.vue";
import CartView from "./components/CartView.vue";

export default {
  components: { MiddleComponent, ProductList, CartView },
  data() {
    return {
      msg: "잉??",
      username: "홍길동",
      cart: [], //장바구니 예제용
    };
  },
  provide() {
    //하위로 제공하는 값, 함수 (key:value형식으로 키 전달).
    return {
      providerUsername: this.username, //데이터 속성.
      updateUserName: this.changrUserName, //메소드
      //장바구니 예제
      cart: this.cart,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
    };
  },
  methods: {
    changeUserName(name) {
      this.username = name;
    },
    //장바구니 예제용
    addToCart(product) {
      const existing = this.cart.find((item) => item.id === product.id);
      if (existing) {
        existing.qty++;
      } else {
        this.cart.push({ ...product, qty: 1 });
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.grand-parent {
  border: 1px solid blue;
}
.cartsec {
  border: 3px solid pink;
  margin: 3px;
}
</style>
