import React, { useRef, useState } from "react";

export default function ValidationSampleF() {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);

  const inputName = useRef();

  function handleChange(e) {
    setPassword({
      password: e.target.value,
    });
    console.log(password);
  }
  function handleButtonClick() {
    setClicked(true);
    console.log("setClicked");
  }
  function handleValidated() {
    setValidated({
      validated: password === "000",
    });
    console.log(validated);
  }
  return (
    <div>
      <input
        type="password"
        ref={inputName}
        value={password}
        onChange={handleChange}
        className={
          clicked
            ? validated
              ? console.log("success")
              : console.log("failure")
            : ""
        }
      />
      <button onClick={(handleButtonClick, handleValidated)}>검증하기</button>
    </div>
  );
}
