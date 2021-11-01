const data = [
  {
    id: 1,
    no: "공지",
    title: "프라임 인베스트먼트 입니다.",
    updated: "2021.08.16",
    views: 1000,
    recommended: 4516,
    content: "내용",
  },
  {
    id: 2,
    no: "공지",
    title: "커뮤니티 이용에 관련된 공지사항 입니다.",
    updated: "2021.08.31",
    views: 200,
    recommended: 4516,
    content: "내용",
  },
  {
    id: 3,
    no: "HOT",
    title: "많은 리딩방 중에 검증된 곳 찾기란...참 힘든데 여기는 ㅎ",
    updated: "2021.08.18",
    views: 700,
    recommended: 4516,
    content: "내용",
  },
  {
    id: 4,
    no: 5,
    title: "많은 리딩방 중에 검증된 곳 찾기란...참 힘든데 여기는 ㅎ5",
    updated: "2021.09.19",
    views: 400,
    recommended: 1,
    content: "내용",
  },
  {
    id: 5,
    no: 4,
    title: "많은 리딩방 중에 검증된 곳 찾기란...참 힘든데 여기는 ㅎ4",
    updated: "2021.08.30",
    views: 500,
    recommended: 2,
    content: "내용",
  },
  {
    id: 6,
    no: 3,
    title: "많은 리딩방 중에 검증된 곳 찾기란...참 힘든데 여기는 ㅎ3",
    updated: "2021.08.21",
    views: 600,
    recommended: 3,
    content: "내용",
  },
  {
    id: 7,
    no: 2,
    title: "많은 리딩방 중에 검증된 곳 찾기란...참 힘든데 여기는 ㅎ2",
    updated: "2021.08.22",
    views: 900,
    recommended: 4,
  },
  {
    id: 8,
    no: 1,
    title: "많은 리딩방 중에 검증된 곳 찾기란...참 힘든데 여기는 ㅎ1",
    updated: "2021.08.23",
    views: 800,
    recommended: 5,
  },
];

const getPostByNo = (no) => {
  const array = data.filter((x) => x.id === no);
  if (array.length === 1) {
    return array[0];
  }
  return null;
};

export { data, getPostByNo };
