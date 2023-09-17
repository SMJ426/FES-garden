import React from "react";
import { createGlobalStyle } from "styled-components";
import "./style.css";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'OTEnjoystoriesBA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
        background-color: #662D91;
        background: #5b2386;
        text-align: center;
    }

    body, div, p, button {
    font-family: 'GmarketSansMedium';
    }

    button {
        cursor: pointer;
    }
`;

function Header() {
    return (
        <header className="headerWrapper">
            <div className="imgWrapper">
                <img
                    className="imgClock"
                    alt="logo"
                    src="/img/clockOFLogo.svg"
                />
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

function InputInfo() {
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

function Footer() {
    return <footer>Weniv</footer>;
}
export default function App() {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <InputInfo />
            <Footer />
        </div>
    );
}
