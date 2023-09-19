import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import InputInfo from "./components/InputInfo/InputInfo";
import Footer from "./components/Footer/Footer";

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
