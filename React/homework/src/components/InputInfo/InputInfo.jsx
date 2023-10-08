import React from "react";
import "../InputInfo/InputInfo.css";

export default function InputInfo() {
  return (
    <form>
      <fieldset className="formWrapper">
        <label>
          {`나는 `}
          <input
            className="input type"
            type="text"
            placeholder="예)프로그래밍"
          />{" "}
          전문가가 될 것이다.
        </label>
        <br />
        <label>
          {`그래서 앞으로 매일 하루에 `}
          <input
            className="input time"
            type="number"
            placeholder="예)5시간"
          />{" "}
          시간씩 훈련할 것이다.
        </label>

        <div className="btnWrapper">
          <button className="btnSubmmit">
            나는 며칠 동안 훈련을 해야 1만 시간이 될까?
          </button>
          <img className="clickImg" alt="클릭" src="/img/click.svg" />
        </div>
      </fieldset>
    </form>
  );
}
