//1) vue앱의 시작점. (엔트리포인트)  2) App.vue  3)router/index.js 순서로 흘러감.
import { createApp } from "vue"; //Vue앱을 생성[createApp()함수사용]하기 위해 import
//경로: ./는 현재파일이 있는 위치를 기준으로 한 경로.
import App from "./App.vue"; ///app.vue를 루트 컴포넌트로 사용 = 전체 앱의 기본 틀(뼈대)
import router from "./router"; //라우터 연결.

const app = createApp(App); //App.vue의 컴포넌트 객체생성.
app.use(router);
app.mount("#app"); //index.html에 #app정의되어 있음.

//1) App.vue를 루트검포넌트로 Vue 앱 생성
//2) import된 라우터를 Vue앱에 등록.
//3) idex.html 파일안의 id=app에 Vue앱을 장착!

// npm run serve - 서버실행
//
/* 구조
vue-project/
├── node_modules/       ← 설치된 외부 패키지 (손대지 않음)
├── public/             ← 정적 파일 (index.html 있음)
├── src/                ← 실제 코드 작성 공간
│   ├── assets/         ← 이미지 등 자산
│   ├── components/     ← 재사용 가능한 컴포넌트 (HelloWorld.vue 등)
│   ├── router/         ← 라우팅 정보(index.js)
│   ├── views/          ← 실제 페이지 컴포넌트들 (SPA 화면 단위)
│   ├── App.vue         ← 앱의 기본 뼈대
│   └── main.js         ← 진입점(최초 실행 파일)
├── package.json        ← 프로젝트 설정 및 의존성
└── ... 기타 설정 파일
*/

/*
main.js
→ Vue 앱이 어떻게 시작되고, 어디에서 시작하는지 이해

App.vue
→ 전체 앱의 틀과 라우터 구조 확인
→ <router-view />가 핵심

router/index.js
→ 어떤 URL이 어떤 페이지로 연결되는지 파악
→ 페이지 개발 시 이 파일에 경로 등록 필요

views/*.vue
→ 진짜 화면을 구성하는 파일
→ 개발의 메인 작업 공간

components/*.vue
→ 여러 페이지에서 재사용 가능한 UI 컴포넌트 (버튼, 카드, 리스트 등)
→ 페이지 안에서 끼워 넣어 사용
*/
