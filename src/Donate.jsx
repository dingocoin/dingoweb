import React from "react";

// Controls.
import {Container, Image } from "react-bootstrap";
import FadeInSection from "./FadeInSection";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Assets.

import DingocoinAnimatedLogo from "./assets/img/dingocoin-rotate.gif";
import DevelopmentFund from "./assets/img/dev-fund-qrc.png";
import MarketingFund from "./assets/img/market-fund-qrc.png"; 
import WebsiteFund from "./assets/img/website-fund-qrc.png";

function Donate() {

  return (
    <div>
      <header id="Donate" className="masthead">
        <Container>
          {/* Desktop view */}
          <div className="d-none d-lg-block">
            <div className="d-flex flex-row py-5">
              <div className="d-flex flex-column me-auto my-5">
                <h1 className="title text-start">
                  Community Developed. Community Funded.
                </h1>
                <p className="lead mt-4 mb-4 text-start ms-0 me-auto">
                  Dingocoin is the most successful cryptocurrency fork of
                  Dogecoin, with revolutionary innovations and unstoppable
                  developments.
                </p>
              </div>
              <Image className="logo my-auto" src={DingocoinAnimatedLogo} />
            </div>
          </div>
          {/* Mobile */}
          <div className="d-lg-none">
            <div className="d-flex flex-column py-5">
              <Image
                className="logo-mobile my-auto mx-auto"
                src={DingocoinAnimatedLogo}
              />
              <div className="d-flex flex-column me-auto mt-4 mb-auto">
                <h2 className="title text-center">
                  Community Developed. Community Funded.
                </h2>
                <p className="lead mt-2 text-start mx-auto">
                  Dingocoin is the most successful cryptocurrency fork of
                  Dogecoin, with revolutionary innovations and unstoppable
                  developments.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <section className="features">
        <Container className="py-5 mt-5">
          <FadeInSection>
            <h2 className="mb-3 text-center">Support DingoCoin</h2>
            <span className="subtitle mx-auto text-start text-lg">
                Welcome, if you have found yourself here, you must be looking for ways to support The DingoCoin Project. <br/>
                GET YOUR DINGO ON!!! <br/>
          </span>
          <span className="subtitle mx-auto text-start text-lg">
          	Below are DingoCoin's <strong>Official Donation Wallets. </strong> <br/> <br/>
          	We kindly ask you to verify the receiving wallet address <strong>BEFORE</strong> sending any coins to <strong>ANYONE</strong>. <br /> 

            For Verification, compare the receiving wallet address to the below list. <br/>
          </span>

            <Container className="mt-4 mb-4">
              <OwlCarousel
                className="owl-theme"
                autoplay
                autoplayTimeout={10000}
                autoplayHoverPause
                nav
                navText={["", ""]}
                dots
                margin={10}
                responsive={{
                  0: { items: 1 },
                  992: { items: 2 },
                  1400: { items: 3 },
                }}
              >
                <div className="post-slide">
                  <div className="post-img">
                    <Image src={DevelopmentFund} alt="" />
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Development Fund</h3>
                    <p className="post-description">
                      This Fund is used for Development /Maintaining of DingoCoin Network, Features ect... 
                  </p>
                  <p>
                      Wallet Address: A2wZWFmxJEjj7EB1DVggYHfDA8fKbTNCNC 
                    </p>
                    <a
                      href="https://explorer.dingocoin.org/address/A2wZWFmxJEjj7EB1DVggYHfDA8fKbTNCNC"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="read-more"
                    >
                      Explorer View
                    </a>
                  </div>
                </div>

                <div className="post-slide">
                  <div className="post-img">
                    <Image src={MarketingFund} alt="" />
                  </div>
                    <div className="post-content">
                    <h3 className="post-title">Marketing Fund</h3>
                    <p className="post-description">
                      This Fund is used for Marketing of DingoCoin as a whole.
                    </p>
                    <p>
                      Wallet Address: A4KTTmS4dECRZAn6ycsavechg8ccyjxkJP 
                    </p>
                    <a
                      href="https://explorer.dingocoin.org/address/A4KTTmS4dECRZAn6ycsavechg8ccyjxkJP"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="read-more"
                    >
                      Explorer View
                    </a>
                   
                  </div>
                </div>

                <div className="post-slide">
                  <div className="post-img">
                    <Image src={WebsiteFund} alt="" />
                  </div>
                    <div className="post-content">
                    <h3 className="post-title">Website Fund</h3>
                    <p className="post-description">
                      This Fund is used for Maintaining dingocoin.org and Supporting Hardware. 
                    </p>
                    <p>
                      Wallet Address: DF4shJ9P6kULHstgj86RYmXpYAYcN87raY     
                    
                    </p>
                    <a
                      href="https://explorer.dingocoin.org/address/DF4shJ9P6kULHstgj86RYmXpYAYcN87raY"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="read-more"
                    >
                      Explorer View
                    </a>
                  
                  </div>
</div>

              </OwlCarousel>
            </Container>

          </FadeInSection>
        </Container>
      </section>

    </div>
  );
}

export default Donate;
