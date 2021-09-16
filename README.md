# React

## SPA라우팅 과정

1. 브라우저에서 최초에 `'/'` 경로로 요청을한다.
2. React Web App을 내려준다.
3. 내려받은 React App에서 `'/'`경로에 맞는 컴포넌트를 보여준다.
4. React App에서 다른 페이지로 이동하는 동작을 수행한다.
5. 새로운 경로에 맞는 컴포넌트를 보여준다.

## react-router사용하기

`npm i react-router-dom`을 설치해서 사용한다. <br/>
(cra의 기본 내장된 패키지가 아니다.)

- `Route`컴포넌트에 `path`와 `component`를 설정해준다.
- `BrowserRouter`로 `Route`들을 감싸준다.
- 브라우저에서 요청한 경로에 Route의 path가 들어있으면 해당 component를 보여준다.

`exact`을 사용하면, 완전히 똑같은 path와 url일 경우일때만 보여주게 된다.

## Dynamic 라우팅

```jsx
// App.js
// /profile/1
<Route path="/profile" exact component={Profile} />
<Route path="/profile/:id" component={Profile} />
```

넘어오는 `props.match.params.id`는 `String`형태이다.
