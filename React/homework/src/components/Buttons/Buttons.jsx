import React from "react";
import "../Buttons/Buttons.css";

export default function Buttons() {
  return (
    <div>
      {/* 출력 문구 & 버튼 */}
      <article className="text-sec">
        <p>
          당신은 <strong>프로그래밍</strong> 전문가가 되기 위해서
          <br />
          대략 <strong>5110</strong>일 이상 훈련하셔야 합니다! :)
        </p>
      </article>

      <section className="wrapper-btn">
        <button className="btn-move">훈련하러 가기 GO!GO!</button>
        <button className="btn-share">공유하기</button>
      </section>
    </div>
  );
}
