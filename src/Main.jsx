import React from "react";

// Controls.
import { Button, Container, Row, Col, Modal, Image } from "react-bootstrap";
import CustomDivider from "./CustomDivider";
import FadeInSection from "./FadeInSection";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Assets.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import AutradexLogo from "./assets/img/autradex.png";
import BirdeyeLogo from "./assets/img/birdeye.png";
import BitmartLogo from "./assets/img/bitmartlogo.png";
import CoinCodexLogo from "./assets/img/coincodex.png";
import CoinGeckoLogo from "./assets/img/coingecko.png";
import CoinMarketCapLogo from "./assets/img/coinmarketcap.png";
import CoinPaprikaLogo from "./assets/img/coinpaprika.png";
import CratexIoLogo from "./assets/img/cratexio.png";
import DelionDexLogo from "./assets/img/deliondex.png";
import DexGuruLogo from "./assets/img/dex-guru.png";
import DexTradeLogo from "./assets/img/dextrade.png";
import DingocoinAnimatedLogo from "./assets/img/dingocoin-rotate.gif";
import DingocoinCollection1Logo from "./assets/img/dingocoincollection1.png";
import DoucheyDingoesLogo from "./assets/img/doucheydingos.gif";
import ExbitronLogo from "./assets/img/exbitron.png";
import LBankLogo from "./assets/img/lbanklogo.png";
import MerchCryptoDingosLogo from "./assets/img/merch_cryptodingos.png";
import MerchDingocoinArtLogo from "./assets/img/merch_dingocoinart.png";
import PancakeSwap from "./assets/img/pancakeswap.png";
import PooCoinLogo from "./assets/img/poocoin.png";
import RaydiumSwap from "./assets/img/raydiumswap.png";
import SouthXchangeLogo from "./assets/img/southxchange.png";
import XTCOMLogo from "./assets/img/xtcom.png";
import HighlightBrowserWallet from "./assets/img/highlight-browserwallet.png";
import HighlightDingotip from "./assets/img/highlight-dingotip.png";
import HighlightNft from "./assets/img/highlight-nft.png";
import HighlightActivities from "./assets/img/highlight-activities.gif";
import HighlightGames from "./assets/img/highlight-games.gif";
import HighlightWrap from "./assets/img/wdingocoin.png";

function Main() {
  const [exchangesModalShow, setExchangesModalShow] = React.useState(false);
  const [marketplaceModalShow, setMarketplaceModalShow] = React.useState(false);

  return (
    <div>
      <header id="home" className="masthead">
        <Container>
          {/* Desktop view */}
          <div className="d-none d-lg-block">
            <div className="d-flex flex-row py-5">
              <div className="d-flex flex-column me-auto my-5">
                <h1 className="title text-start">
                  Community Development. Worldwide Adoption.
                </h1>
                <p className="lead mt-4 mb-4 text-start ms-0 me-auto">
                  Dingocoin is the most successful cryptocurrency fork of
                  Dogecoin, with revolutionary innovations and unstoppable
                  developments.
                </p>
                <div className="mb-5 d-flex flex-row me-auto">
                  <a href="/wallets">
                    <Button className="btn-light me-3 px-4 py-2 rounded-pill">
                      Get wallet
                    </Button>
                  </a>
                  <Button
                    className="btn-light ms-3 px-4 py-2 rounded-pill"
                    onClick={() => setExchangesModalShow(true)}
                  >
                    Trade Dingocoin
                  </Button>
                </div>
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
                  Community Development. Worldwide Adoption.
                </h2>
                <p className="lead mt-2 text-start mx-auto">
                  Dingocoin is the most successful cryptocurrency fork of
                  Dogecoin, with revolutionary innovations and unstoppable
                  developments.
                </p>
                <div className="d-flex flex-row mx-auto mt-2">
                  <a href="/wallets">
                    <Button className="btn-light me-3 px-4 py-2 rounded-pill">
                      Get Wallet
                    </Button>
                  </a>
                  <Button
                    className="btn-light ms-3 px-4 py-2 rounded-pill"
                    onClick={() => setExchangesModalShow(true)}
                  >
                    Trade Dingocoin
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <section className="features">
        <Container className="py-5 mt-5">
          <FadeInSection>
            <h2 className="mb-3 text-center">Building Adoption</h2>
            <span className="subtitle mx-auto text-start text-lg-center">
              Dingocoin believes in utility and fun for all. We aim to become
              the digital currency that is adopted everywhere.
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
                    <Image src={HighlightDingotip} alt="" />
                    <a
                      href="https://play.google.com/store/apps/details?id=com.dingotip"
                      target="_blank"
                      rel="noreferrer"
                      className="over-layer"
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">DingoTip</h3>
                    <p className="post-description">
                      With DingoTip you can effortlessly send and receive crypto
                      using your phone number only. It is made with love for
                      simplicity, by the Dingocoin community.
                    </p>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.dingotip"
                      target="_blank"
                      rel="noreferrer"
                      className="read-more"
                    >
                      Get Android Preview (Beta) ᐳ
                    </a>
                  </div>
                </div>

                <div className="post-slide">
                  <div className="post-img">
                    <Image src={HighlightNft} alt="" />
                    <a
                      href="https://nft.dingocoin.org"
                      target="_blank"
                      rel="noreferrer"
                      className="over-layer"
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">NFT Platform</h3>
                    <p className="post-description">
                      Create and trade NFTs on-chain, with our very own NFT
                      platform. Spend near-zero gas fees, and receive earnings
                      immediately. Become the top NFT connoisseur!
                    </p>
                    <a
                      href="https://nft.dingocoin.org"
                      target="_blank"
                      rel="noreferrer"
                      className="read-more"
                    >
                      Visit NFT Platform ᐳ
                    </a>
                  </div>
                </div>

                <div className="post-slide">
                  <div className="post-img">
                    <Image src={HighlightGames} alt="" />
                    <a href="/projects#games" className="over-layer">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Games and Social</h3>
                    <p className="post-description">
                      Play Dingocoin games made by the community. Chat with the
                      wild pack on Discord. Hang out and have fun.
                    </p>
                    <a href="/community" className="read-more">
                      Social ᐳ
                    </a>
                    <a href="/projects#games" className="read-more">
                      Games ᐳ
                    </a>
                  </div>
                </div>

                <div className="post-slide">
                  <div className="post-img">
                    <Image src={HighlightActivities} alt="" />
                    <a href="/projects#activities" className="over-layer">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Never-Ending Activities</h3>
                    <p className="post-description">
                      Weekly twitter airdrops, staking, paid-to-click referral
                      rewards. Earn free Dingocoins by participating in our
                      activities!
                    </p>
                    <a href="/projects#activities" className="read-more">
                      Explore Activities ᐳ
                    </a>
                  </div>
                </div>

                <div className="post-slide">
                  <div className="post-img">
                    <Image src={HighlightBrowserWallet} alt="" />
                    <a href="/wallets" className="over-layer">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Web3.0 Browser Wallet</h3>
                    <p className="post-description">
                      Our browser wallet lets you hold Dingocoins right in your
                      browser. It also lets you interact with webpages, bringing
                      Dingocoin to the world of Web3.0.
                    </p>
                    <a href="/wallets" className="read-more">
                      Explore Wallets ᐳ
                    </a>
                  </div>
                </div>

                <div className="post-slide">
                  <div className="post-img">
                    <Image src={HighlightWrap} alt="" />
                    <a href="/projects#infrastructure" className="over-layer">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Wrapped Dingocoin</h3>
                    <p className="post-description">
                      Our community-maintained custodians let you wrap
                      Dingocoins onto BSC and SOL. Do whatever you want,
                      wherever you want.
                    </p>
                    <a href="/projects#infrastructure" className="read-more">
                      View Infrastructure ᐳ
                    </a>
                  </div>
                </div>
              </OwlCarousel>
            </Container>

            <div className="d-flex">
              <a href="/projects" className="mx-auto">
                <Button
                  className="rounded-pill px-5 py-2"
                  style={{ fontSize: "1.3rem" }}
                >
                  <span>Tour All Projects</span>
                  <FontAwesomeIcon className="icon ms-2" icon={faArrowRight} />
                </Button>
              </a>
            </div>

            {/*
            <div className="d-none d-lg-flex flex-row mt-5">
              <div
                className="cell d-flex ms-auto"
                style={{
                  borderWidth: "1px 0px 1px 1px",
                  borderStyle: "solid",
                  borderRadius: "5px 0px 0px 5px",
                }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <span>
                      <b>Modern wallets.</b>
                    </span>
                    <span className="ms-1">
                      Access Dingocoin from the Web, Browser, Mobile, and
                      Desktop.
                    </span>
                  </div>
                  <div className="d-flex flex-row mt-auto">
                    <FontAwesomeIcon className="icon" icon={faGlobe} />
                  </div>
                </div>
              </div>
              <div
                className="cell d-flex"
                style={{
                  borderWidth: "1px 1px 1px 1px",
                  borderStyle: "solid",
                  borderRadius: "0px 0px 0px 0px",
                }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <span>
                      <b>Services, games, activities.</b>
                    </span>
                    <span className="ms-1">
                      <br />
                      Build practical projects for Dingocoin.
                    </span>
                  </div>
                  <div className="d-flex flex-row mt-auto">
                    <FontAwesomeIcon className="icon" icon={faShapes} />
                  </div>
                </div>
              </div>
              <div
                className="cell me-auto d-flex"
                style={{
                  borderWidth: "1px 1px 1px 0px",
                  borderStyle: "solid",
                  borderRadius: "0px 5px 5px 0px",
                }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <span>
                      <b>Community driven.</b>
                    </span>
                    <span className="ms-1">
                      Bring out the most resilient and unexpected ideas.
                    </span>
                  </div>
                  <div className="d-flex flex-row mt-auto">
                    <FontAwesomeIcon className="icon" icon={faPeopleCarry} />
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex d-lg-none flex-column mt-4 px-2">
              <div
                className="cell-md d-flex mx-auto"
                style={{
                  borderWidth: "1px 1px 0px 1px",
                  borderStyle: "solid",
                  borderRadius: "5px 5px 0px 0px",
                }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <span>
                      <b>Modern wallets.</b>
                    </span>
                    <span className="ms-1">
                      Access Dingocoin from the Web, Browser, Mobile, and
                      Desktop.
                    </span>
                  </div>
                  <div className="d-flex flex-row mt-auto">
                    <FontAwesomeIcon className="icon" icon={faGlobe} />
                  </div>
                </div>
              </div>
              <div
                className="cell-md d-flex mx-auto"
                style={{
                  borderWidth: "1px 1px 1px 1px",
                  borderStyle: "solid",
                  borderRadius: "0px 0px 0px 0px",
                }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <span>
                      <b>Services, games, activities.</b>
                    </span>
                    <span className="ms-1">
                      Build practical projects for Dingocoin.
                    </span>
                  </div>
                  <div className="d-flex flex-row mt-auto">
                    <FontAwesomeIcon className="icon" icon={faShapes} />
                  </div>
                </div>
              </div>
              <div
                className="cell-md mx-auto d-flex"
                style={{
                  borderWidth: "0px 1px 1px 1px",
                  borderStyle: "solid",
                  borderRadius: "0px 0px 5px 5px",
                }}
              >
                <div className="d-flex flex-column">
                  <div>
                    <span>
                      <b>Community driven.</b>
                    </span>
                    <span className="ms-1">
                      Bring out the most resilient and unexpected ideas.
                    </span>
                  </div>
                  <div className="d-flex flex-row mt-auto">
                    <FontAwesomeIcon className="icon" icon={faPeopleCarry} />
                  </div>
                </div>
              </div>
            </div>
            */}
          </FadeInSection>
        </Container>
      </section>

      <section className="highlights"></section>

      <section className="ecosystem">
        <Container className="py-5 mt-3 mb-4">
          <FadeInSection>
            <h2 className="text-center">Join Our Wild Ecosystem</h2>
            <div className="d-flex flex-row flex-wrap justify-content-center mt-5">
              <a href="/community" className="card d-flex flex-column rounded">
                <h3 className="text-start">Community</h3>
                <span>
                  Discover the Dingocoin community. Hang out, have fun.
                </span>
                <Button>
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                </Button>
                <div className="d-flex mt-auto">
                  <FontAwesomeIcon className="logo" icon={faUsers} />
                </div>
              </a>
             
	    {/* <a
                href="https://dev.dingocoin.org"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="card d-flex flex-column rounded"
              >
                <h3 className="text-start">Development Forum</h3>
                <span>Propose, discuss, and build projects for Dingocoin.</span>
                <Button>
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                </Button>
                <div className="d-flex mt-auto">
                  <FontAwesomeIcon className="logo" icon={faLaptopCode} />
                </div>
              </a> */}
              <a href="/wallets" className="card d-flex flex-column rounded">
                <h3 className="text-start">Get Wallet</h3>
                <span>Start your journey with Dingocoin today.</span>
                <Button>
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                </Button>
                <div className="d-flex mt-auto">
                  <FontAwesomeIcon className="logo" icon={faWallet} />
                </div>
              </a>
            </div>
          </FadeInSection>
        </Container>
      </section>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={exchangesModalShow}
        onHide={() => {
          setExchangesModalShow(false);
        }}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Buy Dingocoin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="exchangesModalSection">
            <Row>
              <Col>
                <h5>Buy Dingocoin</h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://www.bitmart.com/trade/en?symbol=DINGO_USDT"
              >
                <Button variant="outline">
                  <img alt="" src={BitmartLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://www.lbank.info/exchange/dingo/usdt"
              >
                <Button variant="outline">
                  <img alt="" src={LBankLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://www.xt.com/trade/dingo_usdt"
              >
                <Button variant="outline">
                  <img alt="" src={XTCOMLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://main.southxchange.com/Market/Book/DINGO/LTC"
              >
                <Button variant="outline">
                  <img alt="" src={SouthXchangeLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://wallet.autradex.systems/"
              >
                <Button variant="outline">
                  <img alt="" src={AutradexLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://www.exbitron.com/trading/dingousdt"
              >
                <Button variant="outline">
                  <img alt="" src={ExbitronLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://cratex.io/index.php?pair=DINGO/LTC"
              >
                <Button variant="outline">
                  <img alt="" src={CratexIoLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://dex-trade.com/spot/trading/DINGOUSDT"
              >
                <Button variant="outline">
                  <img alt="" src={DexTradeLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://dex.delion.online/market/DELION.DINGO_DOGE"
              >
                <Button variant="outline">
                  <img alt="" src={DelionDexLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://pancakeswap.finance/swap?outputCurrency=0x9b208b117B2C4F76C1534B6f006b033220a681A4"
              >
                <Button variant="outline">
                  <img alt="" src={PancakeSwap} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3&outputAmount=0&fixed=in"
              >
                <Button variant="outline">
                  <img alt="" src={RaydiumSwap} />
                </Button>
              </a>
            </Row>
          </Container>
          <Container className="exchangesModalSection">
            <Row>
              <Col>
                <h5>Live Charts</h5>
              </Col>
            </Row>
            <Row>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://coinpaprika.com/coin/dingo-dingocoin/"
              >
                <Button variant="outline">
                  <img alt="" src={CoinPaprikaLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://coinmarketcap.com/currencies/dingocoin/"
              >
                <Button variant="outline">
                  <img alt="" src={CoinMarketCapLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://www.coingecko.com/en/coins/dingocoin"
              >
                <Button variant="outline">
                  <img alt="" src={CoinGeckoLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://coincodex.com/crypto/dingocoin/"
              >
                <Button variant="outline">
                  <img alt="" src={CoinCodexLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://dex.guru/token/0x9b208b117B2C4F76C1534B6f006b033220a681A4-bsc"
              >
                <Button variant="outline">
                  <img alt="" src={DexGuruLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://poocoin.app/tokens/0x9b208b117b2c4f76c1534b6f006b033220a681a4"
              >
                <Button variant="outline">
                  <img alt="" src={PooCoinLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://birdeye.so/token/6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3"
              >
                <Button variant="outline">
                  <img alt="" src={BirdeyeLogo} />
                </Button>
              </a>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setExchangesModalShow(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={marketplaceModalShow}
        onHide={() => {
          setMarketplaceModalShow(false);
        }}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Dingocoin Marketplace
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="marketplace-container">
            <Row>
              <Col>
                <h5>Merchandise</h5>
              </Col>
            </Row>
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div className="marketplace-card">
                <div className="logo-holder mb-2">
                  <Image src={MerchDingocoinArtLogo} />
                </div>
                <a
                  target="_blank"
                  href="https://dingomerch.creator-spring.com"
                  rel="nofollow noopener noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    ! Amandum's Store
                  </Button>
                </a>
              </div>
            </div>
            <CustomDivider />
            <Row>
              <Col>
                <h5>NFTs (OpenSea)</h5>
              </Col>
            </Row>
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div className="marketplace-card">
                <div className="logo-holder mb-2">
                  <Image src={DingocoinCollection1Logo} />
                </div>
                <a
                  target="_blank"
                  href="https://opensea.io/collection/dingocoin1"
                  rel="nofollow noopener noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    DingoCoin Collection #1
                  </Button>
                </a>
              </div>
              <div className="marketplace-card">
                <div className="logo-holder mb-2">
                  <Image src={MerchCryptoDingosLogo} />
                </div>
                <a
                  target="_blank"
                  href="https://opensea.io/collection/cryptodingos"
                  rel="nofollow noopener noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    CryptoDingos
                  </Button>
                </a>
              </div>
              <div className="marketplace-card">
                <div className="logo-holder mb-2">
                  <Image src={MerchDingocoinArtLogo} />
                </div>
                <a
                  target="_blank"
                  href="https://opensea.io/collection/dingocoinart"
                  rel="nofollow noopener noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    Dingocoin Art
                  </Button>
                </a>
              </div>
              <div className="marketplace-card">
                <div className="logo-holder mb-2">
                  <Image src={DoucheyDingoesLogo} />
                </div>
                <a
                  target="_blank"
                  href="https://opensea.io/collection/douchey-dingos"
                  rel="nofollow noopener noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    Douchey Dingos
                  </Button>
                </a>
              </div>
            </div>
            <CustomDivider />
            <Row>
              <p>
                To list your own Dingocoin merchandise/NFT collection, hit us up
                on our Discord channel.
              </p>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setMarketplaceModalShow(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Main;
