import React from "react";
import "../Header/Header.css";

export default function Header() {
  return (
    <header className="headerWrapper">
      <div className="imgWrapper">
        <img className="imgClock" alt="logo" src="/img/clockOFLogo.svg" />
        <img className="imgText" alt="logo" src="/img/lawOfTime.png" />
      </div>

      <p className="headerText">
        “연습은 어제의 당신보다 당신을 더 낫게 만든다.”
      </p>

      <div className="textWrapper">
        <img className="imgLeft" alt="left" src="/img/left.png" />
        <p className="text">
          <strong>1만 시간의 법칙</strong>은 <br />
          어떤 분야의 전문가가 되기 위해서는 <br />
          최소한 1만 시간의 훈련이 필요하다는 법칙이다.
        </p>
        <img className="imgRight" alt="right" src="/img/right.png" />
      </div>
    </header>
  );
}
