import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import MasterHead from "./MasterHead";
import Modal from "./Modal";
import NavBar from "./NavBar";
import PortfolioSection from "./PortfolioSection";

const App = ()=>{
    return (
        <div>
            <NavBar/>
            <MasterHead/>
            <PortfolioSection/>
            <About/>
            <Contact/>
            <Footer/>
            <Modal id="portfolioModal1"
            label="portfolioModal1"
            title="Log Cabin"
            imgUrl="assets/img/portfolio/cabin.png"
            />
            <Modal id="portfolioModal2"
            label="portfolioModal2"
            title="Tasty Cake"
            imgUrl="assets/img/portfolio/cake.png"
            />
            <Modal id="portfolioModal3"
            label="portfolioModal3"
            title="Circus Tent"
            imgUrl="assets/img/portfolio/circus.png"
            />
            <Modal id="portfolioModal4"
            label="portfolioModal4"
            title="Controller"
            imgUrl="assets/img/portfolio/game.png"
            />
            <Modal id="portfolioModal5"
            label="portfolioModal5"
            title="Locked Safe"
            imgUrl="assets/img/portfolio/safe.png"
            />
            <Modal id="portfolioModal6"
            label="portfolioModal6"
            title="Submarine"
            imgUrl="assets/img/portfolio/submarine.png"
            />
        </div>
    )
}

export default App;