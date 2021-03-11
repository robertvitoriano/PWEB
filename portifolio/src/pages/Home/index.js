import React from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import profilePic from "./../../assets/img/Mask Group 1.png";
const Home = ({ match, history }) => {
  return (
    <>
      <section class="presentation-section container">
        <div className="welcome-container">
          <h1>
            Olá!
            <br /> Me chamo Robert.
            <br /> Seja bem-vindo(a) ao meu portifólio!
          </h1>
          <div class="photo-wrapper">
            <img src={profilePic} style={{ height: "400px" }} alt="" />
          </div>
        </div>
        <div class="information">
          <div class="about">
            <p>
              Tenho 23 e atualmente estou Cursando o 5º Semestre de Análise e
              Desenvolvimento de Sistemas na Fatec Sorocaba.
            </p>

            <p>
              Destas áreas citadas, a que mais me despertou paixão pelo estudo
              foi o <strong>desenvolvimento fullstack</strong>. Ver todos os
              conhecimentos de um determinado conjunto de tecnologias se
              encaixando para criar uma <strong>aplicação Web</strong> é uma
              experiência incrível. Tão incrível que todas as vezes que me
              dedico a criar algo, sinto a mesma euforia que senti quando fiz
              meu primeiro server local.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
