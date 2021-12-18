import React from "react";

// Assets.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faHeart,
  faRetweet,
  faSearch,
  faShoppingCart,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faTelegram,
  faReddit,
  faFacebook,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import BSCLogo from "./assets/img/bsc.png";
import CoinCodexLogo from "./assets/img/coincodex.png";
import CoinPaprikaLogo from "./assets/img/coinpaprika.png";
import CoinMarketCapLogo from "./assets/img/coinmarketcap.png";
import CratexIoLogo from "./assets/img/cratexio.png";
import DelionDexLogo from "./assets/img/deliondex.png";
import DexGuruLogo from "./assets/img/dex-guru.png";
import DexTradeLogo from "./assets/img/dextrade.png";
import DingocoinLogo from "./assets/img/dingocoin.png";
import DingosinoLogo from "./assets/img/dingosino.png";
import PancakeSwap from "./assets/img/pancakeswap.png";
import Parrot1Logo from "./assets/img/parrot.gif";
import Parrot2Logo from "./assets/img/moonwalkingparrot.gif";
import PooCoinLogo from "./assets/img/poocoin.png";
import RobloxLogo from "./assets/img/roblox.png";
import SOLLogo from "./assets/img/sol.png";
import SocialFaucetLogo from "./assets/img/socialfaucet.png";
import SouthXchangeLogo from "./assets/img/southxchange.png";
import MinerLogo from "./assets/img/transparent_miner.png";
import DingocoinCollection1Logo from "./assets/img/dingocoincollection1.png";
import BananaLogo from "./assets/img/happybanana.gif";
import HotbitLogo from "./assets/img/hotbitex.png";
import CoinGeckoLogo from "./assets/img/coingecko.png";
import ChristmasVideo from "./assets/img/christmas.mp4";
import ChristmasPreview from "./assets/img/christmaspreview.png";
import WDingocoinLogo from "./assets/img/wdingocoin.png";

// Controls.
import {
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Table,
  Accordion,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
  Modal,
  Image,
} from "react-bootstrap";
import CustomDivider from "./CustomDivider.jsx";
import { TwitterTweetEmbed } from "react-twitter-embed";

function shuffleArr(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]];
  }
}

function Main() {
  const [communityImagesAuthors, setCommunityImagesAuthors] = React.useState(
    []
  );
  const [communityImagesKeys, setCommunityImagesKeys] = React.useState([]);
  const [loadAllCommunityImages, setLoadAllCommunityImages] =
    React.useState(false);
  const [communityImages, setCommunityImages] = React.useState([]);

  React.useEffect(() => {
    const authors = require("./assets/img/community/authors");
    let keys = Object.keys(authors);
    shuffleArr(keys);
    setCommunityImagesAuthors(authors);
    setCommunityImagesKeys(keys);
  }, []);

  React.useEffect(() => {
    if (
      communityImagesAuthors.length === 0 ||
      communityImagesKeys.length === 0
    ) {
      return;
    }

    const importKeys = loadAllCommunityImages
      ? communityImagesKeys
      : communityImagesKeys.slice(0, 10);
    const images = require.context(
      "./assets/img/community",
      false,
      /\.(png|jpe?g|svg|gif|mp4)$/
    );
    const importedImages = [];
    for (const k of importKeys) {
      const imgPath = images.keys().find((x) => x.includes(k));
      if (typeof imgPath !== "undefined") {
        importedImages.push(images(imgPath));
      }
    }

    console.log(importedImages);

    setCommunityImages(
      importedImages.map((x) => {
        return {
          image: x,
          author:
            communityImagesAuthors[x.default.split("/").pop().split(".")[0]],
        };
      })
    );
  }, [communityImagesAuthors, communityImagesKeys, loadAllCommunityImages]);

  async function get(link) {
    const controller = new AbortController();
    return (
      await fetch(link, {
        withCredentials: true,
        signal: controller.signal,
      })
    ).json();
  }

  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(function () {
      setLoaded(true);
    }, 2500);
  }, []);

  const [dingoStats, setDingoStats] = React.useState(null);

  const [dingoPrice, setDingoPrice] = React.useState(null);
  const [dingoVolume, setDingoVolume] = React.useState(null);
  const [dingoCap, setDingoCap] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      // Get Dingocoin blockchain stats.
      const dingoStats = await get(
        "https://stats.dingocoin.org:8443/stats/dingo"
      );
      // It's late and I'm too tired to do it properly. Please replace this eventually.
      const blockReward =
        dingoStats.height < 300000
          ? 125000
          : dingoStats.height < 400000
          ? 62500
          : dingoStats.height < 500000
          ? 31250
          : dingoStats.height < 600000
          ? 15625
          : 10000;
      const blocksToHalving =
        dingoStats.height < 300000
          ? 300000 - dingoStats.height
          : dingoStats.height < 400000
          ? 400000 - dingoStats.height
          : dingoStats.height < 500000
          ? 500000 - dingoStats.height
          : dingoStats.height < 600000
          ? 600000 - dingoStats.height
          : null;

      // Get market stats.
      const { volume, price, cap } = await get(
        "https://stats.dingocoin.org:8443/stats/market"
      );

      setDingoStats({
        supply: Math.round(dingoStats.total_amount),
        blocks: dingoStats.height,
        blockReward: blockReward,
        blocksToHalving: blocksToHalving,
      });
      setDingoVolume(volume);
      setDingoPrice(price);
      setDingoCap(cap);
    })();
  }, []);

  const [socialFaucetRank, setSocialFaucetRank] = React.useState([]);
  const [socialFaucetHistoryRank, setSocialFaucetHistoryRank] = React.useState(
    []
  );
  const [socialFaucetView, setSocialFaucetView] = React.useState("weekly");
  React.useEffect(() => {
    (async () => {
      // Retireve.
      const { users, metrics, historyMetrics, address } = await get(
        "https://stats.dingocoin.org:8443/socialFaucet"
      );

      // Collate.
      const rank = [];
      for (const userId of Object.keys(metrics)) {
        rank.push({
          name: users[userId].name,
          handle: users[userId].screen_name,
          score: metrics[userId].score,
          likes: metrics[userId].like_count,
          retweets: metrics[userId].retweet_count,
          rank: null,
          address: address[userId],
        });
      }
      rank.sort(
        (a, b) => 0.5 * b.retweets + b.likes - (0.5 * a.retweets + a.likes)
      ); // Sort descending.
      // Add rank index.
      for (let i = 0; i < rank.length; i++) {
        rank[i].rank = i + 1;
      }
      setSocialFaucetRank(rank);

      console.log(historyMetrics);
      // Collate history.
      const historyRank = [];
      for (const userId of Object.keys(historyMetrics)) {
        if (userId in users) {
          historyRank.push({
            name: users[userId].name,
            handle: users[userId].screen_name,
            score: historyMetrics[userId].score,
            likes: historyMetrics[userId].like_count,
            retweets: historyMetrics[userId].retweet_count,
            rank: null,
          });
        }
      }
      historyRank.sort(
        (a, b) => 0.5 * b.retweets + b.likes - (0.5 * a.retweets + a.likes)
      ); // Sort descending.
      for (let i = 0; i < historyRank.length; i++) {
        historyRank[i].rank = i + 1;
      }
      setSocialFaucetHistoryRank(historyRank);
    })();
  }, []);

  const [burnBoardList, setBurnBoardList] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const burnList = await get("https://stats.dingocoin.org:8443/burnBoard");
      burnList.sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
      for (let i = 0; i < burnList.length; i++) {
        burnList[i].rank = i + 1;
      }
      setBurnBoardList(burnList);
    })();
  }, []);

  const [filterQuery, setFilterQuery] = React.useState("");
  const [filterText, setFilterText] = React.useState("");

  React.useEffect(() => {
    const timeOutId = setTimeout(() => setFilterText(filterQuery), 500);
    return () => clearTimeout(timeOutId);
  }, [filterQuery]);

  const [exchangesModalShow, setExchangesModalShow] = React.useState(false);
  const [marketplaceModalShow, setMarketplaceModalShow] = React.useState(false);
  const [artModalShow, setArtModalShow] = React.useState(false);
  const [selectedArt, setSelectedArt] = React.useState(null);

  return (
    <div>
      <Navbar className="navbar" bg="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <img alt="" src={DingocoinLogo} />
            <span>DINGOCOIN</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#ecosystem">Ecosystem</Nav.Link>
              <Nav.Link href="#airdrop">Weekly Airdrop</Nav.Link>
              <Nav.Link href="#roadmap">Roadmap</Nav.Link>
              <NavDropdown className="navbar-important" title="Resources">
                <NavDropdown.Header>Resources</NavDropdown.Header>
                <NavDropdown.Item
                  target="_blank"
                  rel="noreferrer"
                  href="/DingocoinWhitePaper.pdf"
                >
                  Whitepaper
                </NavDropdown.Item>
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
              </NavDropdown>
              <NavDropdown className="navbar-important" title="Live Charts">
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
              </NavDropdown>
              <NavDropdown className="navbar-important" title="Exchanges">
                <NavDropdown.Header>Exchanges</NavDropdown.Header>
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
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="section-a" id="home">
        <div className="particles-container">
          <Container className="masthead">
            <Row>
              <Col>
                <div className="isometric-holder">
                  <div
                    className={loaded ? "isometric" : "isometric preload"}
                  ></div>
                </div>
              </Col>
            </Row>
            <Row>
              <p className="masthead-title">
                Dingocoin is an open-source peer-to-peer digital currency.
                <br /> MUCH KING DINGO SUCH WILD DOGE
              </p>
            </Row>
            <Row xs={1} md={1} lg={1} className="quick-actions">
              <Col>
                <Button
                  className="popup-button"
                  variant="primary"
                  onClick={() => {
                    setExchangesModalShow(true);
                  }}
                >
                  Buy Dingocoin
                </Button>
              </Col>
            </Row>
            <Row xs={3} md={6} lg={6} className="socials">
              <Col className="socials-button-holder">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.gg/y3J946HFQM"
                >
                  <FontAwesomeIcon className="faicon" icon={faDiscord} />
                </a>
              </Col>
              <Col className="socials-button-holder">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/DingoCoinTalk"
                >
                  <FontAwesomeIcon className="faicon" icon={faTelegram} />
                </a>
              </Col>
              <Col className="socials-button-holder">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/dingocoincrypto"
                >
                  <FontAwesomeIcon className="faicon" icon={faTwitter} />
                </a>
              </Col>
              <Col className="socials-button-holder">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/dingocoin"
                >
                  <FontAwesomeIcon className="faicon" icon={faInstagram} />
                </a>
              </Col>
              <Col className="socials-button-holder">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.reddit.com/r/dingocoin"
                >
                  <FontAwesomeIcon className="faicon" icon={faReddit} />
                </a>
              </Col>
              <Col className="socials-button-holder">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/Dingocoin.org/"
                >
                  <FontAwesomeIcon className="faicon" icon={faFacebook} />
                </a>
              </Col>
            </Row>
            <Row>
              <h4 className="mt-4">
                <Image src={Parrot1Logo} style={{ height: "1.7rem" }} />
                WE ARE FINALLY LIVE ON COINMARKETCAP!
                <Image src={Parrot1Logo} style={{ height: "1.7rem" }} />
              </h4>
            </Row>
            <Row>
              <h4 className="mb-0 mt-4">
                Season's Greetings from the Dingocoin Community!
              </h4>
            </Row>
          </Container>
        </div>
      </header>

      <section>
        <video controls style={{ width: "100%" }} poster={ChristmasPreview}>
          <source src={ChristmasVideo} />
        </video>
      </section>

      <section className="section-b" id="ecosystem">
        <h2>ECOSYSTEM</h2>
        <CustomDivider />
        <Container className="ecosystem-section">
          <Row>
            <h4>Dingocoin Infrastructure and Markets</h4>
            <p>
              Dingocoin exists <i>both</i> as a coin on its own blockchain,{" "}
              <i>and</i> as wrapped tokens (wDingocoin) on BSC and SOL. Our goal
              is to make Dingocoin highly accessible, allowing you to get
              Dingocoins from both centralized exchanges (CEX) and decentralized
              exchanges (DEX). They are exchangeable 1:1 at anytime, via our
              unique community-decentralized wrap custodians.
            </p>
            <Container>
              <Row
                xs={1}
                md={2}
                lg={3}
                className="projects justify-content-center"
              >
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <Image src={DingocoinLogo} />
                    </div>
                    <h5>Dingocoin</h5>
                    <p>
                      <a
                        className="simple-link"
                        onClick={() => {
                          setExchangesModalShow(true);
                        }}
                      >
                        Buy Dingocoin &#9658;
                      </a>
                      <br />
                      <a
                        href="https://coinpaprika.com/coin/dingo-dingocoin/"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Live chart &#9658;
                      </a>
                      <br />
                      <a
                        href="https://github.com/dingocoin/dingocoin/releases/latest"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Official wallets &#9658;
                      </a>
                      <br />
                      <a
                        href="https://beehivewallet.link/"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Unofficial wallets &#9658;
                      </a>
                      <br />
                      <a
                        href="https://github.com/dingocoin/dingocoin"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Source code &#9658;
                      </a>
                      <br />
                      <a
                        href="https://miningpoolstats.stream/dingocoin"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Mine Dingocoin &#9658;
                      </a>
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <Image src={WDingocoinLogo} /> <Image src={BSCLogo} />
                    </div>
                    <h5>wDingocoin (BSC)</h5>
                    <p>
                      <a
                        className="simple-link"
                        onClick={() => {
                          setExchangesModalShow(true);
                        }}
                      >
                        Buy wDingocoin (BSC) &#9658;
                      </a>
                      <br />
                      <a
                        href="https://poocoin.app/tokens/0x9b208b117b2c4f76c1534b6f006b033220a681a4"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Live chart &#9658;
                      </a>
                      <br />
                      <a
                        href="https://bscscan.com/token/0x9b208b117B2C4F76C1534B6f006b033220a681A4"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Smart contract &#9658;
                      </a>
                      <br />
                      <a
                        href="https://wrap.dingocoin.org"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Wrap custodian &#9658;
                      </a>
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <Image src={WDingocoinLogo} /> <Image src={SOLLogo} />
                    </div>
                    <h5>wDingocoin (SOL)</h5>
                    <p>
                      <a
                        href="https://solscan.io/token/6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        SPL token &#9658;
                      </a>
                      <br />
                      <a
                        href="https://wrap.dingocoin.org"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Wrap custodian &#9658;
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>
              <Row
                xs={1}
                md={2}
                lg={3}
                className="projectFactsWrap justify-content-center"
              >
                <Col>
                  <div className="item">
                    <p className="number">
                      {dingoPrice === null ? "-" : "$" + dingoPrice.toFixed(7)}
                    </p>
                    <span></span>
                    <p>Dingocoin price</p>
                  </div>
                </Col>
                <Col>
                  <div className="item">
                    <p className="number">
                      {dingoCap === null
                        ? "-"
                        : "$" + Math.floor(dingoCap).toLocaleString()}
                    </p>
                    <span></span>
                    <p>Dingocoin marketcap</p>
                  </div>
                </Col>
                <Col>
                  <div className="item">
                    <p className="number">
                      {dingoVolume === null
                        ? "-"
                        : "$" + Math.floor(dingoVolume).toLocaleString()}
                    </p>
                    <span></span>
                    <p>24h volume</p>
                  </div>
                </Col>
              </Row>
              <Row
                xs={1}
                md={2}
                lg={4}
                className="projectFactsWrap justify-content-center"
              >
                <Col>
                  <div className="item">
                    <p className="number">
                      {dingoStats === null
                        ? "-"
                        : dingoStats.supply.toLocaleString()}
                    </p>
                    <span></span>
                    <p>Dingocoin supply</p>
                  </div>
                </Col>
                <Col>
                  <div className="item">
                    <p className="number">
                      {dingoStats === null
                        ? "-"
                        : dingoStats.blocks.toLocaleString()}
                    </p>
                    <span></span>
                    <p>Blocks mined</p>
                  </div>
                </Col>
                <Col>
                  <div className="item">
                    <p className="number">
                      {dingoStats === null
                        ? "-"
                        : dingoStats.blockReward.toLocaleString()}
                    </p>
                    <span></span>
                    <p>Current block reward</p>
                  </div>
                </Col>
                <Col>
                  <div className="item">
                    <p className="number">
                      {dingoStats === null
                        ? "-"
                        : dingoStats.blocksToHalving.toLocaleString()}
                    </p>
                    <span></span>
                    <p>Blocks to next halving</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
          <CustomDivider />
          <Row>
            <h4>Community and Social</h4>
            <p>
              Dingocoin prides itself as a completely community-driven project.
              All innovation and development are contributed entirely by the
              community. The Dingocoin pack takes the growth of Dingocoin into
              its own hands, focusing on building progress{" "}
              <i>by actually doing work</i>. We do not sit around and wait for
              the impossible to happen, nor do we attempt to overmarket. The
              Dingocoin pack is wild and unstoppable. Have an idea? Join us
              today, throw it out and we'll help!
            </p>
            <Container>
              <Row
                xs={1}
                md={2}
                lg={3}
                className="projects justify-content-center"
              >
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <FontAwesomeIcon
                        className="faicon"
                        icon={faDiscord}
                        style={{ color: "#728ad6" }}
                      />{" "}
                      <FontAwesomeIcon
                        className="faicon"
                        icon={faTelegram}
                        style={{ color: "#0088CC" }}
                      />
                    </div>
                    <h5>Community Channels</h5>
                    <p>
                      Join the Dingo disco.
                      <br />
                      <a
                        className="simple-link"
                        href="https://discord.gg/y3J946HFQM"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Discord &#9658;
                      </a>
                      <br />
                      <a
                        className="simple-link"
                        href="https://t.me/DingoCoinTalk"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Telegram &#9658;
                      </a>
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <FontAwesomeIcon className="faicon" icon={faRobot} />
                    </div>
                    <h5>Discord Faucet/Tip Bot</h5>
                    <p>
                      Get free sample Dingocoins.
                      <br /> Tip Dingocoins to others easily.
                      <br />
                      <a
                        className="simple-link"
                        href="https://discord.gg/y3J946HFQM"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Discord &#9658;
                      </a>
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <Image src={SocialFaucetLogo} />
                    </div>
                    <h5>Weekly Airdrop</h5>
                    <p>
                      Earn Dingocoins simply by promoting Dingocoin on Twitter.
                      <br />
                      <a className="simple-link" href="#airdrop">
                        Participate now &#9658;
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
          <CustomDivider />
          <Row>
            <h4>Fun and Art</h4>
            <p>
              The Dingocoin community loves its fun and art. We are working on
              highly innovative games and platforms which use Dingocoin to
              function -- including a Discord game server; a unique
              Dingocoin-themed Roblox game that lets you purchase in-game
              accessories using Dingocoin; and a daring attempt to run a better,
              novel NFT platform on the Dingocoin blockchain. We also have a
              hyperactive community producing a constant stream of artwork,
              memes, and merchandise.
            </p>
            <Container>
              <Row
                xs={1}
                md={2}
                lg={3}
                className="projects justify-content-center"
              >
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <Image src={DingosinoLogo} />
                    </div>
                    <h5>Dingosino</h5>
                    <p>
                      Play games using Dingocoins on Discord.
                      <br />
                      <a
                        className="simple-link"
                        href="https://discord.gg/9advvJ4z5f"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Join now &#9658;
                      </a>
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <FontAwesomeIcon
                        className="faicon"
                        icon={faShoppingCart}
                      />
                    </div>
                    <h5>Dingocoin Marketplace</h5>
                    <p>
                      Purchase Dingocoin merchandise/NFTs designed and sold by
                      community members.
                      <br />
                      <a
                        className="simple-link"
                        onClick={() => {
                          setMarketplaceModalShow(true);
                        }}
                      >
                        View merchandise &#9658;
                      </a>
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <Image src={RobloxLogo} />
                    </div>
                    <h5>Dingocoin City</h5>
                    <p>
                      Hang out with the Dingo Pack on Roblox.
                      <br />
                      Purchase in-game accessories with Dingocoins
                      <br />
                      <i>(Coming soon...)</i>
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <FontAwesomeIcon
                        className="faicon"
                        icon={faPencilRuler}
                      />
                    </div>
                    <h5>NFTs on Dingocoin</h5>
                    <p>
                      A daring project to run NFTs on-chain -- featuring
                      decentralized, non-custodial marketplaces; with{" "}
                      <i>truly privatizable</i> artwork, at ultra-low costs.
                      <br />
                      <i>(Coming soon...)</i>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
          <CustomDivider />
          <Row
            className="community-art justify-content-center"
            style={{ "text-align": "center" }}
          >
            <h3>
              <Image src={BananaLogo} />
              Community Art
              <Image src={BananaLogo} />
            </h3>
            <ul className="community-images mt-4">
              {communityImages.map((x, i) => (
                <li key={i}>
                  {x.image.default.endsWith(".mp4") && (
                    <video
                      controls
                      height="200"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedArt(x);
                        setArtModalShow(true);
                      }}
                    >
                      <source src={x.image.default} />
                    </video>
                  )}
                  {!x.image.default.endsWith(".mp4") && (
                    <Image
                      src={x.image.default}
                      onClick={() => {
                        setSelectedArt(x);
                        setArtModalShow(true);
                      }}
                    ></Image>
                  )}
                </li>
              ))}
              {!loadAllCommunityImages && (
                <li key="9999">
                  <Button
                    className="popup-button"
                    variant="primary"
                    onClick={() => {
                      setLoadAllCommunityImages(true);
                    }}
                  >
                    Load All
                  </Button>
                </li>
              )}
            </ul>
          </Row>
        </Container>
      </section>

      <section className="section-a" id="airdrop">
        <h2>DINGOCOIN WEEKLY AIRDROP</h2>
        <CustomDivider />
        <Container>
          <Row>
            <p>Earn Dingocoins simply by promoting Dingocoin on Twitter.</p>
          </Row>
          <Row xs={1} md={1} lg={2} className="mb-4 mt-3">
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>How to participate?</h5>
                  </Accordion.Header>
                  <Accordion.Body className="social-faucet-instructions">
                    <p>
                      Simply post on Twitter advertising Dingocoin. This can be
                      a <b>tweet</b>, a <b>quote-tweet</b>, or a <b>reply</b> to
                      another tweet.
                    </p>
                    <p>In your post, include all of:</p>
                    <ol>
                      <li>
                        a link to <code>dingocoin.org</code>,
                      </li>
                      <li>
                        hashtags <code>#dingocoin</code> and{" "}
                        <code>#weeklyairdrop</code>, and
                      </li>
                      <li>
                        a hashtag with your Dingocoin address (e.g.{" "}
                        <code>#DQBx7G4aozdqYFCv2dU4kacaEcPzwg8dkZ</code>). Your
                        rewards will be sent here.
                      </li>
                    </ol>
                    <p>
                      Retweet/quote-tweet such a post of someone else for
                      additional rewards (sent to your latest address, if any).
                    </p>
                    <p>
                      Below is an example tweet:
                      <TwitterTweetEmbed
                        tweetId={"1470096073809084429"}
                        options={{ height: 700 }}
                      />
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Rewards and payouts</h5>
                  </Accordion.Header>
                  <Accordion.Body className="social-faucet-instructions">
                    <p>Get rewarded based on your activity:</p>
                    <ul>
                      <li>
                        1 like on your post (including liking your own) = 1,000
                        Dingocoin
                      </li>
                      <li>
                        1 retweet/quote-retweet on your post = 500 Dingocoin
                      </li>
                      <li>
                        Retweet/quote-retweet someone else's post = 500
                        Dingocoin
                      </li>
                      <li>
                        Retweeting/quote-retweeting your own post = no reward
                      </li>
                    </ul>
                    <p>
                      * Each user can earn up to 20,000 Dingocoins per week. Top
                      3 users for the week can earn up to 100,000 for that week!
                    </p>
                    <p>
                      * Please ensure that you have a tweet in the current week
                      associating your Twitter account to a Dingocoin reward
                      address.
                    </p>
                    <p>
                      * Your posts might be filtered away by Twitter if your
                      account or activity is deemed too obscure or spammy.
                      Please try increasing the number of followers, to wait for
                      your account to mature, and/or to not spam too blatantly.
                    </p>
                    <p>
                      * The leaderboard is updated at the start of every hour.
                      Rewards are paid out every Sunday 4AM, UTC. The
                      leaderboard also resets at that time. Only retweets and
                      likes of tweets in the current week are scored.
                    </p>
                    <p>
                      * Rates are not fixed. May have to adjust in case we fly
                      to the moon.
                    </p>
                    <p>
                      <b>
                        Feeling generous? Fund our weekly airdrop to keep it
                        running :){" "}
                        <code>DJAuG2t4PtUQhFQsTddK1rhDHgE3cFU5oW</code>
                      </b>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <DropdownButton
                title={
                  socialFaucetView === "all-time"
                    ? "All-time Ranking"
                    : "This Week's Ranking"
                }
                className="mb-2"
              >
                <Dropdown.Item
                  onClick={() => {
                    setSocialFaucetView("all-time");
                  }}
                >
                  All-time Ranking
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSocialFaucetView("weekly");
                  }}
                >
                  This Week's Ranking
                </Dropdown.Item>
              </DropdownButton>
              <div className="social-faucet-board">
                {socialFaucetView === "all-time" && (
                  <Table
                    className="social-faucet-table"
                    striped
                    bordered
                    responsive
                  >
                    <thead>
                      <tr>
                        <th className="col-1">#</th>
                        <th className="col-7">User</th>
                        <th className="col-2">Score</th>
                        <th className="col-1">
                          <FontAwesomeIcon
                            className="faicon"
                            icon={faRetweet}
                          />
                        </th>
                        <th className="col-1">
                          <FontAwesomeIcon className="faicon" icon={faHeart} />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {socialFaucetHistoryRank
                        .filter(
                          (x) =>
                            x.name
                              .toLowerCase()
                              .includes(filterText.toLowerCase()) ||
                            x.handle
                              .toLowerCase()
                              .includes(filterText.toLowerCase())
                        )
                        .map((x) => (
                          <tr
                            key={x.rank}
                            className={
                              x.rank === 1
                                ? "gold"
                                : x.rank === 2
                                ? "silver"
                                : x.rank === 3
                                ? "bronze"
                                : ""
                            }
                          >
                            <td className="col-1">{x.rank}</td>
                            <td className="col-7">
                              <a
                                href={"https://twitter.com/" + x.handle}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {x.name}
                              </a>
                            </td>
                            <td className="col-2">
                              {(0.5 * x.retweets + x.likes).toFixed(1)}
                            </td>
                            <td className="col-1">
                              {x.retweets.toLocaleString()}
                            </td>
                            <td className="col-1">
                              {x.likes.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      {filterText === "" && (
                        <tr>
                          <td colSpan="2" className="col-7">
                            <b>Total</b>
                          </td>
                          <td className="col-2"></td>
                          <td className="col-1">
                            <b>
                              {socialFaucetHistoryRank
                                .map((x) => x.retweets)
                                .reduce((a, b) => a + b, 0)
                                .toLocaleString()}
                            </b>
                          </td>
                          <td className="col-1">
                            <b>
                              {socialFaucetHistoryRank
                                .map((x) => x.likes)
                                .reduce((a, b) => a + b, 0)
                                .toLocaleString()}
                            </b>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                )}
                {socialFaucetView === "weekly" && (
                  <Table
                    className="social-faucet-table"
                    striped
                    bordered
                    responsive
                  >
                    <thead>
                      <tr>
                        <th className="col-1">#</th>
                        <th className="col-6">User</th>
                        <th className="col-2 table-dingo">
                          <span>
                            <img alt="" src={DingocoinLogo} />
                          </span>
                          &nbsp;earned
                        </th>
                        <th className="col-1">Score</th>
                        <th className="col-1">
                          <FontAwesomeIcon
                            className="faicon"
                            icon={faRetweet}
                          />
                        </th>
                        <th className="col-1">
                          <FontAwesomeIcon className="faicon" icon={faHeart} />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {socialFaucetRank
                        .filter(
                          (x) =>
                            x.name
                              .toLowerCase()
                              .includes(filterText.toLowerCase()) ||
                            x.handle
                              .toLowerCase()
                              .includes(filterText.toLowerCase())
                        )
                        .map((x) => (
                          <tr
                            key={x.rank}
                            className={
                              x.rank === 1
                                ? "gold"
                                : x.rank === 2
                                ? "silver"
                                : x.rank === 3
                                ? "bronze"
                                : ""
                            }
                          >
                            <td className="col-1">{x.rank}</td>
                            <td className="col-6">
                              <a
                                href={"https://twitter.com/" + x.handle}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {x.name}
                              </a>
                            </td>
                            {typeof x.address === "undefined" && (
                              <td className="col-2">
                                <strike>
                                  {(x.score * 1000).toLocaleString()}
                                </strike>
                                *
                              </td>
                            )}
                            {typeof x.address !== "undefined" && (
                              <td className="col-2">
                                {(x.score * 1000).toLocaleString()}
                              </td>
                            )}
                            <td className="col-1">
                              {(0.5 * x.retweets + x.likes).toFixed(1)}
                            </td>
                            <td className="col-1">
                              {x.retweets.toLocaleString()}
                            </td>
                            <td className="col-1">
                              {x.likes.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      {filterText === "" && (
                        <tr>
                          <td colSpan="2" className="col-7">
                            <b>Total</b>
                          </td>
                          <td className="col-2">
                            <b>
                              {socialFaucetRank
                                .map((x) => x.score * 1000)
                                .reduce((a, b) => a + b, 0)
                                .toLocaleString()}
                            </b>
                          </td>
                          <td className="col-1"></td>
                          <td className="col-1">
                            <b>
                              {socialFaucetRank
                                .map((x) => x.retweets)
                                .reduce((a, b) => a + b, 0)
                                .toLocaleString()}
                            </b>
                          </td>
                          <td className="col-1">
                            <b>
                              {socialFaucetRank
                                .map((x) => x.likes)
                                .reduce((a, b) => a + b, 0)
                                .toLocaleString()}
                            </b>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                )}
              </div>
              <InputGroup className="mt-0">
                <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon className="faicon" icon={faSearch} />
                </InputGroup.Text>
                <FormControl
                  placeholder="Search user/handle..."
                  value={filterQuery}
                  onChange={(event) => setFilterQuery(event.target.value)}
                />
              </InputGroup>
              <p className="mt-4">
                <b>
                  Important update: we now require the{" "}
                  <code>#weeklyairdrop</code> hashtag instead of{" "}
                  <code>#socialfaucet</code>.
                </b>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-b" id="roadmap">
        <h2>ROADMAP - MILESTONES AND UPCOMING PLANS</h2>
        <CustomDivider />
        <p>
          <i>Did you know?</i>
          <br />
          Autradex was the first exchange to list Dingocoin, and provided a
          sacred trading ground for Dingocoin.
          <br />
          Unfortunately, Autradex sustained multiple 51% attacks, back when
          Dingocoin was not as secure as it is now.
          <br />
          Autradex eventually had to close down, shouldering the cost of the
          many attacks.
          <br />
          <i>
            Please consider donating toward the Autradex developers, who carried
            us when no one else could:
          </i>
          <br />
          <code>DDEG5hGGaMPQVTqqBoeGcXLXdDrYauRRxi</code>
        </p>
        <Container>
          <ul className="timeline">
            <li className="event eventcompleted" data-date="Apr 1, 2021">
              <h3>Birth of Dingocoin</h3>
              <p>Initial deployment. Block reward set to 0 - 1,000,000.</p>
            </li>
            <li className="event eventcompleted" data-date="Apr 2021">
              <h3>Block reward halved to 500,000</h3>
              <p>5,000 Blocks Mined.</p>
            </li>
            <li className="event eventcompleted" data-date="Apr 2021">
              <h3>Listed on Autradex</h3>
            </li>
            <li className="event eventcompleted" data-date="Apr 2021">
              <h3>Listed on DelionDEX</h3>
            </li>
            <li className="event eventcompleted" data-date="May 2021">
              <h3>Listed on Dex-Trade</h3>
              <p>
                Listing fee of <b>$2,500</b> raised by the community.
              </p>
            </li>
            <li className="event eventcompleted" data-date="Jun 2021">
              <h3>Block reward halved to 250,000</h3>
              <p>100,000 Blocks Mined.</p>
            </li>
            <li className="event eventcompleted" data-date="Jul 2021">
              <h3>Listed on Cratex</h3>
            </li>
            <li className="event eventcompleted" data-date="Aug 2021">
              <h3>Wrapped Dingocoin released on BSC</h3>
              <p>
                Hold and trade Dingocoin on BSC.
                <br />
                <b>
                  - <i>We hit a record $100,000 24H trading volume!</i> 🎉
                </b>
              </p>
            </li>
            <li className="event eventcompleted" data-date="Aug 2021">
              <h3>Block reward halved to 125,000</h3>
              <p>200,000 Blocks Mined.</p>
            </li>
            <li className="event eventcompleted" data-date="Aug 2021">
              <h3>Listed on SouthXchange</h3>
              <p>
                Listing fee of <b>$5,000</b> raised by the community.
              </p>
            </li>
            <li className="event eventcompleted" data-date="Sep 2021">
              <h3>Max Re-org Length Activated</h3>
              <p>
                Protects against 51% attacks.
                <br />
                Confirmations on exchanges can now be reduced significantly.
              </p>
            </li>
            <li className="event eventcompleted" data-date="Oct 2021">
              <h3>Chain ID switch activated</h3>
              <p>
                Merged mining can now be done alongside Doge without conflict.
                <br />
                Increases exposure to miners via AuxPoW.
                <br />
                <b>
                  -{" "}
                  <i>
                    We hit 1TH/s hashrate on the same day, 10x our past record!
                  </i>{" "}
                  🎉
                </b>
              </p>
            </li>
            <li className="event eventcompleted" data-date="Nov 2021">
              <h3>Dingosino released on Discord</h3>
              <p>Play games using Dingocoin on Discord.</p>
            </li>
            <li className="event eventcompleted" data-date="Nov 2021">
              <h3>Dingocoin Weekly Airdrop released</h3>
              <p>Earn Dingocoins simply by promoting Dingocoin on Twitter.</p>
            </li>
            <li className="event eventcompleted" data-date="Nov 2021">
              <h3>Block reward halved to 62,500</h3>
              <p>300,000 Blocks Mined.</p>
            </li>
            <li className="event eventcompleted" data-date="Dec 2021">
              <h3>Listed on Hotbit</h3>
              <p>
                Listing fee of <b>$50,000</b> raised by the community.
                <br />
                <b>
                  - <i>We hit a record $380,000 24H trading volume!</i> 🎉
                </b>
                <br />
                <b>
                  -{" "}
                  <i>
                    We hit a record 1,500 Twitter followers, growing 5x
                    overnight!
                  </i>{" "}
                  🎉
                </b>
              </p>
            </li>
            <li className="event eventcompleted" data-date="Dec 2021">
              <h3>Wrapped Dingocoin released on SOL</h3>
              <p>Hold and trade Dingocoin on SOL.</p>
            </li>
            <li className="event eventincomplete" data-date="~ Jan 2022">
              <p>Block reward halved to 31,250</p>
              <p>400,000 Blocks Mined.</p>
            </li>
            <li className="event eventincomplete" data-date="~ Apr 2022">
              <p>Block reward halved to 15,625</p>
              <p>500,000 Blocks Mined.</p>
            </li>
            <li className="event eventincomplete" data-date="~ Jun 2022">
              <p>Block reward set permanentely to 10,000</p>
              <p>600,000 Blocks Mined.</p>
            </li>
          </ul>
        </Container>
      </section>

      <section className="section-a" id="burnboard">
        <h2>DINGOCOIN BURNBOARD</h2>
        <CustomDivider />
        <Container>
          <Row>
            <Col>
              <p>
                Voluntarily burn your Dingocoins for fun.
                <br />
                Rise to the top <i>because you can</i>.<br />
                <i>The ultimate answer to "but do you have burn mechanics?"</i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>How to participate?</h5>
                  </Accordion.Header>
                  <Accordion.Body className="social-faucet-instructions">
                    <Container>
                      <Row>
                        <Col>
                          <p>
                            <b>Burning without a message</b>
                          </p>
                          <p>
                            To burn your coins without leaving a message, simply
                            send your coins to our burn address,{" "}
                            <code>DMuchKingDingoSuchWi1dDogexxboXbKD</code>
                          </p>
                          <p>
                            <b>Burning with a message</b>
                          </p>
                          <p>
                            Leaving a message is trickier. You need to manually
                            sign and send a special transaction containing the
                            message, as follows:
                          </p>
                          <p>
                            1) Open up the "Debug window" in your Dingocoin
                            wallet and go to the "Console".
                          </p>
                          <p>
                            2) Prepare the transaction: Run{" "}
                            <code>
                              createrawtransaction []{" "}
                              {
                                '"{\\"DMuchKingDingoSuchWi1dDogexxboXbKD\\": XXXX, \\"data\\":\\"YYYY\\"}"'
                              }
                            </code>{" "}
                            making sure to:
                            <ul>
                              <li>
                                replace <code>XXXX</code> with the amount you
                                want to burn;
                              </li>
                              <li>
                                replace <code>YYYY</code> with a hex-encoding (
                                <a
                                  href="https://www.online-toolz.com/tools/text-hex-convertor.php"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <u>convert here</u>
                                </a>
                                ) of your ASCII text message. Your text message
                                should have at most 75 characters.
                              </li>
                            </ul>
                          </p>
                          <p>
                            3) Fund the transaction: Take the hex output of (2)
                            and run{" "}
                            <code>fundrawtransaction HEX-FROM-STEP-2</code>
                          </p>
                          <p>
                            4) Sign the transaction: Take the hex output of (3)
                            and run{" "}
                            <code>signrawtransaction HEX-FROM-STEP-3</code>
                          </p>
                          <p>
                            5) Send the transaction: Take the hex output of (4)
                            and run{" "}
                            <code>sendrawtransaction HEX-FROM-STEP-4</code>
                          </p>
                          <p>
                            These steps burn message and your coins{" "}
                            <i>permanently</i> onto Dingocoin's mainnet. Your
                            burn should appear on this board within the next 15
                            minutes.
                          </p>
                          <p>
                            <b>Can anyone steal the burned coins?</b>
                          </p>
                          <p>
                            The burn address was constructed arbitrarily without
                            a private key, with nothing up our sleeves. Read
                            what it says! The probability of anyone randomly
                            generating the private key to this address is very
                            near zero, so it is almost impossible for anyone to
                            ever be able to claim the burned coins.
                            <br />
                            In particular, we used{" "}
                            <a
                              href="https://github.com/joeuhren/generic-unspendable"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <u>this tool</u>
                            </a>{" "}
                            with arguments{" "}
                            <code>
                              ./unspendable.py D MuchKingDingoSuchWi1dDogexx
                            </code>
                            . You can go ahead to regenerate this burn address
                            in the same way for verification.
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Burnboard</h3>
              <Table
                className="social-faucet-table"
                striped
                bordered
                responsive
              >
                <thead>
                  <tr>
                    <th className="col-2">#</th>
                    <th className="col-5">Burn Amount</th>
                    <th className="col-5">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {burnBoardList.map((x) => (
                    <tr
                      key={x.rank}
                      className={
                        x.rank === 1
                          ? "gold"
                          : x.rank === 2
                          ? "silver"
                          : x.rank === 3
                          ? "bronze"
                          : ""
                      }
                    >
                      <td className="col-2">{x.rank}</td>
                      <td className="col-5">
                        {parseFloat(x.amount).toLocaleString()}
                      </td>
                      <td className="col-5">
                        {x.data === null
                          ? ""
                          : Buffer.from(x.data, "hex").toString("ascii")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-footer">
        <h6>
          Copyright © The Dingocoin Project 2021 | Multisig Community Donations:{" "}
          <code>A4KTTmS4dECRZAn6ycsavechg8ccyjxkJP</code>{" "}
        </h6>
      </section>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={exchangesModalShow}
        onHide={() => {
          setExchangesModalShow(false);
        }}
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
            <Row>
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.hotbit.io/exchange?symbol=DINGO_USDT"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={HotbitLogo} />
                  </Button>
                </a>
              </Col>
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://main.southxchange.com/Market/Book/DINGO/LTC"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={SouthXchangeLogo} />
                  </Button>
                </a>
              </Col>
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://cratex.io/index.php?pair=DINGO/LTC"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={CratexIoLogo} />
                  </Button>
                </a>
              </Col>
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://dex-trade.com/spot/trading/DINGOUSDT"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={DexTradeLogo} />
                  </Button>
                </a>
              </Col>
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://dex.delion.online/market/DELION.DINGO_DOGE"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={DelionDexLogo} />
                  </Button>
                </a>
              </Col>
            </Row>
          </Container>
          <Container className="exchangesModalSection">
            <Row>
              <Col>
                <h5>Buy wDingocoin (BSC)</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pancakeswap.finance/swap?outputCurrency=0x9b208b117B2C4F76C1534B6f006b033220a681A4"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={PancakeSwap} />
                  </Button>
                </a>
              </Col>
            </Row>
          </Container>
          <Container className="exchangesModalSection">
            <Row>
              <Col>
                <h5>Live Charts</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://coinpaprika.com/coin/dingo-dingocoin/"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={CoinPaprikaLogo} />
                  </Button>
                </a>
              </Col>
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://coinmarketcap.com/currencies/dingocoin/"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={CoinMarketCapLogo} />
                  </Button>
                </a>
              </Col>
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.coingecko.com/en/coins/dingocoin"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={CoinGeckoLogo} />
                  </Button>
                </a>
              </Col>
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://coincodex.com/crypto/dingocoin/"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={CoinCodexLogo} />
                  </Button>
                </a>
              </Col>
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://dex.guru/token/0x9b208b117B2C4F76C1534B6f006b033220a681A4-bsc"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={DexGuruLogo} />
                  </Button>
                </a>
              </Col>
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://poocoin.app/tokens/0x9b208b117b2c4f76c1534b6f006b033220a681a4"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={PooCoinLogo} />
                  </Button>
                </a>
              </Col>
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
                <h5>Purchase NFTs</h5>
              </Col>
            </Row>
            <Row xs={1} md={1} lg={1}>
              <Col>
                <div className="marketplace-card">
                  <div className="logo-holder mb-2">
                    <Image src={DingocoinCollection1Logo} />
                  </div>
                  <a
                    target="_blank"
                    href="https://opensea.io/collection/dingocoin1"
                    rel="noreferrer"
                  >
                    <Button className="popup-button" variant="primary">
                      DingoCoin Collection #1
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <CustomDivider />
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

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={artModalShow}
        onHide={() => {
          setArtModalShow(false);
        }}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container className="art-container">
            <Row className="mb-2">
              <Col>
                {selectedArt && (
                  <h4>
                    (Author: <b>{selectedArt.author}</b>)
                  </h4>
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                {selectedArt !== null &&
                  selectedArt.image.default.endsWith(".mp4") && (
                    <video controls>
                      <source src={selectedArt.image.default} />
                    </video>
                  )}
                {selectedArt !== null &&
                  !selectedArt.image.default.endsWith(".mp4") && (
                    <Image src={selectedArt.image.default} />
                  )}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Main;
