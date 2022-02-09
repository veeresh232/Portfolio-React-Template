import React from 'react';
import Card from './Card';

const PortfolioSection = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
    <div className="container">
        {/* // !-- Portfolio Section Heading-- */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        {/* //-- Icon Divider-- */}
        <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
        {/* //!-- Portfolio Grid Items-- */}
        <div className="row justify-content-center">
            {/* // !-- Portfolio Item 1-- */}
            
            <Card imgUrl="assets/img/portfolio/cabin.png" target="#portfolioModal1"/>
            {/* // Portfolio Item 2-- */}
            <Card imgUrl="assets/img/portfolio/cake.png" target="#portfolioModal2"/>
           
            {/* //  Portfolio Item 3- */}

            <Card imgUrl="assets/img/portfolio/circus.png" target="#portfolioModal3"/>
           
            <Card imgUrl="assets/img/portfolio/game.png" target="#portfolioModal4"/>
            
            <Card imgUrl="assets/img/portfolio/safe.png" target="#portfolioModal5"/>
            
            
            <Card imgUrl="assets/img/portfolio/submarine.png" target="#portfolioModal6"/>
            
            
           
        </div>
    </div>
</section>
  )
};

export default PortfolioSection;
