import "./App.scss";
import React from "react";

import Main from "./Main";
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
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Image,
} from "react-bootstrap";

// Assets.
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
import GoogleChromeLogo from "./assets/img/googlechrome.png";
import FirefoxLogo from "./assets/img/firefox.png";
import WindowsLogo from "./assets/img/windows.png";
import MacOsLogo from "./assets/img/macos.png";
import UbuntuLogo from "./assets/img/ubuntu.png";
import DingosinoLogo from "./assets/img/dingosino.png";
import RobloxLogo from "./assets/img/roblox.png";
import DingominerLogo from "./assets/img/dingominer.png";
import NftLogo from "./assets/img/dingocoinnftplatform.png";
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
import {
  faChartLine,
  faHammer,
  faMicroscope,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WechatInvite from "./assets/img/wechatinvite.png";
import BtokLogo from "./assets/img/btok.png";
import DingodiggersLogo from "./assets/img/dingodigger.png";
import SocialFaucetLogo from "./assets/img/socialfaucet.png";
import CryptoGrenadeLogo from "./assets/img/cryptogrenade.png";

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
                <Nav.Link href="/">
                  Home
                </Nav.Link>
                <NavDropdown className="navbar-important" title="$DINGO">
                  <NavDropdown.Header>Wallets</NavDropdown.Header>
                  <div className="d-flex flex-wrap navbar-panel justify-content-center">
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://chrome.google.com/webstore/detail/dingocoin-wallet/kfapifmeobcllcbdjmgnkbfbcokmdkmf"
                    >
                      <img alt="" src={GoogleChromeLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://addons.mozilla.org/en-US/firefox/addon/dingocoin-wallet/"
                    >
                      <img alt="" src={FirefoxLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/dingocoin/dingocoin/releases/latest"
                    >
                      <img alt="" src={WindowsLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/dingocoin/dingocoin/releases/latest"
                    >
                      <img alt="" src={MacOsLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/dingocoin/dingocoin/releases/latest"
                    >
                      <img alt="" src={UbuntuLogo} />
                    </NavDropdown.Item>
                  </div>
                  <NavDropdown.Header>Wallets (Unofficial)</NavDropdown.Header>
                  <div className="d-flex flex-wrap navbar-panel justify-content-center">
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://beehivewallet.link/"
                    >
                      <span>Beehive (Web)</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="noreferrer"
                      href="https://play.google.com/store/apps/details?id=com.beehive.beehivemulti_coinwallet"
                    >
                      <span>Beehive (Android)</span>
                    </NavDropdown.Item>
                  </div>
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
                  <NavDropdown.Header>Fun and Activities</NavDropdown.Header>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://nft.dingocoin.org/"
                  >
                    <div className="inline-logo-holder">
                      <Image src={NftLogo} />
                    </div>{" "}
                    Dingocoin NFT Platform
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://discord.gg/fka9pZXxPB"
                  >
                    <div className="inline-logo-holder">
                      <Image src={DingodiggersLogo} />
                    </div>{" "}
                    <span>Dingo Diggers</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://discord.gg/9advvJ4z5f"
                  >
                    <div className="inline-logo-holder">
                      <Image src={DingosinoLogo} />
                    </div>{" "}
                    Dingosino
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.roblox.com/games/8019728893/Dingo-Coin-City"
                  >
                    <div className="inline-logo-holder">
                      <Image src={RobloxLogo} />
                    </div>{" "}
                    Dingocoin City (Roblox)
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="http://miner.dingocoin.org/"
                  >
                    <div className="inline-logo-holder">
                      <Image src={DingominerLogo} />
                    </div>{" "}
                    Dingo Miner
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/stake"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon icon={faChartLine} />
                    </div>{" "}
                    Stake Dingocoins
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/dingocoincrypto"
                  >
                    <div className="inline-logo-holder">
                      <Image src={SocialFaucetLogo} />
                    </div>{" "}
                    Weekly Airdrops (Twitter)
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://cryptogrenade.xyz/"
                  >
                    <div className="inline-logo-holder">
                      <Image src={CryptoGrenadeLogo} />
                    </div>{" "}
                    CG's Faucet Platform
                  </NavDropdown.Item>
                  <NavDropdown.Header>Chats and Socials</NavDropdown.Header>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://discord.gg/y3J946HFQM"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faDiscord}
                        style={{ color: "#728ad6" }}
                      />
                    </div>{" "}
                    Discord
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/DingoCoinTalk"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faTelegram}
                        style={{ color: "#0088cc" }}
                      />
                    </div>{" "}
                    Telegram
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/dingocoincrypto"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ color: "#0dace9" }}
                      />
                    </div>{" "}
                    Twitter
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/dingocoin"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "#ba248d" }}
                      />
                    </div>{" "}
                    Instagram
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.reddit.com/r/dingocoin"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faReddit}
                        style={{ color: "#fe4824" }}
                      />
                    </div>{" "}
                    Reddit
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/Dingocoin.org/"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ color: "#3b5a95" }}
                      />
                    </div>{" "}
                    Facebook
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="navbar-important" title="Resources">
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://miningpoolstats.stream/dingocoin"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon icon={faHammer} />
                    </div>{" "}
                    Mining Info
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://explorer.dingocoin.org/"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon icon={faMicroscope} />
                    </div>{" "}
                    Explorer (Official; API)
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="noreferrer"
                    href="https://openchains.info/coin/dingocoin/blocks"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon icon={faMicroscope} />
                    </div>{" "}
                    Explorer (Open Chains)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/privacy">
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon icon={faUserSecret} />
                    </div>{" "}
                    Privacy Policy
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/trailmap">
                  Trailmap
                </Nav.Link>
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
                  href="https://t.me/DingoCoin_VietNam"
                  className="socials-button-labelled"
                >
                  <div className="inner">
                    <FontAwesomeIcon
                      className="faicon"
                      icon={faTelegram}
                      style={{ color: "#0088cc" }}
                    />
                    <div className="inner-text">
                      <span>tiếng Việt</span>
                    </div>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/Dingocoinpersian"
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
