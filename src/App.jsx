import "./App.scss";
import React from "react";

import Main from "./Main";
import Airdrop from "./Airdrop";
import Burnboard from "./Burnboard";
import Privacy from "./Privacy";
import Stake from "./Stake";
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
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Image,
} from "react-bootstrap";

// Assets.
import BirdeyeLogo from "./assets/img/birdeye.png";
import CoinCodexLogo from "./assets/img/coincodex.png";
import CoinGeckoLogo from "./assets/img/coingecko.png";
import CoinMarketCapLogo from "./assets/img/coinmarketcap.png";
import CoinPaprikaLogo from "./assets/img/coinpaprika.png";
import CratexIoLogo from "./assets/img/cratexio.png";
import DelionDexLogo from "./assets/img/deliondex.png";
import DexGuruLogo from "./assets/img/dex-guru.png";
import DexTradeLogo from "./assets/img/dextrade.png";
import DingocoinLogo from "./assets/img/dingocoin.png";
import ExbitronLogo from "./assets/img/exbitron.png";
import HotbitLogo from "./assets/img/hotbitex.png";
import PancakeSwap from "./assets/img/pancakeswap.png";
import PooCoinLogo from "./assets/img/poocoin.png";
import RaydiumSwap from "./assets/img/raydiumswap.png";
import SouthXchangeLogo from "./assets/img/southxchange.png";
import XTCOMLogo from "./assets/img/xtcom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faTelegram,
  faReddit,
  faFacebook,
  faDiscord,
  faWeixin,
} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WechatInvite from "./assets/img/wechatinvite.png";
import BtokLogo from "./assets/img/btok.png";

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
                <Nav.Link href="/stake">Stake</Nav.Link>
                <Nav.Link
                  href="https://nft.dingocoin.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  NFT Platform
                </Nav.Link>
                <Nav.Link
                  href="https://wrap.dingocoin.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wrap
                </Nav.Link>
                <Nav.Link href="/trailmap">Trailmap</Nav.Link>
                <NavDropdown className="navbar-important" title="Links">
                  <NavDropdown.Header>Live Charts</NavDropdown.Header>
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
                    href="https://coinmarketcap.com/currencies/dingocoin/"
                  >
                    <img alt="" src={CoinMarketCapLogo} />
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
                    href="https://coincodex.com/crypto/dingocoin/"
                  >
                    <img alt="" src={CoinCodexLogo} />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://dex.guru/token/0x9b208b117B2C4F76C1534B6f006b033220a681A4-bsc"
                  >
                    <img alt="" src={DexGuruLogo} />
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
                  <NavDropdown.Divider />
                  <NavDropdown.Header>Exchanges</NavDropdown.Header>
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
                    href="https://raydium.io/swap/?from=11111111111111111111111111111111&to=6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3"
                  >
                    <img alt="" src={RaydiumSwap} />
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Header>Resources</NavDropdown.Header>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://miningpoolstats.stream/dingocoin"
                  >
                    Mining Info
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://explorer.dingocoin.org/"
                  >
                    Explorer (Official, with API)
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://openchains.info/coin/dingocoin/blocks"
                  >
                    Explorer (Open Chains)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/privacy">
                    Privacy Policy
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/burnboard" element={<Burnboard />} />
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

        <section className="section-footer">
          <Container>
            <Row>
              <span>
                <b>© The Dingocoin Project 2021 - 2022</b>
              </span>
            </Row>
            <Row className="socials justify-content-md-center">
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.gg/y3J946HFQM"
                  className="socials-button"
                >
                  <FontAwesomeIcon
                    className="faicon"
                    icon={faDiscord}
                    style={{ color: "#728ad6" }}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/DingoCoinTalk"
                  className="socials-button"
                >
                  <FontAwesomeIcon
                    className="faicon"
                    icon={faTelegram}
                    style={{ color: "#0088cc" }}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/dingocoincrypto"
                  className="socials-button"
                >
                  <FontAwesomeIcon
                    className="faicon"
                    icon={faTwitter}
                    style={{ color: "#0dace9" }}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/dingocoin"
                  className="socials-button"
                >
                  <FontAwesomeIcon
                    className="faicon"
                    icon={faInstagram}
                    style={{ color: "#ba248d" }}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.reddit.com/r/dingocoin"
                  className="socials-button"
                >
                  <FontAwesomeIcon
                    className="faicon"
                    icon={faReddit}
                    style={{ color: "#fe4824" }}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/Dingocoin.org/"
                  className="socials-button"
                >
                  <FontAwesomeIcon
                    className="faicon"
                    icon={faFacebook}
                    style={{ color: "#3b5a95" }}
                  />
                </a>
              </div>
              <div className="mt-3">
                <span>International Community</span>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/DingoChinese"
                  className="socials-button-labelled"
                >
                  <div className="inner">
                    <FontAwesomeIcon
                      className="faicon"
                      icon={faTelegram}
                      style={{ color: "#0088cc" }}
                    />
                    <div className="inner-text">
                      <span>中文</span>
                    </div>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/DingocoinBharat"
                  className="socials-button-labelled"
                >
                  <div className="inner">
                    <FontAwesomeIcon
                      className="faicon"
                      icon={faTelegram}
                      style={{ color: "#0088cc" }}
                    />
                    <div className="inner-text">
                      <span>हिंदी</span>
                    </div>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/+78qzpTUQ3xphZWU0"
                  className="socials-button-labelled"
                >
                  <div className="inner">
                    <FontAwesomeIcon
                      className="faicon"
                      icon={faTelegram}
                      style={{ color: "#0088cc" }}
                    />
                    <div className="inner-text">
                      <span>فارسی</span>
                    </div>
                  </div>
                </a>
                <div
                  onClick={() => setWechatModalShow(true)}
                  className="socials-button"
                >
                  <FontAwesomeIcon
                    className="faicon"
                    icon={faWeixin}
                    style={{ color: "#29bd00" }}
                  />
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://ss.transgot.cn/dingocoin_chian"
                  className="socials-button"
                >
                  <Image src={BtokLogo} />
                </a>
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
