import React from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

const Home = ({match,history}) => {
  return (
    <div class="portifolio-container container">
            <div class="projects">
                <div class="card" >
                    <div class="card-header">Cria blog</div>
                    <img src="profile-picture.jpg" alt="a image" style={{width: '150px'}}/>
                    <div class="card-footer"> a description</div>
                </div>

                </div>
    
      <Footer></Footer>
    </div>
  );
};

export default Home;
