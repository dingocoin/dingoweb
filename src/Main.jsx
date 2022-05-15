import React from "react";

//API.
import { queryNft } from "./nftApi";

// Controls.
import {
  Button,
  Spinner,
  Container,
  Row,
  Col,
  Modal,
  Image,
  ProgressBar,
} from "react-bootstrap";
import CustomDivider from "./CustomDivider";
import FadeInSection from "./FadeInSection";
import SideScroller from "./SideScroller";

// Assets.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faShoppingCart,
  faGlobe,
  faUserAstronaut,
  faGamepad,
  faChartLine,
  faWallet,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import AutradexLogo from "./assets/img/autradex.png";
import BSCLogo from "./assets/img/bsc.png";
import BirdeyeLogo from "./assets/img/birdeye.png";
import BitmartLogo from "./assets/img/bitmartlogo.png";
import CoinCodexLogo from "./assets/img/coincodex.png";
import CoinGeckoLogo from "./assets/img/coingecko.png";
import CoinMarketCapLogo from "./assets/img/coinmarketcap.png";
import CoinPaprikaLogo from "./assets/img/coinpaprika.png";
import CratexIoLogo from "./assets/img/cratexio.png";
import CryptoGrenadeLogo from "./assets/img/cryptogrenade.png";
import DelionDexLogo from "./assets/img/deliondex.png";
import DexGuruLogo from "./assets/img/dex-guru.png";
import DexTradeLogo from "./assets/img/dextrade.png";
import DingetteLogo from "./assets/img/dingette.png";
import DingocoinAnimatedLogo from "./assets/img/dingocoin-rotate.gif";
import DingocoinCollection1Logo from "./assets/img/dingocoincollection1.png";
import DingocoinLogo from "./assets/img/dingocoin.png";
import DingodiggersLogo from "./assets/img/dingodigger.png";
import DingominerLogo from "./assets/img/dingominer.png";
import DingosinoLogo from "./assets/img/dingosino.png";
import DoucheyDingoesLogo from "./assets/img/doucheydingos.gif";
import ExbitronLogo from "./assets/img/exbitron.png";
import HotbitLogo from "./assets/img/hotbitex.png";
import LBankLogo from "./assets/img/lbanklogo.png";
import MerchCryptoDingosLogo from "./assets/img/merch_cryptodingos.png";
import MerchDingocoinArtLogo from "./assets/img/merch_dingocoinart.png";
import MerchFormulaRunLogo from "./assets/img/merch_formularun.png";
import NFTCard from "./NftCard.jsx";
import PancakeSwap from "./assets/img/pancakeswap.png";
import ParrotImage from "./assets/img/parrot.gif";
import PooCoinLogo from "./assets/img/poocoin.png";
import RaydiumSwap from "./assets/img/raydiumswap.png";
import RobloxLogo from "./assets/img/roblox.png";
import SOLLogo from "./assets/img/sol.png";
import SocialFaucetLogo from "./assets/img/socialfaucet.png";
import SouthXchangeLogo from "./assets/img/southxchange.png";
import TrailmapImage from "./assets/img/trailmap.svg";
import WDingocoinLogo from "./assets/img/wdingocoin.png";
import WalletApple from "./assets/img/wallet_apple.png";
import WalletChrome from "./assets/img/wallet_chrome.png";
import WalletFirefox from "./assets/img/wallet_firefox.png";
import WalletLinux from "./assets/img/wallet_linux.png";
import WalletWindows from "./assets/img/wallet_windows.png";
import WhyBuyImage from "./assets/img/whybuy.svg";
import XTCOMLogo from "./assets/img/xtcom.png";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import NftLogo from "./assets/img/dingocoinnftplatform.png";

function AccessibilityPreview() {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center">
      <Image className="demo mx-3" src={WalletChrome} />
      <Image className="demo mx-3" src={WalletFirefox} />
      <Image className="demo mx-3" src={WalletWindows} />
      <Image className="demo mx-3" src={WalletApple} />
      <Image className="demo mx-3" src={WalletLinux} />
    </div>
  );
}

function ListingsPreview() {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center">
      <Image className="demo mx-3 my-3" src={BitmartLogo} />
      <Image className="demo mx-3 my-3" src={LBankLogo} />
      <Image className="demo mx-3 my-3" src={XTCOMLogo} />
      <Image className="demo mx-3 my-3" src={HotbitLogo} />
      <Image className="demo mx-3 my-3" src={SouthXchangeLogo} />
      <Image className="demo mx-3 my-3" src={AutradexLogo} />
      <Image className="demo mx-3 my-3" src={CratexIoLogo} />
      <Image className="demo mx-3 my-3" src={ExbitronLogo} />
      <Image className="demo mx-3 my-3" src={DexTradeLogo} />
      <Image className="demo mx-3 my-3" src={DelionDexLogo} />
      <Image className="demo mx-3 my-3" src={PancakeSwap} />
      <Image className="demo mx-3 my-3" src={RaydiumSwap} />
    </div>
  );
}

function Main() {
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

  const [infrastructureShow, setInfrastructureShow] = React.useState(false);
  const [gamesShow, setGamesShow] = React.useState(false);
  const [utilitiesShow, setUtilitiesShow] = React.useState(false);

  const [walletsModalShow, setWalletsModalShow] = React.useState(false);
  const [exchangesModalShow, setExchangesModalShow] = React.useState(false);
  const [marketplaceModalShow, setMarketplaceModalShow] = React.useState(false);

  const [previewNfts, setPreviewNfts] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      setPreviewNfts(
        (
          await queryNft({
            key: "tradeVolume",
            direction: "DESC",
            limit: 20,
            offset: 0,
          })
        ).results.filter((x) => x !== "DNMy76bZG4eEJ8T37G5HVodGm2FQg6Qdt8")
      );
    })();
  }, []);

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
                  <Button
                    className="btn-light me-3 px-4 py-2"
                    onClick={() => setWalletsModalShow(true)}
                  >
                    Get wallet
                  </Button>
                  <Button
                    className="btn-light ms-3 px-4 py-2"
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
                  <Button
                    className="btn-light me-3 px-4 py-2"
                    onClick={() => setWalletsModalShow(true)}
                  >
                    Get Wallet
                  </Button>
                  <Button
                    className="btn-light ms-3 px-4 py-2"
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

      <section className="accessibility">
        <Container className="py-3 py-lg-5 mt-2 mt-lg-5">
          <div className="d-flex flex-row flex-wrap pt-5 description">
            <div className="d-flex flex-column title">
              <FadeInSection>
                <h2 className="text-primary text-center px-0 px-lg-1">
                  The Gold Standard for accessibility
                </h2>
                <div className="mt-2 d-none d-lg-block">
                  <AccessibilityPreview />
                </div>
              </FadeInSection>
            </div>
            <div className="d-flex flex-column lead px-0 px-lg-1">
              <FadeInSection>
                <p>
                  Dingocoin provides accessibility unparalleled by similar meme
                  coins. Combining community innovations with modern Web3
                  technologies, Dingocoin lets you do whatver you want, wherever
                  you want.
                </p>
                <p>
                  Our browser wallet lets you hold mainnet Dingocoin securely
                  right in your browser. Our wrapped tokens lets you hold
                  wrapped Dingocoins on BSC and SOL. With our upcoming mobile
                  DingoTip, you will be able to send coins directly across phone
                  numbers.
                </p>
                <div className="d-flex flex-row mt-2 justify-content-center justify-content-lg-start justify-content-xl-start">
                  <Button
                    className="btn-primary px-4 py-2"
                    onClick={() => setWalletsModalShow(true)}
                  >
                    Get wallet
                  </Button>
                </div>
              </FadeInSection>
            </div>
          </div>
        </Container>
      </section>

      <section className="listings">
        <Container className="py-3 py-lg-5">
          <div className="d-flex flex-row flex-wrap pt-5 description mb-2">
            <div className="d-flex flex-column title px-0 px-lg-1">
              <FadeInSection>
                <h2 className="text-primary text-center">
                  A highly ambitious growth strategy
                </h2>
                <div className="mt-2 d-flex flex-row flex-wrap justify-content-center">
                  <Image className="demo mx-3 my-3" src={BitmartLogo} />
                  <Image className="demo mx-3 my-3" src={LBankLogo} />
                  <Image className="demo mx-3 my-3" src={XTCOMLogo} />
                  <Image className="demo mx-3 my-3" src={HotbitLogo} />
                  <Image className="demo mx-3 my-3" src={SouthXchangeLogo} />
                  <Image className="demo mx-3 my-3" src={AutradexLogo} />
                  <Image className="demo mx-3 my-3" src={CratexIoLogo} />
                  <Image className="demo mx-3 my-3" src={ExbitronLogo} />
                  <Image className="demo mx-3 my-3" src={DexTradeLogo} />
                  <Image className="demo mx-3 my-3" src={DelionDexLogo} />
                  <Image className="demo mx-3 my-3" src={PancakeSwap} />
                  <Image className="demo mx-3 my-3" src={RaydiumSwap} />
                </div>
              </FadeInSection>
            </div>
            <div className="d-flex flex-column lead mb-4 px-0 px-lg-1">
              <FadeInSection>
                <p>
                  Dingocoin aims to make itself highly available to everyone in
                  the world. With 12 listings in just one year of age, our
                  expansion is matched by no other meme currencies. Our listing
                  rampage is planned to continue, with the final goal clear and
                  near - top 5, then top 3, then Binance.
                </p>
                <div className="d-flex flex-row mt-2 justify-content-center justify-content-md-center justify-content-lg-start justify-content-xl-start">
                  <Button
                    className="btn-primary me-3 px-4 py-2"
                    onClick={() => setExchangesModalShow(true)}
                  >
                    Trade Dingocoin
                  </Button>
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
          </FadeInSection>
        </Container>
      </section>

      <section className="community">
        <Container className="py-3 py-lg-5">
          <div className="d-flex flex-row flex-wrap pt-5 description mb-2">
            <div className="d-flex flex-column title">
              <FadeInSection>
                <h2 className="text-primary text-center">
                  Non-stop community developments
                </h2>
                <div className="mt-2 flex-row flex-wrap justify-content-center mb-4 d-none d-lg-flex">
                  <Image className="demo mx-3" src={NftLogo} />
                  <Image className="demo mx-3" src={DingodiggersLogo} />
                  <Image className="demo mx-3" src={DingosinoLogo} />
                  <Image className="demo mx-3" src={RobloxLogo} />
                  <Image className="demo mx-3" src={DingominerLogo} />
                </div>
              </FadeInSection>
            </div>
            <div className="d-flex flex-column lead">
              <FadeInSection>
                <p>
                  The Dingocoin community always finds new ideas for Dingocoin.
                  We build legitimate value and purpose into Dingocoin - from
                  our very own NFT platform, to Discord and Roblox games, to
                  staking, airdrops, and faucet. Explore the galore of games,
                  utilities, and activities produced by our very own members.
                  Even better, contribute your own ideas!
                </p>
              </FadeInSection>
            </div>
          </div>
          <FadeInSection>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={DingodiggersLogo} />
                </div>
                <a
                  href="https://discord.gg/fka9pZXxPB"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    Dingo Diggers
                  </Button>
                </a>
                <p className="text-muted">Easily Earn Dingo Mining Rewards.</p>
              </div>
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={DingosinoLogo} />
                </div>
                <a
                  href="https://discord.gg/9advvJ4z5f"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    Dingosino
                  </Button>
                </a>
                <p className="text-muted">Play games using Dingocoins on Discord.</p>
              </div>
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={RobloxLogo} />
                </div>
                <a
                  href="https://www.roblox.com/games/8019728893/Dingo-Coin-City"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    Dingocoin City
                  </Button>
                </a>
                <p className="text-muted">
                  Hang out with the Dingo Pack on Roblox <i>(Beta).</i>
                </p>
              </div>
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={DingominerLogo} />
                </div>
                <a
                  href="http://miner.dingocoin.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    Dingo Miner
                  </Button>
                </a>
                <p className="text-muted">Learn the ropes of mining with our Dingo Miner game.</p>
              </div>
              <div className="project-card">
                <div className="logo-holder">
                  <FontAwesomeIcon className="faicon" icon={faChartLine} />
                </div>
                <a href="/stake">
                  <Button className="px-4 py-2" variant="primary">
                    Stake Dingocoins
                  </Button>
                </a>
                <p className="text-muted">Earn weekly rewards just for holding Dingocoins.</p>
              </div>
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={SocialFaucetLogo} />
                </div>
                <a href="https://twitter.com/dingocoincrypto">
                  <Button className="px-4 py-2" variant="primary">
                    Weekly Airdrop
                  </Button>
                </a>
                <p className="text-muted">Earn Dingocoins in our weekly Twitter airdrops.</p>
              </div>
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={CryptoGrenadeLogo} />
                </div>
                <a href="https://cryptogrenade.xyz/" target="_blank">
                  <Button className="px-4 py-2" variant="primary">
                    CG's Faucet Platform
                  </Button>
                </a>
                <p className="text-muted">
                  Cryptogrenade's faucet platform - Paid to click, shortlinks,
                  referral rewards.
                </p>
              </div>
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={DingetteLogo} />
                </div>
                <a
                  href="https://www.reddit.com/user/Dingo-Is-My-Man/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    Dingette's Channel
                  </Button>
                </a>
                <p className="text-muted">
                  UwU? What's this? Our very own fan-lady growing the pack???
                  OwO
                </p>
              </div>
              <div className="project-card">
                <div className="logo-holder">
                  <FontAwesomeIcon className="faicon" icon={faShoppingCart} />
                </div>
                <Button
                  className="px-4 py-2"
                  variant="primary"
                  onClick={() => setMarketplaceModalShow(true)}
                >
                  Marketplace
                </Button>
                <p className="text-muted">
                  Purchase Dingocoin merchandise/NFTs designed and sold by
                  community members.
                </p>
              </div>
              <div className="project-card">
                <div className="logo-holder">
                  <FontAwesomeIcon className="faicon" icon={faRobot} />
                </div>
                <a
                  href="https://discord.gg/y3J946HFQM"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    Discord Faucet/Tips
                  </Button>
                </a>
                <p className="text-muted">
                  Get free sample Dingocoins.
                  <br /> Tip Dingocoins to others easily.
                </p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="mt-3 d-flex flex-column">
              {previewNfts !== null && (
                <div className="mt-1">
                  <SideScroller
                    defaultHeight="24.8rem"
                    items={previewNfts}
                    itemTemplate={(x) => (
                      <li key={x}>
                        <a
                          href={`https://nft.dingocoin.org/nft/${x}`}
                          target="_blank"
                        >
                          <NFTCard address={x} />
                        </a>
                      </li>
                    )}
                  />
                </div>
              )}
              {previewNfts === null && (
                <div
                  className="mt-1 d-flex flex-row"
                  style={{ height: "24.8rem" }}
                >
                  <Spinner animation="border" className="m-auto" />
                </div>
              )}
              <div className="d-flex flex-row">
                <a
                  className="mx-auto mt-3"
                  href="https://nft.dingocoin.org"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button className="px-4 py-2" variant="primary">
                    Dingocoin NFT Platform
                  </Button>
                </a>
              </div>
              <p className="text-center mt-3 text-muted">
                Experience the next generation of NFTs. Create and trade NFTs on
                our very own NFT platform. Pay less than {"<$0.001"} gas fees.
                Trading is done entirely on-chain - you receive earnings
                immediately.
              </p>
            </div>
          </FadeInSection>
        </Container>
      </section>

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
                  developments, with potential price increases of <b>5000x</b>{" "}
                  based on market cap alone. Nonetheless, the community will
                  stop at nothing to develop the coin.
                </p>
              </FadeInSection>
            </div>
          </div>
          <FadeInSection>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={WhyBuyImage}
            />
          </FadeInSection>
        </Container>
      </section>

      <section className="section-a" id="roadmap">
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

          <Row>
            <FadeInSection>
              <h1 className="text-center text-primary mt-5">
                <b>What's next?</b>
              </h1>
              <CustomDivider />
              <Image
                src={TrailmapImage}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="d-flex flex-row">
                <a
                  href="/trailmap"
                  className="simple-link mx-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="mt-4 mb-5 px-4 py-2">
                    See our Trailmap
                  </Button>
                </a>
              </div>
            </FadeInSection>
          </Row>
        </Container>
      </section>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={walletsModalShow}
        onHide={() => {
          setWalletsModalShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Dingocoin Wallets
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container
            className="wallets-container"
            style={{ maxWidth: "20rem" }}
          >
            <Row>
              <Col>
                <h5 className="mb-3">Browser Wallets</h5>
              </Col>
            </Row>
            <Row className="wallets-container justify-content-center">
              <div className="wallets-card mb-4">
                <div className="logo-holder mb-2">
                  <Image src={WalletChrome} />
                </div>
                <a
                  target="_blank"
                  href="https://chrome.google.com/webstore/detail/dingocoin-wallet/kfapifmeobcllcbdjmgnkbfbcokmdkmf"
                  rel="noreferrer"
                >
                  <Button className="popup-button px-4 py-2" variant="primary">
                    Chrome
                  </Button>
                </a>
              </div>
              <div className="wallets-card mb-4">
                <div className="logo-holder mb-2">
                  <Image src={WalletFirefox} />
                </div>
                <a
                  target="_blank"
                  href="https://addons.mozilla.org/en-US/firefox/addon/dingocoin-wallet/"
                  rel="noreferrer"
                >
                  <Button className="popup-button px-4 py-2" variant="primary">
                    Firefox
                  </Button>
                </a>
              </div>
            </Row>
          </Container>
          <Container
            className="wallets-container"
            style={{ maxWidth: "30rem" }}
          >
            <Row>
              <Col>
                <h5 className="mb-3">Full Node Desktop Wallets</h5>
              </Col>
            </Row>
            <Row className="wallets-container justify-content-center">
              <div className="wallets-card mb-4">
                <div className="logo-holder mb-2">
                  <Image src={WalletWindows} />
                </div>
                <a
                  target="_blank"
                  href="https://github.com/dingocoin/dingocoin/releases/latest"
                  rel="noreferrer"
                >
                  <Button className="popup-button px-4 py-2" variant="primary">
                    Windows
                  </Button>
                </a>
              </div>
              <div className="wallets-card mb-4">
                <div className="logo-holder mb-2">
                  <Image src={WalletApple} />
                </div>
                <a
                  target="_blank"
                  href="https://github.com/dingocoin/dingocoin/releases/latest"
                  rel="noreferrer"
                >
                  <Button className="popup-button px-4 py-2" variant="primary">
                    macOS
                  </Button>
                </a>
              </div>
              <div className="wallets-card mb-4">
                <div className="logo-holder mb-2">
                  <Image src={WalletLinux} />
                </div>
                <a
                  target="_blank"
                  href="https://github.com/dingocoin/dingocoin/releases/latest"
                  rel="noreferrer"
                >
                  <Button className="popup-button px-4 py-2" variant="primary">
                    Linux
                  </Button>
                </a>
              </div>
            </Row>
          </Container>
          <Container className="wallets-container">
            <Row>
              <Col>
                <h5 className="mb-3">Unofficial Wallets</h5>
              </Col>
            </Row>
            <Row className="wallets-container justify-content-center">
              <div className="wallets-card mb-4">
                <div className="logo-holder mb-2">
                  <FontAwesomeIcon className="faicon" icon={faGlobe} />
                </div>
                <a
                  target="_blank"
                  href="https://beehivewallet.link/"
                  rel="noreferrer"
                >
                  <Button className="popup-button px-4 py-2" variant="primary">
                    Beehive
                  </Button>
                </a>
              </div>
              <div className="wallets-card mb-4">
                <div className="logo-holder mb-2">
                  <FontAwesomeIcon className="faicon" icon={faAndroid} />
                </div>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.beehive.beehivemulti_coinwallet"
                  rel="noreferrer"
                >
                  <Button className="popup-button px-4 py-2" variant="primary">
                    Android
                  </Button>
                </a>
              </div>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setWalletsModalShow(false);
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
            </Row>
          </Container>
          <CustomDivider />
          <Container className="exchangesModalSection">
            <Row>
              <Col>
                <h5>Buy wDingocoin</h5>
              </Col>
            </Row>
            <Row>
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
          <CustomDivider />
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
