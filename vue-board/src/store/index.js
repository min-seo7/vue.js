import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        title: "첫 번째 게시글입니다.",
        content: "Vue.js와 Vuex로 만든 깔끔한 게시판 프로젝트예요.",
      },
      {
        id: 2,
        title: "두 번째 게시글",
        content:
          "초기 데이터를 이렇게 넣어두면 앱 시작 시 바로 보여줄 수 있죠.",
      },
    ],
    nextId: 3,
  },
  mutations: {
    ADD_POST(state, { title, content }) {
      state.posts.push({ id: state.nextId++, title, content });
    },
  },
  actions: {
    //컴포넌트에서 호출, mutation 실행
    addPost({ commit }, payload) {
      commit("ADD_POST", payload);
    },
  },
  getters: {
    allPosts: (state) => state.posts, //게시글 전체 반환
    getPostById:
      (state) =>
      (
        id //id로 게시글 찾기
      ) =>
        state.posts.find((post) => post.id === Number(id)),
  },
});
