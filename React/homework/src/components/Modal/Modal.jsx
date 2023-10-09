import React from "react";
import "../Modal/Modal.css";

export default function Modal({ setShowModal }) {
  return (
    <section className="wrapper-modal">
      <h2 className="title-cheer">화이팅!!♥♥♥</h2>
      <p className="text-cheer">당신의 꿈을 응원합니다!</p>
      <img className="img-char" src="/img/char.svg" alt="캐릭터 이미지" />
      <button
        className="btn-start"
        onClick={() => {
          setShowModal(false);
        }}
      >
        종료하고 진짜 훈련하러 가기 GO!GO!
      </button>
    </section>
  );
}
