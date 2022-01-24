# connect_bridge_FE

## 22.01.15

1. React, ESLint, Prettier, Reset CSS 환경설정 완료
   - [React, Prettier, Eslint](https://wooogy-egg.tistory.com/40)
   - [no-named-default, member Error](https://stackoverflow.com/questions/52894609/babel-es-lint-parse-errors-in-imported-module-cannot-find-module-parse-with)
   - [Parsing error: Top level](https://stackoverflow.com/questions/52894609/babel-es-lint-parse-errors-in-imported-module-cannot-find-module-parse-with)
   - [babel-eslint -> @babel/eslint-parser](https://github.com/standard/standard/issues/1601)
   - [prefer-default-export](https://stackoverflow.com/questions/52627477/eslint-prefer-default-export-import-prefer-default-export)
   - [Parsing error: jsx, flow, typescript](https://stackoverflow.com/questions/68677437/eslint-parsing-error-this-experimental-syntax-requires-enabling-one-of-the-fol)
   - [Reset CSS](https://domdom.tistory.com/57)
2. 역할 분담
   - 김정수: 회원 가입
   - 이선엽: 로그인

## 22.01.16

1. React Design pattern 선택

   - 그냥 평범하게 가자 atomic은 어렵고 딱히 마땅히 맘에 드는게 없네
   - 근본의 presentational - container 사용하려다 생각이 바뀌었다.
   - [presentational - container를 사용하지 않는 이유](https://tecoble.techcourse.co.kr/post/2021-04-26-presentational-and-container/)
   - class 형과 fun 형은 큰 차이가 있고 그에 적절한 것을 사용해야 한다.
   - Page단위 폴더 생성
   - 거기에 있는 모든 컴포넌트들을 해당 폴더에서 만들기
   - 한 폴더에 모두 존재

2. Storybook 설치

   - 상당히 유용한 라이브러리, 새로운 걸 적용하면 에러가 너무 많이 떠
   - [eslint와 storybook의 충돌](https://stackoverflow.com/questions/69928061/struggling-with-typescript-react-eslint-and-simple-arrow-functions-components)
   - [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/ko/get-started/)

3. 로그인, (아이디, 비밀번호) 찾기 기본 토대 완성
   - 이제 개발 하면 됨

## 22.01.17

1. px 단위가 아닌 rem 단위 사용

   - html font-size: 62.5%

2. 반응형 웹 디자인 참고

   - [9가지 규칙](https://knulab.com/archives/1153)

3. 로그인 페이지 디자인을 제외한 기능 구현 완료

## 22.01.24

1. 각 버튼마다 클릭 시 해당하는 링크로 이동하게 연결
