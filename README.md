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

1.  ```jsx
    // App.js
    // /profile/1
    <Route path="/profile" exact component={Profile} />
    <Route path="/profile/:id" component={Profile} />
    ```

    넘어오는 `props.match.params.id`는 `String`형태이다.

2.  ```js
    // App.js
    // /about/?name=mark (querystring) optional한 값이다.
      <Route path="/about" component={About} />
      <Route path="/about/?name=mark" component={About} />
    ```

- 브라우저내장객체 사용하기 (`URLSearchParams`)<br/>
  : 지원하지 않는 브라우저도 있다.
  ```js
  const searchParams = props.location.search;
  console.log(searchParams);
  const obj = new URLSearchParams(searchParams);
  console.log(obj.get("name"));
  ```
- `query-string` 사용하기
  ```js
  const searchParams = props.location.search;
  const query = queryString.parse(searchParams);
  ```

## Switch & NotFound

- Switch <br/>
  여러 Route중 순서대로 먼저 맞는 하나만 보여준다. <br/>
  가장 마지막에 어디 `path`에도 맞지 않으면 보여지는 컴포넌트를 통해, NotFound페이지를 만들 수 있다.<br/>
  **작은범위 -> 큰범위** 순서로 작성한다.

- NotFound <br/>
  `Route`에서 `path`를 작성하지 않으면 NotFound페이지가 연결된다.

## JSX링크로 라우팅

`<a>`태그를 통해 링크를 이동할 경우, 페이지가 다시 로딩되어서 적합하지 않다. <br/>
`react-router-dom`에서 제공하는`<Link>`를 통해 사용한다.

## NavLink

`react-router-dom`에서 제공하며, `activeClassName`,`activeStyle`처럼 active상태에 대한 스타일 지정이 가능하다.<br/>
Route의 path처럼 동작하기 때문에 exact가 있다.

## JS로 라우팅 이동하기

- HOC방법 사용하기 : `withRouter`를 이용한다.

## Redirect

```js
//jsx
import { Redirect } from "react-router-dom";
<Redirect to="/" />;
```

## HOC(Higher Order Component)

: 컴포넌트를 인자로 받아 새로운 컴포넌트를 리턴하는 함수이다. <br/>

주의할점: render메소드 안에서 사용하지 않는다.<br/>

## Controlled Component & Uncontrolled Component

`input` `select` `textarea` : 상태를 가지고있는 엘리먼트 <br/>
엘리먼트를 가지고 있는 컴포넌트가 상태를 관리 : `controlled` <br/>
엘리먼트의 상태를 관리하지 않고, 엘리먼트의 참조만 컴포넌트가 소유 : `uncontrolled`

```js
    input 엘리먼틔의 현재 상태 값을 꺼내서 전송한다.
    const input = document.querySelector("#my-input");
    console.log(input);
    // react에서는 지양하는 방식이다.
```

## State Hook

`useState` : state를 대체 할 수 있다.

- class

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count = 0;
    };
  }
  render(){
    return (
      <div>
        <p>you clicked {count}times</p>
        <button onClick={this.click}>click</button>
      </div>
    );
  }
  click = ()=> {
    this.state({count: this.state.count + 1});
  }
}
```

- function

```js
function Example2() {
  const [count, setCount] = React.useState(0); //useState로 초기화하기
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={click}>click</button>
    </div>
  );
  function click() {
    setCount(count + 1);
  }
}
```

## Effect Hook

라이프 사이클 훅을 대체 할 수 있다.(`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`)

- class

```js
class Example4 extends React.Component {
  state = { count: 0 };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>class 컴포넌트 ex4</h2>
        <p>You clicked {count} times</p>
        <button onClick={this.click}>Click me</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount", this.state.count);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.count);
  }
  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}
```

- function

```js
function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMout", count);
    return () => {
      //cleanup
      // dependency에의해 useEffect가 실행되기 직전에 실행된다. (componentWillUnmount의 역할)
    };
  }, []);

  React.useEffect(() => {
    console.log("componentDidMout & componentDidUpdate by count", count);
  }, [count]); // count에 의해 실행된다.

  return (
    <div>
      <h2>function 컴포넌트 ex5</h2>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
  function click() {
    setCount(count + 1);
  }
}
```

`useEffect`는 여러개 사용가능하며, 순차적으로 실행된다. <br/>
class형으로 작성된 `this.state`는 최신상태를 가리키도록 변경한다. (function과 다르다.)

## Custom Hooks

이름은 반드시 `use`로 시작해야하며, 조건부 함수가 아니어야 한다.

## Hook의 규칙

최상위에서만 Hook을 호출해야한다.<br/>

- 반복문, 조건문, 중첩된 함수 내에서 Hook을 사용하지 않아야한다.<br/>

React 함수 컴포넌트에서 Hook을 호출한다. <br/>
Custom Hook에서 Hook을 호출한다.

## Carousel

`React Slick`을 사용해서 carousel구현하기.

1. npm을 통해 react slick 설치하기

```bs
$ npm install react-slick --save
$ npm install slick-carousel --save
```

2. css파일 임포트하기

```js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```

---

## Redux

`Actions` : 어플리케이션의 store(저장소)로 data를 보내는 방법이다. action의 type은 일반적으로 문자열 상수로 적의도며, 정의된 action type은 action creators를 통해 사용된다. <br/>

```jsx
const ADD_TODO = 'ADD_TODO' // action의 type을 정의
function addTodo(text){
  return (
    type: ADD_TODO,
    text
  )
}
```

`Reducers` : action을 통해 어떠한 행동을 정의 했다면, 그 결과 어플리케이션의 상태가 어떻게 바뀌는지 특정하게 되는 함수이다. (action의 type에 따라 변화된 state를 반환하게 된다. <br/>

```jsx
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter,
      });
    default:
      return state;
  }
}
```

`Store` : action과 action에 따라 상태를 수정하는 reducer를 저장하는 어플리케이션에 있는 단 하나의 객체이다. <br/>
store를 생성하고 reducer을 연결하여 어플리케이션에 연결하게 된다.

```js
import {createStore} from 'redux',
import CodeApp from './reducers';
let store = createStore(todoApp);
```
