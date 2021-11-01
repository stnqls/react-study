import React, { useEffect, useState } from "react";
import { getPostByNo } from "./data";

const PostView = ({ history, location, match }) => {
  const [data, setData] = useState({});
  const { id } = match.params;

  useEffect(() => {
    setData(getPostByNo(id));
  }, []);

  return (
    <>
      <h2>게시글 상세정보</h2>
      <div className="post-view-wrapper">
        {data ? (
          <>
            <div className="post-view-row">
              <label htmlFor="">게시글 번호</label>
              <label htmlFor="">{data.no}</label>
            </div>
            <div className="post-view-row">
              <label htmlFor="">제목</label>
              <label htmlFor="">{data.title}</label>
            </div>
            <div className="post-view-row">
              <label htmlFor="">내용</label>
              <div>{data.content}</div>
            </div>
          </>
        ) : (
          "해당 게시글을 찾을 수 없습니다."
        )}
        <div className="post-view-go-list-btn" onClick={() => history.goBack()}>
          목록으로 돌아가기
        </div>
      </div>
    </>
  );
};

export default PostView;
