import React, { useRef, useState } from "react";

const UseRef3 = () => {
    const emailInput = useRef(null)
    const pwInput = useRef(null)

    const [emailValue, setEmailValue] = useState(""); // email state 값
    const [pwValue, setPwValue] = useState(""); // pw state 값

    const inputCheck = (e) => {
        e.preventDefault();
        setEmailValue(emailInput.current.value)
        setPwValue(pwInput.current.value)
    };

  return (
    <form onSubmit={inputCheck} style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput}/>
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput}/>
      </label>

      <button type="submit" style={{ width: "100px" }} >
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default UseRef3;