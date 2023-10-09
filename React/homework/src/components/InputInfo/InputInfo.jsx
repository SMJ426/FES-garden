import React, { useState } from "react";
import "../InputInfo/InputInfo.css";

export default function InputInfo({ setShowModal }) {
  const [type, setType] = useState("");
  const [time, setTime] = useState(0);
  const [day, setDay] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setDay(Math.floor(10000 / parseInt(time)));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className="formWrapper">
          <label>
            {`나는 `}
            <input
              className="input type"
              type="text"
              placeholder="예)프로그래밍"
              value={type}
              onChange={(e) => setType(e.target.value)}
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
              value={time}
              onChange={(e) => setTime(e.target.value)}
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
      {/* 버튼 클릭시 등장하는 부분 */}
      {day && (
        <article className="modal">
          <article className="text-sec">
            <p>
              당신은 <strong>{type}</strong> 전문가가 되기 위해서
              <br />
              대략 <strong>{day}</strong>일 이상 훈련하셔야 합니다! :)
            </p>
          </article>

          <section className="wrapper-btn">
            <button className="btn-move" onClick={() => setShowModal(true)}>
              훈련하러 가기 GO!GO!
            </button>
            <button className="btn-share">공유하기</button>
          </section>
        </article>
      )}
    </>
  );
}
