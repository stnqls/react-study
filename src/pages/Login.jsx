export default function Login(props) {
  function login() {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  }
  return (
    <div>
      <h2>Login페이지 입니다.</h2>
      <button onClick={login}>로그인하기</button>
    </div>
  );
}
