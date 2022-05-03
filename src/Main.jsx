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
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import BSCLogo from "./assets/img/bsc.png";
import BirdeyeLogo from "./assets/img/birdeye.png";
import CoinCodexLogo from "./assets/img/coincodex.png";
import CoinGeckoLogo from "./assets/img/coingecko.png";
import CoinMarketCapLogo from "./assets/img/coinmarketcap.png";
import CoinPaprikaLogo from "./assets/img/coinpaprika.png";
import CratexIoLogo from "./assets/img/cratexio.png";
import DelionDexLogo from "./assets/img/deliondex.png";
import DexGuruLogo from "./assets/img/dex-guru.png";
import DexTradeLogo from "./assets/img/dextrade.png";
import DingetteLogo from "./assets/img/dingette.png";
import DingocoinCollection1Logo from "./assets/img/dingocoincollection1.png";
import DingocoinLogo from "./assets/img/dingocoin.png";
import DingodiggersLogo from "./assets/img/dingodigger.png";
import DingominerLogo from "./assets/img/dingominer.png";
import DingosinoLogo from "./assets/img/dingosino.png";
import ExbitronLogo from "./assets/img/exbitron.png";
import HotbitLogo from "./assets/img/hotbitex.png";
import MerchCryptoDingosLogo from "./assets/img/merch_cryptodingos.png";
import MerchDingocoinArtLogo from "./assets/img/merch_dingocoinart.png";
import MerchFormulaRunLogo from "./assets/img/merch_formularun.png";
import PancakeSwap from "./assets/img/pancakeswap.png";
import PooCoinLogo from "./assets/img/poocoin.png";
import RaydiumSwap from "./assets/img/raydiumswap.png";
import RobloxLogo from "./assets/img/roblox.png";
import SOLLogo from "./assets/img/sol.png";
import SocialFaucetLogo from "./assets/img/socialfaucet.png";
import SouthXchangeLogo from "./assets/img/southxchange.png";
import WDingocoinLogo from "./assets/img/wdingocoin.png";
import XTCOMLogo from "./assets/img/xtcom.png";
import WalletChrome from "./assets/img/wallet_chrome.png";
import WalletFirefox from "./assets/img/wallet_firefox.png";
import WalletWindows from "./assets/img/wallet_windows.png";
import WalletApple from "./assets/img/wallet_apple.png";
import WalletLinux from "./assets/img/wallet_linux.png";
import NFTCard from "./NftCard.jsx";
import DoucheyDingoesLogo from "./assets/img/doucheydingos.gif";
import CryptoGrenadeLogo from "./assets/img/cryptogrenade.png";
import TrailmapImage from "./assets/img/trailmap.svg";
import WhyBuyImage from "./assets/img/whybuy.svg";
import ParrotImage from "./assets/img/parrot.gif";

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
      <header className="section-a" id="home">
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
            <p className="masthead-title mt-4 mb-2">
              Join the wild pack that gets the work <i>done</i>.
            </p>
            <p> MUCH KING DINGO SUCH WILD DOGE</p>
          </Row>
          <Row className="quick-actions flex-wrap justify-content-md-center">
            <Button
              className="popup-button px-4 py-2"
              variant="primary"
              onClick={() => {
                setWalletsModalShow(true);
              }}
            >
              Get wallet
            </Button>
            <Button
              className="popup-button px-4 py-2"
              variant="primary"
              onClick={() => {
                setExchangesModalShow(true);
              }}
            >
              Buy Dingocoin
            </Button>
            <Button
              className="popup-button px-4 py-2"
              variant="primary"
              onClick={() => {
                window.location = "/trailmap";
              }}
            >
              Trailmap
            </Button>
          </Row>
          <Row>
            <div className="mt-4">
              <Image src={ParrotImage} />
              <p style={{ color: "blue", marginTop: "1rem" }}>
                <b>
                  Listing on{" "}
                  <a
                    href="https://support.bmx.fund/hc/en-us/articles/5617984226587"
                    target="_blank"
                    class="simple-link"
                  >
                    <u>BitMart</u>
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://twitter.com/LBank_Exchange/status/1519978555844796416?cxt=HHwWgIC59a-chpgqAAAA"
                    target="_blank"
                    className="simple-link"
                  >
                    <u>LBank</u>
                  </a>{" "}
                  confirmed!
                  <br />
                  Deposits open May 3, 8PM (UTC+8)
                </b>
              </p>
            </div>
          </Row>
        </Container>
      </header>

      <section className="section-b" id="ecosystem">
        <h1>GET STARTED</h1>
        <p className="text-muted">Explore Dingocoin today.</p>
        <CustomDivider />
        <Container className="ecosystem-section" style={{ maxWidth: "50rem" }}>
          <Row xs={1} md={1} lg={1} className="justify-content-center">
            <FadeInSection>
              <div className="mb-5">
                <div className="banner-holder mb-4">
                  <FontAwesomeIcon className="faicon" icon={faWallet} />
                </div>
                <h4 className="mb-4">1. Get wallet</h4>
                <p className="text-center mb-4">
                  You need a <i>wallet</i> to hold Dingocoins. Take less than a
                  minute to install our browser wallets, and you're set. Or if
                  you prefer, get a classic desktop wallet.
                </p>
                <Button
                  className="popup-button px-4"
                  variant="primary"
                  onClick={() => {
                    setWalletsModalShow(true);
                  }}
                >
                  View wallets
                </Button>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="guide mb-5">
                <span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="mb-5">
                <div className="banner-holder mb-4">
                  <FontAwesomeIcon className="faicon" icon={faChartLine} />
                </div>
                <h4 className="mb-4">2. Trade Dingocoin</h4>
                <p className="text-center mb-4">
                  Buy and sell Dingocoin. Explore Dingocoin prices. Wrap your
                  coins and trade on BSC and SOL. With Dingocoin, you can do
                  whatever you want, wherever you want.
                </p>
                {!infrastructureShow && (
                  <Container className="mb-4">
                    <Row
                      xs={1}
                      md={3}
                      lg={3}
                      className="projectFactsWrap justify-content-center"
                    >
                      <Col>
                        <div className="item">
                          <p className="number">
                            {dingoPrice === null
                              ? "-"
                              : "$" + dingoPrice.toFixed(7)}
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
                  </Container>
                )}
                {!infrastructureShow && (
                  <Button
                    className="popup-button px-4"
                    variant="primary"
                    onClick={() => setInfrastructureShow(true)}
                  >
                    See more
                  </Button>
                )}
                {infrastructureShow && (
                  <Container>
                    <Row
                      xs={2}
                      md={3}
                      lg={3}
                      className="projects mb-4 justify-content-center"
                    >
                      <Col>
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
                      </Col>
                      <Col>
                        <div className="project-card">
                          <div>
                            <div className="logo-holder">
                              <Image src={WDingocoinLogo} />{" "}
                              <Image src={BSCLogo} />
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
                      </Col>
                      <Col>
                        <div className="project-card">
                          <div>
                            <div className="logo-holder">
                              <Image src={WDingocoinLogo} />{" "}
                              <Image src={SOLLogo} />
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
                      </Col>
                    </Row>
                    <Row
                      xs={1}
                      md={3}
                      lg={3}
                      className="projectFactsWrap justify-content-center"
                    >
                      <Col>
                        <div className="item">
                          <p className="number">
                            {dingoPrice === null
                              ? "-"
                              : "$" + dingoPrice.toFixed(7)}
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
                      xs={2}
                      md={2}
                      lg={4}
                      className="projectFactsWrap justify-content-center"
                    >
                      <Col>
                        <div className="item">
                          <p className="number">
                            {dingoStats === null
                              ? "-"
                              : (
                                  Math.floor(dingoStats.supply / 10000000) / 100
                                ).toLocaleString() + " B"}
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
                )}
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="guide">
                <span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-5 mb-5">
                {previewNfts !== null && (
                  <div className="mb-4">
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
                    className="mb-4 d-flex flex-row"
                    style={{ height: "24.8rem" }}
                  >
                    <Spinner animation="border" className="m-auto" />
                  </div>
                )}
                <h4 className="mb-4">3. Explore NFT Platform</h4>
                <p className="text-center mb-4">
                  Experience the next generation of NFTs. Create and trade NFTs
                  on our very own NFT platform. Pay less than {"<$0.001"} gas
                  fees. Trading is done entirely on-chain - you receive earnings
                  immediately.
                </p>
                <a
                  href="https://nft.dingocoin.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="popup-button px-4" variant="primary">
                    Visit NFT platform
                  </Button>
                </a>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="guide">
                <span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-5 mb-5">
                <div className="banner-holder mb-4">
                  <FontAwesomeIcon className="faicon" icon={faGamepad} />
                </div>
                <h4 className="mb-4">4. Games and Activities</h4>
                <p className="text-center mb-4">
                  Participate in community-developed games and activities. Hang
                  out, have fun, and possibly earn Dingocoins.
                </p>
                {!gamesShow && (
                  <Button
                    className="popup-button px-4"
                    variant="primary"
                    onClick={() => setGamesShow(true)}
                  >
                    See more
                  </Button>
                )}
              </div>
            </FadeInSection>
            {gamesShow && (
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
                        <Image src={DingodiggersLogo} />
                      </div>
                      <a
                        href="https://discord.gg/fka9pZXxPB"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button className="popup-button" variant="primary">
                          Dingo Diggers
                        </Button>
                      </a>
                      <p>Easily Earn Dingo Mining Rewards.</p>
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
                        <Image src={RobloxLogo} />
                      </div>
                      <a
                        href="https://www.roblox.com/games/8019728893/Dingo-Coin-City"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button className="popup-button" variant="primary">
                          Dingocoin City
                        </Button>
                      </a>
                      <p>
                        Hang out with the Dingo Pack on Roblox <i>(Beta).</i>
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="project-card">
                      <div className="logo-holder">
                        <Image src={DingominerLogo} />
                      </div>
                      <a
                        href="http://miner.dingocoin.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button className="popup-button" variant="primary">
                          Dingo Miner
                        </Button>
                      </a>
                      <p>
                        Learn the ropes of mining with our Dingo Miner game.
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="project-card">
                      <div className="logo-holder">
                        <FontAwesomeIcon
                          className="faicon"
                          icon={faChartLine}
                        />
                      </div>
                      <a href="/stake">
                        <Button className="popup-button" variant="primary">
                          Stake Dingocoins
                        </Button>
                      </a>
                      <p>Earn weekly rewards just for holding Dingocoins.</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="project-card">
                      <div className="logo-holder">
                        <Image src={SocialFaucetLogo} />
                      </div>
                      <a href="https://twitter.com/dingocoincrypto">
                        <Button className="popup-button" variant="primary">
                          Weekly Airdrop
                        </Button>
                      </a>
                      <p>Earn Dingocoins in our weekly Twitter airdrops.</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="project-card">
                      <div className="logo-holder">
                        <Image src={CryptoGrenadeLogo} />
                      </div>
                      <a href="https://cryptogrenade.xyz/" target="_blank">
                        <Button className="popup-button" variant="primary">
                          CG's Faucet Platform
                        </Button>
                      </a>
                      <p>
                        Cryptogrenade's faucet platform - Paid to click,
                        shortlinks, referral rewards.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            <FadeInSection>
              <div className="guide">
                <span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-5 mb-5">
                <div className="banner-holder mb-4">
                  <FontAwesomeIcon className="faicon" icon={faUserAstronaut} />
                </div>
                <h4 className="mb-4">5. Explore community utilities</h4>
                <p className="text-center mb-4">
                  Socials, and other tools. Explore the various utilities
                  developed by the community. Or better yet, contribute yourself
                  - we rely on everyone's ideas.
                </p>
                {!utilitiesShow && (
                  <Button
                    className="popup-button px-4"
                    variant="primary"
                    onClick={() => setUtilitiesShow(true)}
                  >
                    See more
                  </Button>
                )}
              </div>
            </FadeInSection>
            {utilitiesShow && (
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
                        <Image src={DingetteLogo} />
                      </div>
                      <a
                        href="https://www.reddit.com/user/Dingo-Is-My-Man/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button className="popup-button" variant="primary">
                          Dingette's Channel
                        </Button>
                      </a>
                      <p>
                        UwU? What's this? Our very own fan-lady growing the
                        pack??? OwO
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
                          Discord Faucet/Tips
                        </Button>
                      </a>
                      <p>
                        Get free sample Dingocoins.
                        <br /> Tip Dingocoins to others easily.
                      </p>
                    </div>
                  </Col>
                  {/*
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
                  */}
                </Row>
              </Container>
            )}
          </Row>
          <Row>
            <FadeInSection>
              <h1 className="mt-5">DO YOUR OWN RESEARCH</h1>
              <p className="text-muted">
                <b>&gt; 10x</b> the developments, yet <b>&lt; 0.02%</b> of the
                market cap.
                <br />
                <i>
                  Such undervalued very potential <b>5000x</b> much wow.
                </i>
              </p>
              <CustomDivider />
              <Image
                style={{ width: "100%", height: "auto" }}
                className="mt-2"
                src={WhyBuyImage}
              />
            </FadeInSection>
          </Row>
        </Container>
      </section>

      <section className="section-a" id="roadmap">
        <FadeInSection>
          <h1>ROADMAP</h1>
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
                  </p>
                </li>
              </FadeInSection>
            </ul>
          </Row>

          <Row>
            <FadeInSection>
              <h2 className="mt-4">What's next?</h2>
              <CustomDivider />
              <Image
                src={TrailmapImage}
                style={{ width: "100%", height: "auto" }}
              />
              <p className="mt-2">
                <a
                  href="/trailmap"
                  className="simple-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Click to see more in our Trailmap</b>
                </a>
              </p>
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
            <Row className="wallets-container justify-content-md-center">
              <div className="wallets-card mb-4">
                <div className="logo-holder mb-2">
                  <Image src={WalletChrome} />
                </div>
                <a
                  target="_blank"
                  href="https://chrome.google.com/webstore/detail/dingocoin-wallet/kfapifmeobcllcbdjmgnkbfbcokmdkmf"
                  rel="noreferrer"
                >
                  <Button className="popup-button px-4" variant="primary">
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
                  <Button className="popup-button px-4" variant="primary">
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
            <Row className="wallets-container justify-content-md-center">
              <div className="wallets-card mb-4">
                <div className="logo-holder mb-2">
                  <Image src={WalletWindows} />
                </div>
                <a
                  target="_blank"
                  href="https://github.com/dingocoin/dingocoin/releases/latest"
                  rel="noreferrer"
                >
                  <Button className="popup-button px-4" variant="primary">
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
                  <Button className="popup-button px-4" variant="primary">
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
                  <Button className="popup-button px-4" variant="primary">
                    Linux
                  </Button>
                </a>
              </div>
            </Row>
          </Container>
          <Container
            className="wallets-container"
            style={{ maxWidth: "20rem" }}
          >
            <Row>
              <Col>
                <h5 className="mb-3">Unofficial Wallets</h5>
              </Col>
            </Row>
            <Row className="wallets-container justify-content-md-center">
              <div className="wallets-card mb-4">
                <div className="logo-holder mb-2">
                  <FontAwesomeIcon className="faicon" icon={faGlobe} />
                </div>
                <a
                  target="_blank"
                  href="https://beehivewallet.link/"
                  rel="noreferrer"
                >
                  <Button className="popup-button px-4" variant="primary">
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
                  <Button className="popup-button px-4" variant="primary">
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
            <Row className="justify-content-md-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.xt.com/trade/dingo_usdt"
              >
                <Button variant="outline-primary">
                  <img alt="" src={XTCOMLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.hotbit.io/exchange?symbol=DINGO_USDT"
              >
                <Button variant="outline-primary">
                  <img alt="" src={HotbitLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://main.southxchange.com/Market/Book/DINGO/LTC"
              >
                <Button variant="outline-primary">
                  <img alt="" src={SouthXchangeLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.exbitron.com/trading/dingousdt"
              >
                <Button variant="outline-primary">
                  <img alt="" src={ExbitronLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://cratex.io/index.php?pair=DINGO/LTC"
              >
                <Button variant="outline-primary">
                  <img alt="" src={CratexIoLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dex-trade.com/spot/trading/DINGOUSDT"
              >
                <Button variant="outline-primary">
                  <img alt="" src={DexTradeLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dex.delion.online/market/DELION.DINGO_DOGE"
              >
                <Button variant="outline-primary">
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
                <Button variant="outline-primary">
                  <img alt="" src={PancakeSwap} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3&outputAmount=0&fixed=in"
              >
                <Button variant="outline-primary">
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
                <Button variant="outline-primary">
                  <img alt="" src={CoinPaprikaLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://coinmarketcap.com/currencies/dingocoin/"
              >
                <Button variant="outline-primary">
                  <img alt="" src={CoinMarketCapLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coingecko.com/en/coins/dingocoin"
              >
                <Button variant="outline-primary">
                  <img alt="" src={CoinGeckoLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://coincodex.com/crypto/dingocoin/"
              >
                <Button variant="outline-primary">
                  <img alt="" src={CoinCodexLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dex.guru/token/0x9b208b117B2C4F76C1534B6f006b033220a681A4-bsc"
              >
                <Button variant="outline-primary">
                  <img alt="" src={DexGuruLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://poocoin.app/tokens/0x9b208b117b2c4f76c1534b6f006b033220a681a4"
              >
                <Button variant="outline-primary">
                  <img alt="" src={PooCoinLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://birdeye.so/token/6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3"
              >
                <Button variant="outline-primary">
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
                  <Button className="popup-button" variant="primary">
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
                  <Button className="popup-button" variant="primary">
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
                  <Button className="popup-button" variant="primary">
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
                  <Button className="popup-button" variant="primary">
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
