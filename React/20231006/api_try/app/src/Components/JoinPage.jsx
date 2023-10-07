const JoinPage = () => {
  return (
    <>
      <section>
        <h2>이메일로 회원가입</h2>
        <div>
          <label for="emailInput">이메일</label>
          <input
            type="email"
            id="emailInput"
            name="email"
            placeholder="이메일 주소를 알려주세요."
          />
        </div>
        <div>
          <label for="passwordInput">비밀번호</label>
          <input
            type="password"
            name="password"
            id="passwordInput"
            placeholder="비밀번호를 설정해 주세요."
          />
        </div>
        <button type="button">다음</button>
      </section>

      <section>
        <h2>프로필 설정</h2>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <label for="profileImg">
          <img
            src="https://api.mandarin.weniv.co.kr/Ellipse.png"
            alt=""
            srcset=""
            id="imagePre"
          />
        </label>
        <input
          type="file"
          id="profileImg"
          name="image"
          accept="image/*"
          class="ir"
        />
        <div>
          <label for="userNameInput">사용자 이름</label>
          <input
            type="text"
            id="userNameInput"
            name="username"
            placeholder="2~10자 이내여야 합니다."
          />
        </div>
        <div>
          <label for="userIdInput">계정 ID</label>
          <input
            type="text"
            id="userIdInput"
            name="accountname"
            placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
          />
        </div>
        <div>
          <label for="userIntroInput">소개</label>
          <input
            type="text"
            id="userIntroInput"
            name="intro"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요."
          />
        </div>
        <button type="button">감귤마켓 시작하기</button>
      </section>
    </>
  );
};

export default JoinPage;
