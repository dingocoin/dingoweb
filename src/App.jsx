import "./App.scss";
import React from "react";

import Main from "./Main";
import Privacy from "./Privacy";
import Stake from "./Stake";
import Wallets from "./Wallets";
import Community from "./Community";
import TrailmapNextGen from "./TrailmapNextGen";
import TrailmapBrowserWallet from "./TrailmapBrowserWallet";
import TrailmapExchangeListings from "./TrailmapExchangeListings";
import TrailmapContribute from "./TrailmapContribute";
import TrailmapManifesto from "./TrailmapManifesto";
import TrailmapMultilinguistics from "./TrailmapMultilinguistics";
import TrailmapNFTPlatform from "./TrailmapNFTPlatform";
import TrailmapPrologue from "./TrailmapPrologue";
import TrailmapDingoTip from "./TrailmapDingoTip";
import ReactGA from "react-ga";

// Controls.
import {
  Modal,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Image,
} from "react-bootstrap";

// Assets.
import AutradexLogo from "./assets/img/autradex.png";
import BirdeyeLogo from "./assets/img/birdeye.png";
import CoinGeckoLogo from "./assets/img/coingecko.png";
import CoinMarketCapLogo from "./assets/img/coinmarketcap.png";
import CoinPaprikaLogo from "./assets/img/coinpaprika.png";
import CratexIoLogo from "./assets/img/cratexio.png";
import DelionDexLogo from "./assets/img/deliondex.png";
import DexTradeLogo from "./assets/img/dextrade.png";
import DingocoinLogo from "./assets/img/dingocoin.png";
import ExbitronLogo from "./assets/img/exbitron.png";
import HotbitLogo from "./assets/img/hotbitex.png";
import PancakeSwap from "./assets/img/pancakeswap.png";
import PooCoinLogo from "./assets/img/poocoin.png";
import RaydiumSwap from "./assets/img/raydiumswap.png";
import SouthXchangeLogo from "./assets/img/southxchange.png";
import XTCOMLogo from "./assets/img/xtcom.png";
import LBankLogo from "./assets/img/lbanklogo.png";
import BitmartLogo from "./assets/img/bitmartlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faMicroscope,
  faUserSecret,
  faWallet,
  faUsers,
  faShapes,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WechatInvite from "./assets/img/wechatinvite.png";
import Projects from "./Projects";

function App() {
  ReactGA.initialize("UA-210617812-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [location, setLocation] = React.useState(null);
  React.useEffect(() => {
    setLocation(window.location.pathname);
  }, []);
  React.useEffect(() => {}, [location]);

  const [wechatModalShow, setWechatModalShow] = React.useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar className="navbar" bg="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/" className="navbar-brand align-items-center">
              <img alt="" src={DingocoinLogo} />
              <span>DINGOCOIN</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav
                className="ms-auto"
                navbarScroll
                style={{ maxHeight: "300px" }}
              >
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown className="navbar-important" title="$DINGO">
                  <NavDropdown.Header>Wallets</NavDropdown.Header>
                  <NavDropdown.Item href="/wallets">
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        className="text-primary"
                        icon={faWallet}
                      />
                    </div>{" "}
                    Get Wallet
                  </NavDropdown.Item>
                  <NavDropdown.Header>Live Charts</NavDropdown.Header>
                  <div className="d-flex flex-wrap navbar-panel justify-content-center">
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://coinmarketcap.com/currencies/dingocoin/"
                    >
                      <img alt="" src={CoinMarketCapLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://coinpaprika.com/coin/dingo-dingocoin/"
                    >
                      <img alt="" src={CoinPaprikaLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.coingecko.com/en/coins/dingocoin"
                    >
                      <img alt="" src={CoinGeckoLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://poocoin.app/tokens/0x9b208b117b2c4f76c1534b6f006b033220a681a4"
                    >
                      <img alt="" src={PooCoinLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://birdeye.so/token/6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3"
                    >
                      <img alt="" src={BirdeyeLogo} />
                    </NavDropdown.Item>
                  </div>
                  <NavDropdown.Header>Exchanges</NavDropdown.Header>
                  <div className="d-flex flex-wrap navbar-panel justify-content-center">
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.bitmart.com/trade/en?symbol=DINGO_USDT"
                    >
                      <img alt="" src={BitmartLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.lbank.info/exchange/dingo/usdt"
                    >
                      <img alt="" src={LBankLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.xt.com/trade/dingo_usdt"
                    >
                      <img alt="" src={XTCOMLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.hotbit.io/exchange?symbol=DINGO_USDT"
                    >
                      <img alt="" src={HotbitLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://main.southxchange.com/Market/Book/DINGO/LTC"
                    >
                      <img alt="" src={SouthXchangeLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://wallet.autradex.systems/"
                    >
                      <img alt="" src={AutradexLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://cratex.io/index.php?pair=DINGO/LTC"
                    >
                      <img alt="" src={CratexIoLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.exbitron.com/trading/dingousdt"
                    >
                      <img alt="" src={ExbitronLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://dex-trade.com/spot/trading/DINGOUSDT"
                    >
                      <img alt="" src={DexTradeLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://dex.delion.online/market/DELION.DINGO_DOGE"
                    >
                      <img alt="" src={DelionDexLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://pancakeswap.finance/swap?outputCurrency=0x9b208b117B2C4F76C1534B6f006b033220a681A4"
                    >
                      <img alt="" src={PancakeSwap} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3&outputAmount=0&fixed=in"
                    >
                      <img alt="" src={RaydiumSwap} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://wrap.dingocoin.org"
                    >
                      <span>Wrap Custodian</span>
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>
                <NavDropdown className="navbar-important" title="Community">
                  <NavDropdown.Header>
                    Utilities, Activities, and Fun
                  </NavDropdown.Header>
                  <NavDropdown.Item href="/projects">
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faShapes}
                        className="text-primary"
                      />
                    </div>{" "}
                    Tour Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://dev.dingocoin.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="text-primary"
                      />
                    </div>{" "}
                    Start Developing
                  </NavDropdown.Item>
                  <NavDropdown.Header>Chats and Socials</NavDropdown.Header>
                  <NavDropdown.Item href="/community">
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faUsers}
                        className="text-primary"
                      />
                    </div>{" "}
                    Discover the Community
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="navbar-important" title="Resources">
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://miningpoolstats.stream/dingocoin"
                  >
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faHammer} />
                    </div>{" "}
                    Mining Info
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://docs.google.com/presentation/d/1HSe8sbY6HtCS7rUwpw5UkjguVKy4KJPRlfQ0apgCfDM/edit?usp=sharing"
                  >
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faHammer} />
                    </div>{" "}
                    Mining Guide
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://explorer.dingocoin.org/"
                  >
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faMicroscope} />
                    </div>{" "}
                    Explorer (Official; API)
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://openchains.info/coin/dingocoin/blocks"
                  >
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faMicroscope} />
                    </div>{" "}
                    Explorer (Open Chains)
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.dingochain.info/"
                  >
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faMicroscope} />
                    </div>{" "}
                    Explorer (Mirror)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/privacy">
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faUserSecret} />
                    </div>{" "}
                    Privacy Policy
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/trailmap">Trailmap</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/community" element={<Community />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/trailmap">
            <Route
              path="multilinguistics"
              element={<TrailmapMultilinguistics />}
            />
            <Route path="manifesto" element={<TrailmapManifesto />} />
            <Route path="contribute" element={<TrailmapContribute />} />
            <Route path="browserwallet" element={<TrailmapBrowserWallet />} />
            <Route
              path="exchangelistings"
              element={<TrailmapExchangeListings />}
            />
            <Route path="nftplatform" element={<TrailmapNFTPlatform />} />
            <Route path="dingotip" element={<TrailmapDingoTip />} />
            <Route path="nextgen" element={<TrailmapNextGen />} />
            <Route path="" element={<TrailmapPrologue />} />
          </Route>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Main />} />
        </Routes>

        <section className="section-footer text-center">
          <Container>
            <Row>
              <span>
                <b>© The Dingocoin Project 2021 - 2022</b>
              </span>
            </Row>
            <Row className="socials justify-content-md-center">
              <div className="mt-3">
                <span>Multisig Marketing Fund</span>
                <br />
                <b>
                  <a
                    rel="noreferrer"
                    href="https://openchains.info/coin/dingocoin/address/A4KTTmS4dECRZAn6ycsavechg8ccyjxkJP"
                    target="_blank"
                    className="simple-link"
                  >
                    A4KTTmS4dECRZAn6ycsavechg8ccyjxkJP
                  </a>
                </b>
              </div>
            </Row>
          </Container>
        </section>

        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={wechatModalShow}
          onHide={() => {
            setWechatModalShow(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Dingocoin WeChat Invite
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={WechatInvite}
            />
          </Modal.Body>
        </Modal>
      </div>
    </Router>
  );
}

export default App;
