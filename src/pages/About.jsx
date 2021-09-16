import queryString from "query-string";

export default function About(props) {
  console.log(props);
  const searchParams = props.location.search;
  console.log(searchParams);
  // const obj = new URLSearchParams(searchParams);
  // console.log(obj.get("name"));
  const query = queryString.parse(searchParams);
  console.log(query);

  const name = query.name;
  return (
    <div>
      <h2>About페이지 입니다.</h2>
      {name && <p>name은{name}입니다.</p>}
    </div>
  );
}
