import React from "react";
import Swal from "sweetalert2";

class Comfirm extends React.Component {
  deletAlert = (e) => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4b088a",
      cancelButtonColor: "#01df01",
      confirmButtonText: "예",
      cancelButtonText: "아니오",
    }).then((result) => {
      if (result.value) {
        document.getElementById("deleteId").remove();
        Swal.fire("Deleted", "sweetalert2 삭제 완료", "success");
      }
    });
  };
  render() {
    return (
      <>
        <h1 id="deleteId">삭제 sweetalert2</h1>
        <button onClick={(e) => this.deletAlert()}>삭제</button>
      </>
    );
  }
}

export default Comfirm;
