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
  /*
  async function get(link) {
    const controller = new AbortController();
    return (
      await fetch(link, {
        withCredentials: true,
        signal: controller.signal,
      })
    ).json();
  }

  const [dingoStats, setDingoStats] = React.useState(null);
  const [dingoPrice, setDingoPrice] = React.useState(null);
  const [dingoVolume, setDingoVolume] = React.useState(null);
  const [dingoCap, setDingoCap] = React.useState(null);
  const [totalStaked, setTotalStaked] = React.useState(null);

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

      // Get stake stats.
      const { totalStaked } = await get(
        "https://stats.dingocoin.org:8443/stake/stats"
      );
      setTotalStaked(totalStaked);
    })();
  }, []);
  */

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
        <Container className="py-3 py-lg-5 mt-4">
          <h2 className="mb-3">Building Adoption</h2>
          <span className="subtitle mx-auto">
            Dingocoin believes utility and fun for all. With a community focused
            on building practical and meaningful applications, we strive to make
            Dingocoin the digital currency that is adopted everywhere.
          </span>

          <div className="d-flex">
            <a href="/projects" className="mx-auto">
              <Button
                className="rounded-pill px-5 py-2 mt-4"
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
                    <b>Modern wallets</b>,
                  </span>
                  <span className="ms-1">
                    exposing Dingocoin to the Web, Browser, and Mobile.
                  </span>
                </div>
                <div className="d-flex flex-row mt-auto">
                  <FontAwesomeIcon className="icon" icon={faGlobe} />
                  <FontAwesomeIcon className="icon" icon={faWindowRestore} />
                  <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                  <FontAwesomeIcon className="icon" icon={faLaptop} />
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
                    <b>Utilities, activities, and fun</b>,
                  </span>
                  <span className="ms-1">
                    <br />
                    showcasing practical projects for Dingocoin.
                  </span>
                </div>
                <div className="d-flex flex-row mt-auto">
                  <FontAwesomeIcon className="icon" icon={faShapes} />
                  <FontAwesomeIcon className="icon" icon={faBullhorn} />
                  <FontAwesomeIcon className="icon" icon={faGamepad} />
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
                    <b>Community driven</b>,
                  </span>
                  <span className="ms-1">
                    bringing out the most resilient and unexpected ideas.
                  </span>
                </div>
                <div className="d-flex flex-row mt-auto">
                  <FontAwesomeIcon className="icon" icon={faPeopleCarry} />
                  <FontAwesomeIcon className="icon" icon={faBaby} />
                  <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
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
                    <b>Modern wallets</b>,
                  </span>
                  <span className="ms-1">
                    exposing Dingocoin to the Web, Browser, and Mobile.
                  </span>
                </div>
                <div className="d-flex flex-row mt-auto">
                  <FontAwesomeIcon className="icon" icon={faGlobe} />
                  <FontAwesomeIcon className="icon" icon={faWindowRestore} />
                  <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                  <FontAwesomeIcon className="icon" icon={faLaptop} />
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
                    <b>Utilities, activities, and fun</b>,
                  </span>
                  <span className="ms-1">
                    showcasing practical projects for Dingocoin.
                  </span>
                </div>
                <div className="d-flex flex-row mt-auto">
                  <FontAwesomeIcon className="icon" icon={faShapes} />
                  <FontAwesomeIcon className="icon" icon={faBullhorn} />
                  <FontAwesomeIcon className="icon" icon={faGamepad} />
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
                    <b>Community driven</b>,
                  </span>
                  <span className="ms-1">
                    bringing out the most resilient and unexpected ideas.
                  </span>
                </div>
                <div className="d-flex flex-row mt-auto">
                  <FontAwesomeIcon className="icon" icon={faPeopleCarry} />
                  <FontAwesomeIcon className="icon" icon={faBaby} />
                  <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="ecosystem">
        <Container className="py-3 py-lg-5 mt-3 mb-5">
          <h2>Join the wild Dingocoin ecosystem</h2>
          <div className="d-flex flex-row flex-wrap justify-content-center mt-4">
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

      {/*
      <section className="listings">
        <Container className="py-3 py-lg-5">
          <div className="d-flex flex-row flex-wrap pt-5 description mb-2">
            <div className="d-flex flex-column lead mb-4 px-0 px-lg-1 mx-auto">
              <FadeInSection>
                <h2 className="text-primary text-center">Such availability</h2>
                <p className="text-muted text-center mt-2 mb-4">
                  Dingocoin aims to make itself highly available to everyone in
                  the world. With 12 listings in just one year of age, our
                  expansion is matched by no other meme currency. Our listing
                  rampage is planned to continue, with the final goal clear and
                  near - top 5, then top 3, then Binance.
                </p>
                <div className="d-flex flex-row mt-2 justify-content-center justify-content-md-center justify-content-lg-start justify-content-xl-start">
                  {!infrastructureShow && (
                    <Button
                      className="btn-primary px-4 py-2"
                      onClick={() => setInfrastructureShow(true)}
                    >
                      Technical Details
                    </Button>
                  )}
                </div>
              </FadeInSection>
            </div>
          </div>

          <FadeInSection>
            {!infrastructureShow && (
              <div className="d-flex flex-row flex-wrap justify-content-center projectFactsWrap">
                <div className="item">
                  <p className="number">
                    {dingoPrice === null ? "-" : "$" + dingoPrice.toFixed(7)}
                  </p>
                  <span></span>
                  <p className="text-muted">Dingocoin Price</p>
                </div>
                <div className="item">
                  <p className="number">
                    {dingoCap === null
                      ? "-"
                      : "$" + Math.floor(dingoCap).toLocaleString()}
                  </p>
                  <span></span>
                  <p className="text-muted">Marketcap</p>
                </div>
                <div className="item">
                  <p className="number">
                    {dingoVolume === null
                      ? "-"
                      : "$" + Math.floor(dingoVolume).toLocaleString()}
                  </p>
                  <span></span>
                  <p className="text-muted">24h volume</p>
                </div>
              </div>
            )}
            {infrastructureShow && (
              <div className="d-flex flex-row flex-wrap justify-content-center">
                <div className="project-card">
                  <div>
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
                        className="simple-link"
                        onClick={() => {
                          setWalletsModalShow(true);
                        }}
                      >
                        Wallets &#9658;
                      </a>
                      <br />
                      <a
                        href="https://github.com/dingocoin/dingocoin"
                        target="_blank"
                        rel="noreferrer"
                        className="simple-link"
                      >
                        Source &#9658;
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
                </div>
                <div className="project-card">
                  <div>
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
                        Contract &#9658;
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
                </div>
                <div className="project-card">
                  <div>
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
                        SPL &#9658;
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
                </div>
              </div>
            )}
            {infrastructureShow && (
              <div>
                <div className="d-flex flex-row flex-wrap justify-content-center projectFactsWrap">
                  <div className="item">
                    <p className="number">
                      {dingoPrice === null ? "-" : "$" + dingoPrice.toFixed(7)}
                    </p>
                    <span></span>
                    <p className="text-muted">Dingocoin price</p>
                  </div>
                  <div className="item">
                    <p className="number">
                      {dingoCap === null
                        ? "-"
                        : "$" + Math.floor(dingoCap).toLocaleString()}
                    </p>
                    <span></span>
                    <p className="text-muted">Marketcap</p>
                  </div>
                  <div className="item">
                    <p className="number">
                      {dingoVolume === null
                        ? "-"
                        : "$" + Math.floor(dingoVolume).toLocaleString()}
                    </p>
                    <span></span>
                    <p className="text-muted">24h volume</p>
                  </div>
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-center projectFactsWrap">
                  <div className="item">
                    <p className="number">
                      {dingoStats === null
                        ? "-"
                        : (
                            Math.floor(dingoStats.supply / 10000000) / 100
                          ).toLocaleString() + " B"}
                    </p>
                    <span></span>
                    <p className="text-muted">Dingocoin supply</p>
                  </div>
                  <div className="item">
                    <p className="number">
                      {dingoStats === null
                        ? "-"
                        : dingoStats.blocks.toLocaleString()}
                    </p>
                    <span></span>
                    <p className="text-muted">Blocks mined</p>
                  </div>
                  <div className="item">
                    <p className="number">
                      {dingoStats === null
                        ? "-"
                        : dingoStats.blockReward.toLocaleString()}
                    </p>
                    <span></span>
                    <p className="text-muted">Current block reward</p>
                  </div>
                  <div className="item">
                    <p className="number">
                      {dingoStats === null
                        ? "-"
                        : dingoStats.blocksToHalving.toLocaleString()}
                    </p>
                    <span></span>
                    <p className="text-muted">Blocks to next halving</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-2 d-flex flex-row flex-wrap justify-content-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.bitmart.com/trade/en?symbol=DINGO_USDT"
              >
                <Button variant="outline">
                  <img className="demo " alt="" src={BitmartLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.lbank.info/exchange/dingo/usdt"
              >
                <Button variant="outline">
                  <img className="demo " alt="" src={LBankLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.xt.com/trade/dingo_usdt"
              >
                <Button variant="outline">
                  <img className="demo " alt="" src={XTCOMLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.hotbit.io/exchange?symbol=DINGO_USDT"
              >
                <Button variant="outline">
                  <img className="demo " alt="" src={HotbitLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://main.southxchange.com/Market/Book/DINGO/LTC"
              >
                <Button variant="outline">
                  <img className="demo " alt="" src={SouthXchangeLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wallet.autradex.systems/"
              >
                <Button variant="outline">
                  <img className="demo " alt="" src={AutradexLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.exbitron.com/trading/dingousdt"
              >
                <Button variant="outline">
                  <img className="demo " alt="" src={ExbitronLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://cratex.io/index.php?pair=DINGO/LTC"
              >
                <Button variant="outline">
                  <img className="demo " alt="" src={CratexIoLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dex-trade.com/spot/trading/DINGOUSDT"
              >
                <Button variant="outline">
                  <img className="demo " alt="" src={DexTradeLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dex.delion.online/market/DELION.DINGO_DOGE"
              >
                <Button variant="outline">
                  <img className="demo " alt="" src={DelionDexLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://pancakeswap.finance/swap?outputCurrency=0x9b208b117B2C4F76C1534B6f006b033220a681A4"
              >
                <Button variant="outline">
                  <img className="demo " alt="" src={PancakeSwap} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3&outputAmount=0&fixed=in"
              >
                <Button variant="outline">
                  <img className="demo " alt="" src={RaydiumSwap} />
                </Button>
              </a>
            </div>
          </FadeInSection>
        </Container>
      </section>
      */}

      {/*
      <section className="dyor">
        <Container className="py-3 py-lg-5">
          <div className="d-flex flex-row flex-wrap pt-5 description mb-2">
            <div className="d-flex flex-column title">
              <FadeInSection>
                <h2 className="text-primary text-center">
                  Severely undervalued - Do Your Own Research
                </h2>
              </FadeInSection>
            </div>
            <div className="d-flex flex-column lead">
              <FadeInSection>
                <p>
                  We have <b>&gt; 10x</b> the developments of similar meme
                  currencies, yet merely <b>&lt; 0.02%</b> the market cap. As it
                  stands, Dingocoin is one of the most severely undervalued
                  projects, with potential price increases of <b>5000x</b> based
                  on market cap alone. Nonetheless, the community will stop at
                  nothing to develop the coin.
                </p>
              </FadeInSection>
            </div>
          </div>
          <FadeInSection>
            <div className="d-flex flex-column">
              <Image
                className="mx-auto"
                style={{ maxWidth: "100%" }}
                src={WhyBuyImage}
              />
            </div>
          </FadeInSection>
        </Container>
      </section>
      */}

      {/*
      <section className="section-a mb-5" id="roadmap">
        <FadeInSection>
          <h1 className="mt-5 text-center text-primary">
            <b>Roadmap</b>
          </h1>
          <CustomDivider />
        </FadeInSection>
        <Container>
          <Row>
            <ul className="timeline mb-4">
              <FadeInSection>
                <li className="event eventcompleted" data-date="Apr, 2021">
                  <h3>
                    <i>The Beginning</i>
                  </h3>
                  <p>
                    - <b>Birth</b> of Dingocoin
                    <br />- <b>Halved</b> block reward to 500,000
                    <br />- <b>Listed</b> on Autradex
                    <br />- <b>Listed</b> on DelionDEX
                  </p>
                </li>
              </FadeInSection>
              <FadeInSection>
                <li
                  className="event eventcompleted"
                  data-date="May - Jul, 2021"
                >
                  <h3>
                    <i>The Resistance</i>
                  </h3>
                  <p>
                    - <b>Listed</b> on Dex-Trade
                    <br />- <b>Halved</b> reward to 250,000
                    <br />- <b>Listed</b> on Cratex
                  </p>
                </li>
              </FadeInSection>
              <FadeInSection>
                <li
                  className="event eventcompleted"
                  data-date="Aug - Oct, 2021"
                >
                  <h3>
                    <i>The Upheaval</i>
                  </h3>
                  <p>
                    - <b>Released</b> Wrapped Dingocoin on BSC
                    <br />- <b>Halved</b> block reward to 125,000
                    <br />- <b>Listed</b> on SouthXchange
                    <br />- <b>Added</b> to major merged mining pools
                  </p>
                </li>
              </FadeInSection>
              <FadeInSection>
                <li
                  className="event eventcompleted"
                  data-date="Nov - Dec, 2021"
                >
                  <h3>
                    <i>The Proclamation</i>
                  </h3>
                  <p>
                    - <b>Released</b> Dingosino on Discord
                    <br />- <b>Released</b> Dingocoin Weekly Airdrop
                    <br />- <b>Halved</b> block reward to 62,500
                    <br />- <b>Listed</b> on Hotbit
                    <br />- <b>Released</b> Wrapped Dingocoin on SOL
                  </p>
                </li>
              </FadeInSection>
              <FadeInSection>
                <li
                  className="event eventcompleted"
                  data-date="Jan - Mar, 2022"
                >
                  <h3>
                    <i>The Boomshakalaka</i>
                  </h3>
                  <p>
                    - <b>Released</b> Merchandise platform
                    <br />- <b>Released</b> Staking program
                    <br />- <b>Released</b> Browser wallets
                    <br />- <b>Released</b> Roblox Dingocoin City
                    <br />- <b>Released</b> Dingo Diggers
                    <br />- <b>Halved</b> block reward to 31,250
                    <br />- <b>Listed</b> on Exbitron
                    <br />- <b>Released</b> Dingocoin NFT platform
                    <br />- <b>Released</b> Dividends for staking
                    <br />- <b>Listed</b> on XT.com
                  </p>
                </li>
              </FadeInSection>
              <FadeInSection>
                <li
                  className="event eventcompleted"
                  data-date="Apr - Present, 2022"
                >
                  <h3>
                    <i>The Expansion</i>
                  </h3>
                  <p>
                    - <b>Happy Birthday, Dingocoin!</b>
                    <br /> - <b>Halve</b> block reward to 15,625
                    <br />- <b>Listed</b> on LBank
                    <br />- <b>Listed</b> on BitMart
                  </p>
                </li>
              </FadeInSection>
            </ul>
          </Row>

        </Container>
      </section>
      */}

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
