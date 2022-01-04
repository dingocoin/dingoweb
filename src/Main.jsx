import React from "react";

// Controls.
import { Button, Container, Row, Col, Modal, Image } from "react-bootstrap";
import CustomDivider from "./CustomDivider.jsx";

// Assets.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faShoppingCart,
  faPencilRuler,
  faDumpsterFire,
  faFistRaised,
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
import RaydiumSwap from "./assets/img/raydiumswap.png";
import PooCoinLogo from "./assets/img/poocoin.png";
import RobloxLogo from "./assets/img/roblox.png";
import SOLLogo from "./assets/img/sol.png";
import SocialFaucetLogo from "./assets/img/socialfaucet.png";
import SouthXchangeLogo from "./assets/img/southxchange.png";
import MerchFormulaRunLogo from "./assets/img/merch_formularun.png";
import DingocoinCollection1Logo from "./assets/img/dingocoincollection1.png";
import BananaLogo from "./assets/img/happybanana.gif";
import HotbitLogo from "./assets/img/hotbitex.png";
import CoinGeckoLogo from "./assets/img/coingecko.png";
import WDingocoinLogo from "./assets/img/wdingocoin.png";
import BirdeyeLogo from "./assets/img/birdeye.png";
import MerchCryptoDingosLogo from "./assets/img/merch_cryptodingos.png";
import MerchDingocoinArtLogo from "./assets/img/merch_dingocoinart.png";

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

  const [exchangesModalShow, setExchangesModalShow] = React.useState(false);
  const [marketplaceModalShow, setMarketplaceModalShow] = React.useState(false);
  const [artModalShow, setArtModalShow] = React.useState(false);
  const [selectedArt, setSelectedArt] = React.useState(null);

  return (
    <div>
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
          </Container>
        </div>
      </header>

      <section className="section-b" id="ecosystem">
        <h2>ECOSYSTEM</h2>
        <CustomDivider />
        <Container className="ecosystem-section">
          <Row>
            <h4>Infrastructure and Markets</h4>
            <p style={{ textAlign: "justify" }}>
              Dingocoin exists <i>both</i> as a coin on its own secured
              blockchain, <i>and</i> as wrapped tokens (wDingocoin) on BSC and
              SOL. Our goal is to make Dingocoin highly accessible, allowing you
              to get Dingocoins from both centralized exchanges (CEX) and
              decentralized exchanges (DEX). They are exchangeable 1:1 at
              anytime, via our unique community-decentralized wrap custodians.
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
                        Buy &#9658;
                      </a>
                      <br />
                      <a
                        href="https://coinpaprika.com/coin/dingo-dingocoin/"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Chart &#9658;
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
                        Mine &#9658;
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
                        Buy &#9658;
                      </a>
                      <br />
                      <a
                        href="https://poocoin.app/tokens/0x9b208b117b2c4f76c1534b6f006b033220a681a4"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Chart &#9658;
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
                        Wrap &#9658;
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
                        className="simple-link"
                        onClick={() => {
                          setExchangesModalShow(true);
                        }}
                      >
                        Buy &#9658;
                      </a>
                      <br />
                      <a
                        href="https://birdeye.so/token/6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Chart &#9658;
                      </a>
                      <br />
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
                        Wrap &#9658;
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
            <h4>Community-driven Development</h4>
            <p style={{ textAlign: "justify" }}>
              Dingocoin prides itself as a completely community-driven project.
              Check out our list of community contributions below. The Dingocoin
              pack takes the growth of Dingocoin into its own hands, focusing on
              building progress <i>by actually doing work</i>. We do not sit
              around and wait for the impossible to happen, nor do we attempt to
              overmarket. The Dingocoin pack is wild and unstoppable. Have an
              idea? Join us today, throw it out and we'll help!
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
                      <Image src={SocialFaucetLogo} />
                    </div>
                    <a href="/airdrop">
                      <Button className="popup-button" variant="primary">
                        Weekly Airdrop
                      </Button>
                    </a>
                    <p>
                      Earn Dingocoins simply by promoting Dingocoin on Twitter.
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <Image src={DingosinoLogo} />
                    </div>
                    <a
                      href="https://discord.gg/9advvJ4z5f"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="popup-button" variant="primary">
                        Dingosino
                      </Button>
                    </a>
                    <p>Play games using Dingocoins on Discord.</p>
                  </div>
                </Col>
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <FontAwesomeIcon className="faicon" icon={faFistRaised} />
                    </div>
                    <a href="/stake">
                      <Button className="popup-button" variant="primary">
                        Stake Dingocoins
                      </Button>
                    </a>
                    <p>Simply #KeepYourDingoInYourPants and get rewarded.</p>
                  </div>
                </Col>
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <FontAwesomeIcon
                        className="faicon"
                        icon={faDumpsterFire}
                      />
                    </div>
                    <a href="/burnboard">
                      <Button className="popup-button" variant="primary">
                        Burnboard
                      </Button>
                    </a>
                    <p>
                      Voluntarily burn your Dingocoins for fun,{" "}
                      <i>because you can</i>.
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
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <FontAwesomeIcon
                        className="faicon"
                        icon={faShoppingCart}
                      />
                    </div>
                    <Button
                      className="popup-button"
                      variant="primary"
                      onClick={() => setMarketplaceModalShow(true)}
                    >
                      Marketplace
                    </Button>
                    <p>
                      Purchase Dingocoin merchandise/NFTs designed and sold by
                      community members.
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="project-card">
                    <div className="logo-holder">
                      <FontAwesomeIcon className="faicon" icon={faRobot} />
                    </div>
                    <a
                      href="https://discord.gg/y3J946HFQM"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="popup-button" variant="primary">
                        Discord Faucet/Tip Bot
                      </Button>
                    </a>
                    <p>
                      Get free sample Dingocoins.
                      <br /> Tip Dingocoins to others easily.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
          <CustomDivider />
          <Row
            className="community-art justify-content-center"
            style={{ textAlign: "center" }}
          >
            <h4>
              <Image src={BananaLogo} style={{ height: "1.7rem" }} />
              Community Art
              <Image src={BananaLogo} style={{ height: "1.7rem" }} />
            </h4>
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

      <section className="section-a" id="roadmap">
        <h2>ROADMAP - MILESTONES AND UPCOMING PLANS</h2>
        <CustomDivider />
        <Container>
          <Row>
            <ul className="timeline">
              <li className="event eventcompleted" data-date="Apr, 2021">
                <h3>
                  <i>The Beginning</i>
                </h3>
                <p>
                  - <b>Birth</b> of Dingocoin.
                  <br />- <b>Halved</b> block reward to 500,000.
                  <br />- <b>Listed</b> on Autradex.
                  <br />- <b>Listed</b> on DelionDEX.
                </p>
              </li>
              <li className="event eventcompleted" data-date="May - Jul, 2021">
                <h3>
                  <i>The Resistance</i>
                </h3>
                <p>
                  - <b>Listed</b> on Dex-Trade.
                  <br />- <b>Halved</b> reward to 250,000.
                  <br />- <b>Listed</b> on Cratex.
                </p>
              </li>
              <li className="event eventcompleted" data-date="Aug - Oct, 2021">
                <h3>
                  <i>The Upheaval</i>
                </h3>
                <p>
                  - <b>Released</b> Wrapped Dingocoin on BSC.
                  <br />- <b>Halved</b> block reward to 125,000.
                  <br />- <b>Listed</b> on SouthXchange.
                  <br />- <b>Added</b> to major merged mining pools.
                </p>
              </li>
              <li className="event eventcompleted" data-date="Nov - Dec, 2021">
                <h3>
                  <i>The Proclamation</i>
                </h3>
                <p>
                  - <b>Released</b> Dingosino on Discord.
                  <br />- <b>Released</b> Dingocoin Weekly Airdrop.
                  <br />- <b>Halved</b> block reward to 62,500.
                  <br />- <b>Listed</b> on Hotbit.
                  <br />- <b>Released</b> Wrapped Dingocoin on SOL.
                </p>
              </li>
              <li className="event eventcompleted" data-date="Jan - ?, 2022">
                <h3>Be part of our history - join our journey now!</h3>
                <p>
                  - <b>Released</b> Merchandise platform.
                  <br />- <b>Released</b> Staking program.
                </p>
                <p style={{ color: "#AAAAAA" }}>
                  <u>Projects in progress:</u>
                  <br />- <b>Release</b> Roblox Dingocoin City.
                  <br />- <b>Release</b> Multilinguistics.
                  <br />- <b>Release</b> Mobile wallets.
                  <br />- <b>Release</b> Browser extension wallets.
                  <br />- <b>Release</b> dApps on Dingocoin.
                  <br />- <b>Release</b> NFT platform on Dingocoin.
                  <br />- <b>List</b> on many more major exchanges.
                  <br />- <b>Halve</b> block reward to 31,250.
                  <br />- <b>Halve</b> block reward to 15,625.
                  <br />- <b>Halve</b> block reward to 10,000 permanentely.
                  <br /> (Have a project idea? Join us now!)
                </p>
              </li>
            </ul>
          </Row>
        </Container>
        <CustomDivider />
        <p className="mt-6">
          <i>Did you know?</i>
          <br />
          Autradex was the first exchange to list Dingocoin, and provided a
          sacred trading ground for Dingocoin.
          <br />
          Unfortunately, Autradex sustained multiple 51% attacks, back when
          Dingocoin was not as secure as it is now.
          <br />
          <i>Please consider donating toward the Autradex developers:</i>
          <br />
          <code>DDEG5hGGaMPQVTqqBoeGcXLXdDrYauRRxi</code>
        </p>
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
                <h5>Buy wDingocoin</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>BSC</h6>
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
              <Col>
                <h6>SOL</h6>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://raydium.io/swap/?from=11111111111111111111111111111111&to=6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={RaydiumSwap} />
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
              <Col>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://birdeye.so/token/6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3"
                >
                  <Button variant="outline-primary">
                    <img alt="" src={BirdeyeLogo} />
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
                <h5>Merchandise</h5>
              </Col>
            </Row>
            <Row xs={1} md={1} lg={1}>
              <Col>
                <div className="marketplace-card">
                  <div className="logo-holder mb-2">
                    <Image src={MerchFormulaRunLogo} />
                  </div>
                  <a
                    target="_blank"
                    href="https://dingocoinmerch.com/merch"
                    rel="noreferrer"
                  >
                    <Button className="popup-button" variant="primary">
                      FormulaRun's Store
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
            <CustomDivider />
            <Row>
              <Col>
                <h5>NFTs</h5>
              </Col>
            </Row>
            <Row xs={1} md={3} lg={3}>
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
              <Col>
                <div className="marketplace-card">
                  <div className="logo-holder mb-2">
                    <Image src={MerchCryptoDingosLogo} />
                  </div>
                  <a
                    target="_blank"
                    href="https://opensea.io/collection/cryptodingos"
                    rel="noreferrer"
                  >
                    <Button className="popup-button" variant="primary">
                      CryptoDingos
                    </Button>
                  </a>
                </div>
              </Col>
              <Col>
                <div className="marketplace-card">
                  <div className="logo-holder mb-2">
                    <Image src={MerchDingocoinArtLogo} />
                  </div>
                  <a
                    target="_blank"
                    href="https://opensea.io/collection/dingocoinart"
                    rel="noreferrer"
                  >
                    <Button className="popup-button" variant="primary">
                      Dingocoin Art
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
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
