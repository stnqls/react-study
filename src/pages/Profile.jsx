export default function Profile(props) {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div>
      <h2>Profile페이지 입니다.</h2>
      {id && <p>id는{id}입니다.</p>}
    </div>
  );
}
