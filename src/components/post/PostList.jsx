import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonTable from "./common/table/CommonTable";
import CommonTableColumn from "./common/table/CommonTableColumn";
import CommonTableRow from "./common/table/CommonTableRow";
import { data } from "./data";

const PostList = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  return (
    <React.Fragment>
      <CommonTable headersName={["No", "제목", "등록일", "조회수", "추천수"]}>
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>
                    <Link to={`/postView/${item.id}`}>{item.title}</Link>
                  </CommonTableColumn>
                  <CommonTableColumn>{item.updated}</CommonTableColumn>
                  <CommonTableColumn>{item.views}</CommonTableColumn>
                  <CommonTableColumn>{item.recommended}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>
    </React.Fragment>
  );
};

export default PostList;
