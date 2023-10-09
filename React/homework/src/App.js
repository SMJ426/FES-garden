import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import InputInfo from "./components/InputInfo/InputInfo";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'EnjoyStories';
    font-weight: 500;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/tvn/EnjoyStoriesMedium.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/tvn/EnjoyStoriesMedium.eot?#iefix') format('embedded-opentype'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/tvn/EnjoyStoriesMedium.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/tvn/EnjoyStoriesMedium.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/tvn/EnjoyStoriesMedium.ttf') format("truetype");
    font-display: swap;
}

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
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <GlobalStyle />
      <Header />
      <InputInfo setShowModal={setShowModal} />
      {showModal && <Modal setShowModal={setShowModal} />}
      <Footer />
    </div>
  );
}
