import React from "react";

// Controls.
import { Button, Container, Row, Col, Modal, Image } from "react-bootstrap";
import CustomDivider from "./CustomDivider";

// Assets.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLaptopCode,
  faArrowRight,
  faUsers,
  faWallet,
  faPeopleCarry,
  faLaptop,
  faMobileAlt,
  faWindowRestore,
  faShapes,
  faBullhorn,
  faGamepad,
  faUserAstronaut,
  faBaby,
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
import HotbitLogo from "./assets/img/hotbitex.png";
import LBankLogo from "./assets/img/lbanklogo.png";
import MerchCryptoDingosLogo from "./assets/img/merch_cryptodingos.png";
import MerchDingocoinArtLogo from "./assets/img/merch_dingocoinart.png";
import PancakeSwap from "./assets/img/pancakeswap.png";
import PooCoinLogo from "./assets/img/poocoin.png";
import RaydiumSwap from "./assets/img/raydiumswap.png";
import SouthXchangeLogo from "./assets/img/southxchange.png";
import XTCOMLogo from "./assets/img/xtcom.png";

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
                <h1 className="title text-left">
                  Community Development. Worldwide Adoption.
                </h1>
                <p className="lead mt-4 mb-4 text-left ms-0 me-auto">
                  Dingocoin is the most successful cryptocurrency fork of
                  Dogecoin, with revolutionary innovations and unstoppable
                  developments. Building an enthusiastic community, we bring
                  utility and fun to world.
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
                <p className="lead mt-2 text-center mx-auto">
                  Dingocoin is the most successful cryptocurrency fork of
                  Dogecoin, with revolutionary innovations and unstoppable
                  developments. Building an enthusiastic community, we bring
                  utility and fun to world.
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
          <h2 className="mb-3">Building Adoption</h2>
          <span className="subtitle mx-auto">
            Dingocoin believes in utility and fun for all. With a community focused
            on building practical and meaningful applications, we strive to make
            Dingocoin the digital currency that is adopted everywhere.
          </span>

          <div className="d-flex">
            <a href="/projects" className="mx-auto">
              <Button
                className="rounded-pill px-5 py-2 mt-5 mb-5"
                style={{ fontSize: "1.3rem" }}
              >
                <span>Tour Projects</span>
                <FontAwesomeIcon className="icon ms-2" icon={faArrowRight} />
              </Button>
            </a>
          </div>

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
                    Access Dingocoin from the Web, Browser, Mobile, and Desktop.
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

          <div className="d-flex d-lg-none flex-column mt-4">
            <div
              className="cell-md d-flex ms-auto"
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
                    Access Dingocoin from the Web, Browser, Mobile, and Desktop.
                  </span>
                </div>
                <div className="d-flex flex-row mt-auto">
                  <FontAwesomeIcon className="icon" icon={faGlobe} />
                </div>
              </div>
            </div>
            <div
              className="cell-md d-flex"
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
              className="cell-md me-auto d-flex"
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
        </Container>
      </section>

      <section className="ecosystem">
        <Container className="py-5 mt-5 mb-5">
          <h2>Join our wild ecosystem</h2>
          <div className="d-flex flex-row flex-wrap justify-content-center mt-5">
            <a href="/community" className="card d-flex flex-column rounded">
              <h3 className="text-left">Community</h3>
              <span>Discover the Dingocoin community. Hang out, have fun.</span>
              <Button>
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </Button>
              <div className="d-flex mt-auto">
                <FontAwesomeIcon className="logo" icon={faUsers} />
              </div>
            </a>
            <a
              href="https://dev.dingocoin.org"
              target="_blank"
              rel="noreferrer"
              className="card d-flex flex-column rounded"
            >
              <h3 className="text-left">Development Forum</h3>
              <span>Propose, discuss, and build projects for Dingocoin.</span>
              <Button>
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </Button>
              <div className="d-flex mt-auto">
                <FontAwesomeIcon className="logo" icon={faLaptopCode} />
              </div>
            </a>
            <a href="/wallets" className="card d-flex flex-column rounded">
              <h3 className="text-left">Get Wallet</h3>
              <span>Start your journey with Dingocoin today.</span>
              <Button>
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </Button>
              <div className="d-flex mt-auto">
                <FontAwesomeIcon className="logo" icon={faWallet} />
              </div>
            </a>
          </div>
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
                rel="noreferrer"
                href="https://www.bitmart.com/trade/en?symbol=DINGO_USDT"
              >
                <Button variant="outline">
                  <img alt="" src={BitmartLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.lbank.info/exchange/dingo/usdt"
              >
                <Button variant="outline">
                  <img alt="" src={LBankLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.xt.com/trade/dingo_usdt"
              >
                <Button variant="outline">
                  <img alt="" src={XTCOMLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.hotbit.io/exchange?symbol=DINGO_USDT"
              >
                <Button variant="outline">
                  <img alt="" src={HotbitLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://main.southxchange.com/Market/Book/DINGO/LTC"
              >
                <Button variant="outline">
                  <img alt="" src={SouthXchangeLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wallet.autradex.systems/"
              >
                <Button variant="outline">
                  <img alt="" src={AutradexLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.exbitron.com/trading/dingousdt"
              >
                <Button variant="outline">
                  <img alt="" src={ExbitronLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://cratex.io/index.php?pair=DINGO/LTC"
              >
                <Button variant="outline">
                  <img alt="" src={CratexIoLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dex-trade.com/spot/trading/DINGOUSDT"
              >
                <Button variant="outline">
                  <img alt="" src={DexTradeLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dex.delion.online/market/DELION.DINGO_DOGE"
              >
                <Button variant="outline">
                  <img alt="" src={DelionDexLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://pancakeswap.finance/swap?outputCurrency=0x9b208b117B2C4F76C1534B6f006b033220a681A4"
              >
                <Button variant="outline">
                  <img alt="" src={PancakeSwap} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
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
                rel="noreferrer"
                href="https://coinpaprika.com/coin/dingo-dingocoin/"
              >
                <Button variant="outline">
                  <img alt="" src={CoinPaprikaLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://coinmarketcap.com/currencies/dingocoin/"
              >
                <Button variant="outline">
                  <img alt="" src={CoinMarketCapLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coingecko.com/en/coins/dingocoin"
              >
                <Button variant="outline">
                  <img alt="" src={CoinGeckoLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://coincodex.com/crypto/dingocoin/"
              >
                <Button variant="outline">
                  <img alt="" src={CoinCodexLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dex.guru/token/0x9b208b117B2C4F76C1534B6f006b033220a681A4-bsc"
              >
                <Button variant="outline">
                  <img alt="" src={DexGuruLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://poocoin.app/tokens/0x9b208b117b2c4f76c1534b6f006b033220a681a4"
              >
                <Button variant="outline">
                  <img alt="" src={PooCoinLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
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
                  rel="noreferrer"
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
                  rel="noreferrer"
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
                  rel="noreferrer"
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
                  rel="noreferrer"
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
                  rel="noreferrer"
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
