import React from 'react';

// Assets.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt, faRobot, faFileContract, faPassport, faHeart, faRetweet, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faWindows, faLinux, faApple, faTwitter, faTelegram, faReddit, faFacebook, faDiscord, faGooglePlay } from  '@fortawesome/free-brands-svg-icons'
import BSCLogo from './assets/img/bsc.png'
import CoinCodexLogo from './assets/img/coincodex.png'
import CoinPaprikaLogo from './assets/img/coinpaprika.png'
import CratexIoLogo from './assets/img/cratexio.png'
import DelionDexLogo from './assets/img/deliondex.png'
import DexGuruLogo from './assets/img/dex-guru.png'
import DexTradeLogo from './assets/img/dextrade.png'
import DingocoinLogo from './assets/img/dingocoin.png'
import DingosinoLogo from './assets/img/dingosino.png'
import PancakeSwap from './assets/img/pancakeswap.png'
import Parrot1Logo from './assets/img/parrot.gif'
import Parrot2Logo from './assets/img/moonwalkingparrot.gif'
import PooCoinLogo from './assets/img/poocoin.png'
import RobloxLogo from './assets/img/roblox.png'
import SOLLogo from './assets/img/sol.png'
import SocialFaucetLogo from './assets/img/socialfaucet.png'
import SouthXchangeLogo from './assets/img/southxchange.png'
import MinerLogo from './assets/img/transparent_miner.png'
import DingocoinCollection1Logo from './assets/img/dingocoincollection1.png'
import BananaLogo from './assets/img/happybanana.gif'
import HotbitLogo from './assets/img/hotbit.gif'
import HotbitExLogo from './assets/img/hotbitex.png'
import CoinGeckoLogo from './assets/img/coingecko.png'

// Controls.
import { DropdownButton, Dropdown, InputGroup, FormControl, Table, Accordion,
  Button, Navbar, Nav, NavDropdown, Container, Row, Col, Modal, Image, ProgressBar } from 'react-bootstrap'
import CustomDivider from './CustomDivider.jsx'
import { TwitterTweetEmbed } from 'react-twitter-embed'

function shuffleArr(array){
  for (var i = array.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]]
  }
}

function Main() {

  const [communityImagesAuthors, setCommunityImagesAuthors] = React.useState([]);
  const [communityImagesKeys, setCommunityImagesKeys] = React.useState([]);
  const [loadAllCommunityImages, setLoadAllCommunityImages] = React.useState(false);
  const [communityImages, setCommunityImages] = React.useState([]);

  React.useEffect(async () => {
    const authors = require('./assets/img/community/authors');
    let keys = Object.keys(authors);
    shuffleArr(keys);
    setCommunityImagesAuthors(authors);
    setCommunityImagesKeys(keys);
  }, []);

  React.useEffect(async () => {
    if (communityImagesAuthors.length === 0 || communityImagesKeys.length === 0) {
      return;
    }

    const importKeys = loadAllCommunityImages ? communityImagesKeys : communityImagesKeys.slice(0, 10);
    const images = require.context('./assets/img/community', false, /\.(png|jpe?g|svg|gif|mp4)$/);
    const importedImages = []
    for (const k of importKeys) {
      const imgPath = images.keys().find((x) => x.includes(k));
      if (typeof imgPath !== 'undefined') {
        importedImages.push(images(imgPath));
      }
    }

    console.log(importedImages);

    setCommunityImages(importedImages.map((x) => { return {image: x, author: communityImagesAuthors[x.default.split('/').pop().split('.')[0]]}; }));
  }, [communityImagesAuthors, communityImagesKeys, loadAllCommunityImages]);

  async function get(link) {
    const controller = new AbortController();
    return (await fetch(link, {
      withCredentials: true,
      signal: controller.signal,
    })).json();
  }

  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(function() { setLoaded(true); }, 2500);
  }, []);

  const [dingoStats, setDingoStats] = React.useState(null);

  const [dingoPrice, setDingoPrice] = React.useState(null);
  const [dingoVolume, setDingoVolume] = React.useState(null);
  const [dingoCap, setDingoCap] = React.useState(null);
  React.useEffect(async () => {

    // Get Dingocoin blockchain stats.
    const dingoStats = await get('https://n4.dingocoin.org:8443/stats/dingo');
    // It's late and I'm too tired to do it properly. Please replace this eventually.
    const blockReward = dingoStats.height < 300000 ? 125000 : dingoStats.height < 400000 ? 62500 : dingoStats.height < 500000 ? 31250 : dingoStats.height < 600000 ? 15625 : 10000;
    const blocksToHalving = dingoStats.height < 300000 ? 300000 - dingoStats.height
      : dingoStats.height < 400000 ? 400000 - dingoStats.height
      : dingoStats.height < 500000 ? 500000 - dingoStats.height
      : dingoStats.height < 600000 ? 600000 - dingoStats.height
      : null;

    // Get market stats.
    const { volume, price, cap } = await get('https://n4.dingocoin.org:8443/stats/market');

    setDingoStats({
      supply: Math.round(dingoStats.total_amount),
      blocks: dingoStats.height,
      blockReward: blockReward,
      blocksToHalving: blocksToHalving });
    setDingoVolume(volume);
    setDingoPrice(price);
    setDingoCap(cap);

  }, []);

  const [socialFaucetRank, setSocialFaucetRank] = React.useState([]);
  const [socialFaucetHistoryRank, setSocialFaucetHistoryRank] = React.useState([]);
  const [socialFaucetView, setSocialFaucetView] = React.useState("weekly");
  const [theTomBradyScore, setTheTomBradyScore] = React.useState(null);
  React.useEffect(async () => {
    // Retireve.
    const {users, metrics, historyMetrics, tomBradyScore, address} = await get('https://n4.dingocoin.org:8443/socialFaucet');

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
        address: address[userId] });
    }
    rank.sort((a, b) => (0.5 * b.retweets + b.likes) - (0.5 * a.retweets + a.likes)); // Sort descending.
    // Add rank index.
    for (let i = 0; i < rank.length; i++) {
      rank[i].rank = i + 1;
    }
    setSocialFaucetRank(rank);

    // Collate history.
    const historyRank = [];
    for (const userId of Object.keys(historyMetrics)) {
      historyRank.push({
        name: users[userId].name,
        handle: users[userId].screen_name,
        score: historyMetrics[userId].score,
        likes: historyMetrics[userId].like_count,
        retweets: historyMetrics[userId].retweet_count,
        rank: null });
    }
    historyRank.sort((a, b) => b.score - a.score); // Sort descending.
    for (let i = 0; i < historyRank.length; i++) {
      historyRank[i].rank = i + 1;
    }
    setSocialFaucetHistoryRank(historyRank);

    // Set Tom Brady Score.
    setTheTomBradyScore(tomBradyScore);
  }, []);

  const [burnBoardList, setBurnBoardList] = React.useState([]);
  React.useEffect(async () => {
    const burnList = await get('https://n4.dingocoin.org:8443/burnBoard');
    burnList.sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
    for (let i = 0; i < burnList.length; i++) {
      burnList[i].rank = i + 1;
    }
    setBurnBoardList(burnList);
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
            <img alt="" src={DingocoinLogo}/>
            <span>DINGOCOIN</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href='#projects'>Projects</Nav.Link>
              <Nav.Link href='#wallets'>Wallets</Nav.Link>
              <Nav.Link href='#faucet'>Social Faucet</Nav.Link>
              <Nav.Link href='#burnboard'>Burnboard</Nav.Link>
              <Nav.Link href='#roadmap'>Roadmap</Nav.Link>
              <NavDropdown className="navbar-important" title="Live Charts">
                <NavDropdown.Header>Live Charts</NavDropdown.Header>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://coinpaprika.com/coin/dingo-dingocoin/"><img alt="" src={CoinPaprikaLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.coingecko.com/en/coins/dingocoin"><img alt="" src={CoinGeckoLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://coincodex.com/crypto/dingocoin/"><img alt="" src={CoinCodexLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://dex.guru/token/0x9b208b117B2C4F76C1534B6f006b033220a681A4-bsc"><img alt="" src={DexGuruLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://poocoin.app/tokens/0x9b208b117b2c4f76c1534b6f006b033220a681a4"><img alt="" src={PooCoinLogo} /></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="navbar-important" title="Exchanges">
                <NavDropdown.Header>Exchanges</NavDropdown.Header>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.hotbit.io/exchange?symbol=DINGO_USDT"><img alt="" src={HotbitExLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://main.southxchange.com/Market/Book/DINGO/LTC"><img alt="" src={SouthXchangeLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://cratex.io/index.php?pair=DINGO/LTC"><img alt="" src={CratexIoLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://dex-trade.com/spot/trading/DINGOUSDT"><img alt="" src={DexTradeLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://dex.delion.online/market/DELION.DINGO_DOGE"><img alt="" src={DelionDexLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://pancakeswap.finance/swap?outputCurrency=0x9b208b117B2C4F76C1534B6f006b033220a681A4"><img alt="" src={PancakeSwap} /></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="section-a" id="home">
        <div className="particles-container">
          <Container className="masthead">
            <Row>
              <Col><div className="isometric-holder"><div className={loaded ? "isometric" : "isometric preload"}></div></div></Col>
            </Row>
            <Row>
              <p className="masthead-title">Dingocoin is an open-source peer-to-peer digital currency.<br/> MUCH KING DINGO SUCH WILD DOGE</p>
            </Row>
            <Row xs={2} md={2} lg={4} className="quick-actions">
              <Col>
                <Button className="popup-button" variant="primary" onClick={() => { setExchangesModalShow(true); }}>Buy Dingocoin</Button>
              </Col>
              <Col>
                <a target="_blank" href="https://miningpoolstats.stream/dingocoin" rel="noreferrer"><Button className="popup-button" variant="primary">Mine Dingocoin</Button></a>
              </Col>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle className="popup-button">
                    Explorer
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item target="_blank" rel="noreferrer" href="https://explorer.dingocoin.org">Official (with API)</Dropdown.Item>
                    <Dropdown.Item target="_blank" rel="noreferrer" href="https://openchains.info/coin/dingocoin/blocks">Open Chains</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <a target="_blank" href="/DingocoinWhitePaper.pdf" rel="noreferrer"><Button className="popup-button" variant="primary">Whitepaper</Button></a>
              </Col>
            </Row>
            <Row xs={5} md={5} lg={5} className="socials">
              <Col className="socials-button-holder"><a target="_blank" rel="noreferrer" href="https://discord.gg/y3J946HFQM"><FontAwesomeIcon className="faicon" icon={faDiscord} /></a></Col>
              <Col className="socials-button-holder"><a target="_blank" rel="noreferrer" href="https://t.me/DingoCoinTalk"><FontAwesomeIcon className="faicon" icon={faTelegram} /></a></Col>
              <Col className="socials-button-holder"><a target="_blank" rel="noreferrer" href="https://twitter.com/dingocoincrypto"><FontAwesomeIcon className="faicon" icon={faTwitter} /></a></Col>
              <Col className="socials-button-holder"><a target="_blank" rel="noreferrer" href="https://www.reddit.com/r/dingocoin"><FontAwesomeIcon className="faicon" icon={faReddit} /></a></Col>
              <Col className="socials-button-holder"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/Dingocoin.org/"><FontAwesomeIcon className="faicon" icon={faFacebook} /></a></Col>
            </Row>
          </Container>
        </div>
      </header>

      <section>
        <Image src={HotbitLogo} style={{ width: '100%' }}/>
      </section>

      <section className="section-b" id="about">
        <h2>ABOUT DINGOCOIN</h2>
        <CustomDivider/>
        <Container>
          <Row xs={1} md={1} lg={2}>
            <Col>
              <h3>A fun, universal cryptocurrency...</h3>
              <p>Dingocoin is a decentralized, peer-to-peer digital currency that enables you to easily send money online. Think of it as "the great Dingo internet currency". Why dedicate specific coins to specific purposes, when you can use the same Dingocoin for everything?</p>
            </Col>
            <Col>
              <h3>... supporting community projects.</h3>
              <p>We believe in building community-driven projects around the same, universal Dingocoin; establishing uses and thus concrete value for Dingocoin, instead of overmarketing like the common crypto Ponzis/scams. Have something fun in mind? Throw it out and we'll help.</p>
            </Col>
          </Row>
          <Row xs={1} md={1} lg={3} className="projectFactsWrap">
            <Col>
              <div className="item">
                <p className="number">{dingoPrice === null ? "-" : ("$" + dingoPrice.toFixed(7))}</p>
                <span></span>
                <p>Dingocoin price</p>
              </div>
            </Col>
            <Col>
              <div className="item">
                <p className="number">{dingoCap === null ? "-" : ("$" + Math.floor(dingoCap).toLocaleString())}</p>
                <span></span>
                <p>Dingocoin marketcap</p>
              </div>
            </Col>
            <Col>
              <div className="item">
                <p className="number">{dingoVolume === null ? "-" : ("$" + Math.floor(dingoVolume).toLocaleString())}</p>
                <span></span>
                <p>24h volume</p>
              </div>
            </Col>
          </Row>
          <Row xs={1} md={1} lg={4} className="projectFactsWrap">
            <Col>
              <div className="item">
                <p className="number">{dingoStats === null ? "-" : dingoStats.supply.toLocaleString()}</p>
                <span></span>
                <p>Dingocoin supply</p>
              </div>
            </Col>
            <Col>
              <div className="item">
                <p className="number">{dingoStats === null ? "-" : dingoStats.blocks.toLocaleString()}</p>
                <span></span>
                <p>Blocks mined</p>
              </div>
            </Col>
            <Col>
              <div className="item">
                <p className="number">
                  {dingoStats === null ? "-" : dingoStats.blockReward.toLocaleString()}
                </p>
                <span></span>
                <p>Current block reward</p>
              </div>
            </Col>
            <Col>
              <div className="item">
                <p className="number">
                  {dingoStats === null ? "-" : dingoStats.blocksToHalving.toLocaleString()}
                </p>
                <span></span>
                <p>Blocks to next halving</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-a" id="projects">
        <h2>COMMUNITY-DRIVEN PROJECTS</h2>
        <CustomDivider/>
        <p>Designed and maintained by our very own community members. <br/>Have something fun in mind? Throw it out and we'll help.</p>
        <Container>
          <Row xs={1} md={2} lg={3}>
            <Col>
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={MinerLogo}/>
                </div>
                <a target="_blank" rel="noreferrer" href="https://github.com/dingocoin/dingocoin"><Button className="popup-button" variant="primary">Scrypt AuxPoW Blockchain</Button></a>
                <p>Dingocoin is backed by its own open-source, community-maintained Scrypt AuxPoW blockchain.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={BSCLogo}/>
                </div>
                <a target="_blank" rel="noreferrer" href="https://wrap.dingocoin.org"><Button className="popup-button" variant="primary">BSC Wrap Custodian</Button></a>
                <p><i>Wrap</i> Dingocoins to wDingocoins on BSC securely.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={SOLLogo}/>
                </div>
                <a target="_blank" rel="noreferrer"><Button className="popup-button" variant="primary" disabled>SOL Wrap Custodian</Button></a>
                <p><i>Wrap</i> Dingocoins to wDingocoins on SOL securely (coming soon...).</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={DingosinoLogo}/>
                </div>
                <a target="_blank" rel="noreferrer" href="https://discord.gg/9advvJ4z5f"><Button className="popup-button" variant="primary">Dingosino</Button></a>
                <p>Play games using Dingocoins on Discord.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={SocialFaucetLogo}/>
                </div>
                <a href="#faucet"><Button className="popup-button" variant="primary">Dingocoin Social Faucet</Button></a>
                <p>Earn Dingocoins simply by promoting Dingocoin on Twitter. <i>The ultimate version of airdrops.</i></p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <div className="logo-holder">
                  <Image src={RobloxLogo}/>
                </div>
                <a target="_blank" rel="noreferrer"><Button className="popup-button" variant="primary" disabled>Dingocoin City</Button></a>
                <p>Hang out with the Dingo Pack on Roblox. Purchase in-game accessories with Dingocoins (coming soon...).</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <div className="logo-holder">
                  <FontAwesomeIcon className="faicon" icon={faShoppingCart} />
                </div>
                <a target="_blank" rel="noreferrer"><Button className="popup-button" variant="primary" onClick={() => { setMarketplaceModalShow(true); }}>Dingocoin Marketplace</Button></a>
                <p>Purchase Dingocoin merchandise/NFTs designed and sold by community members.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <div className="logo-holder">
                  <FontAwesomeIcon className="faicon" icon={faRobot} />
                </div>
                <a target="_blank" rel="noreferrer" href="https://discord.gg/y3J946HFQM"><Button className="popup-button" variant="primary">Discord Faucet/Tip Bot</Button></a>
                <p>Get free sample Dingocoins. Tip Dingocoins to others easily.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <div className="logo-holder">
                  <FontAwesomeIcon className="faicon" icon={faRobot} />
                </div>
                <a target="_blank" rel="noreferrer" href="https://discord.gg/y3J946HFQM"><Button className="popup-button" variant="primary">Discord Price Bot</Button></a>
                <p>Get live alerts for arbitrage opportunities across exchanges.</p>
              </div>
            </Col>
          </Row>
          <Row className="community-art">
            <CustomDivider/>
            <h3><Image src={BananaLogo}/>Community Art<Image src={BananaLogo}/></h3>
            <ul className="community-images mt-4">
              {communityImages.map((x, i) =>
              <li key={i}>
                {x.image.default.endsWith('.mp4') &&
                <video controls height="200" onClick={(e) => { e.preventDefault(); setSelectedArt(x); setArtModalShow(true);}}>
                  <source src={x.image.default}/>
                </video>
                }
                {!x.image.default.endsWith('.mp4') &&
                <Image src={x.image.default} onClick={() => { setSelectedArt(x); setArtModalShow(true);} }></Image>
                }
              </li>
              )}
              {!loadAllCommunityImages &&
              <li key="9999">
                <Button className="popup-button" variant="primary" onClick={() => { setLoadAllCommunityImages(true); }}>Load All</Button>
              </li>
              }
            </ul>
          </Row>
        </Container>
      </section>

      <section className="section-b" id="wallets">
        <h2>DINGOCOIN WALLETS</h2>
        <CustomDivider/>
        <Container>
          <Row xs={1} md={1} lg={2}>
            <Col>
              <h3>Hold Dingocoins directly...</h3>

              <div className="wallet-section">
                <p>Official Mainnet Wallets</p>
                <Container>
                  <Row>
                    <Col>
                      <div className="wallet-download">
                        <FontAwesomeIcon className="faicon" icon={faWindows} />
                        <a target="_blank" rel="noreferrer" href="https://github.com/dingocoin/dingocoin/releases/latest"><Button className="popup-button" variant="primary">Windows</Button></a>
                      </div>
                    </Col>
                    <Col>
                      <div className="wallet-download">
                        <FontAwesomeIcon className="faicon" icon={faApple} />
                        <a target="_blank" rel="noreferrer" href="https://github.com/dingocoin/dingocoin/releases/latest"><Button className="popup-button" variant="primary">macOS</Button></a>
                      </div>
                    </Col>
                    <Col>
                      <div className="wallet-download">
                        <FontAwesomeIcon className="faicon" icon={faLinux} />
                        <a target="_blank" rel="noreferrer" href="https://github.com/dingocoin/dingocoin/releases/latest"><Button className="popup-button" variant="primary">Linux</Button></a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>

              <div className="wallet-section">
                <p>Beehive Wallets (Unofficial)</p>
                <Container>
                  <Row>
                    <Col>
                      <div className="wallet-download">
                        <FontAwesomeIcon className="faicon" icon={faPassport} />
                        <a target="_blank" rel="noreferrer" href="https://beehivewallet.link/"><Button className="popup-button" variant="primary">Web Wallet</Button></a>
                      </div>
                    </Col>
                    <Col>
                      <div className="wallet-download">
                        <FontAwesomeIcon className="faicon" icon={faGooglePlay} />
                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.beehive.beehivemulti_coinwallet"><Button className="popup-button" variant="primary">Android</Button></a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col>
              <h3>... or hold wrapped wDingocoins.</h3>
              <div className="wallet-section">
                <p>wDingocoin on Binance Smart Chain (BSC)</p>
                <Container>
                  <Row>
                    <Col>
                      <div className="wallet-download">
                        <FontAwesomeIcon className="faicon" icon={faFileContract} />
                        <a target="_blank" rel="noreferrer" href="https://bscscan.com/token/0x9b208b117B2C4F76C1534B6f006b033220a681A4"><Button className="popup-button" variant="primary">Smart Contract</Button></a>
                      </div>
                    </Col>
                    <Col>
                      <div className="wallet-download">
                        <FontAwesomeIcon className="faicon" icon={faExchangeAlt} />
                        <a target="_blank" rel="noreferrer" href="https://wrap.dingocoin.org"><Button className="popup-button" variant="primary">Wrap Custodian</Button></a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>

              <div className="wallet-section">
                <p>wDingocoin on Solana (SOL)</p>
                <h5>Coming soon...</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-a" id="faucet">
        <h2>DINGOCOIN SOCIAL FAUCET</h2>
        <CustomDivider/>
        <Container>
          <Row>
            <p>Earn Dingocoins simply by promoting Dingocoin on Twitter.</p>
          </Row>
          <Row xs={1} md={1} lg={2} className="mb-4 mt-3">
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header><h5>How to participate?</h5></Accordion.Header>
                  <Accordion.Body className="social-faucet-instructions">
                    <p>Simply post on Twitter advertising Dingocoin. This can be a <b>tweet</b>, a <b>quote-tweet</b>, or a <b>reply</b> to another tweet.</p>
                    <p>In your post, include all of:</p>
                    <ol>
                      <li>a link to <code>dingocoin.org</code>,</li>
                      <li>hashtags <code>#dingocoin</code> and <code>#socialfaucet</code>, and</li>
                      <li>a hashtag with your Dingocoin address (e.g. <code>#DQBx7G4aozdqYFCv2dU4kacaEcPzwg8dkZ</code>). Your rewards will be sent here.</li>
                    </ol>
                    <p>Retweet/quote-tweet such a post of someone else for additional rewards (sent to your latest address, if any).</p>
                    <p>Below is an example tweet:</p>
                    <TwitterTweetEmbed
                      tweetId={'1457510685441732609'}
                      options={{height:700}}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header><h5>Rewards and payouts</h5></Accordion.Header>
                  <Accordion.Body className="social-faucet-instructions">
                    <p>Get rewarded based on your activity:</p>
                    <ul>
                      <li>1 like on your post (including liking your own) = 1,000 Dingocoin</li>
                      <li>1 retweet/quote-retweet on your post = 500 Dingocoin</li>
                      <li>Retweet/quote-retweet someone else's post = 500 Dingocoin</li>
                      <li>Retweeting/quote-retweeting your own post = no reward</li>
                    </ul>
                    <p>* Each user can earn up to 20,000 Dingocoins per week. Top 3 users for the week can earn up to 100,000 for that week!</p>
                    <p>* Please ensure that you have a tweet in the current week associating your Twitter account to a Dingocoin reward address.</p>
                    <p>* Your posts might be filtered away by Twitter if your account or activity is deemed too obscure or spammy. Please try increasing the number of followers, to wait for your account to mature, and/or to not spam too blatantly.</p>
                    <p>* The leaderboard is updated at the start of every hour. Rewards are paid out every Sunday 4AM, UTC. The leaderboard also resets at that time. Only retweets and likes of tweets in the current week are scored.</p>
                    <p>* Rates are not fixed. May have to adjust in case we fly to the moon.</p>
                    <p><b>Feeling generous? Fund our social faucet to keep it running :) <code>DJAuG2t4PtUQhFQsTddK1rhDHgE3cFU5oW</code></b></p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <DropdownButton title={socialFaucetView === "all-time" ? "All-time Ranking" : "This Week's Ranking"} className="mb-2">
                <Dropdown.Item onClick={() => { setSocialFaucetView("all-time") }}>All-time Ranking</Dropdown.Item>
                <Dropdown.Item onClick={() => { setSocialFaucetView("weekly") }}>This Week's Ranking</Dropdown.Item>
              </DropdownButton>
              <div className="social-faucet-board">
                  {socialFaucetView === "all-time" &&
                  <Table className="social-faucet-table" striped bordered responsive>
                    <thead>
                      <tr>
                        <th className="col-1">#</th>
                        <th className="col-7">User</th>
                        <th className="col-2">
                          <span className="table-dingo">
                            <img alt="" src={DingocoinLogo}/>
                          </span> earned
                        </th>
                        <th className="col-1"><FontAwesomeIcon className="faicon" icon={faRetweet} /></th>
                        <th className="col-1"><FontAwesomeIcon className="faicon" icon={faHeart} /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {socialFaucetHistoryRank.filter((x) => x.name.toLowerCase().includes(filterText.toLowerCase()) || x.handle.toLowerCase().includes(filterText.toLowerCase())).map((x) => (
                        <tr key={x.rank} className={x.rank === 1 ? "gold" : x.rank === 2 ? "silver" : x.rank === 3 ? "bronze" : ""}>
                          <td className="col-1">{x.rank}</td>
                          <td className="col-7"><a href={"https://twitter.com/" + x.handle} target="_blank">{x.name}</a></td>
                          <td className="col-2">{(x.score * 1000).toLocaleString()}</td>
                          <td className="col-1">{x.retweets}</td>
                          <td className="col-1">{x.likes}</td>
                        </tr>
                      ))}
                      {filterText === "" &&
                      <tr>
                        <td colSpan="2" className="col-7"><b>Total</b></td>
                        <td className="col-2"><b>{socialFaucetHistoryRank.map((x) => x.score * 1000).reduce((a, b) => a + b, 0).toLocaleString()}</b></td>
                        <td className="col-1"><b>{socialFaucetHistoryRank.map((x) => x.retweets).reduce((a, b) => a + b, 0).toLocaleString()}</b></td>
                        <td className="col-1"><b>{socialFaucetHistoryRank.map((x) => x.likes).reduce((a, b) => a + b, 0).toLocaleString()}</b></td>
                      </tr>
                      }
                    </tbody>
                  </Table>
                  }
                  {socialFaucetView === "weekly" &&
                  <Table className="social-faucet-table" striped bordered responsive>
                    <thead>
                      <tr>
                        <th className="col-1">#</th>
                        <th className="col-7">User</th>
                        <th className="col-1 table-dingo">
                          <span>
                            <img alt="" src={DingocoinLogo}/>
                          </span>&nbsp;earned
                        </th>
                        <th className="col-1">
                          Score
                        </th>
                        <th className="col-1"><FontAwesomeIcon className="faicon" icon={faRetweet} /></th>
                        <th className="col-1"><FontAwesomeIcon className="faicon" icon={faHeart} /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {socialFaucetRank.filter((x) => x.name.toLowerCase().includes(filterText.toLowerCase()) || x.handle.toLowerCase().includes(filterText.toLowerCase())).map((x) => (
                        <tr key={x.rank} className={x.rank === 1 ? "gold" : x.rank === 2 ? "silver" : x.rank === 3 ? "bronze" : ""}>
                          <td className="col-1">{x.rank}</td>
                          <td className="col-6"><a href={"https://twitter.com/" + x.handle} target="_blank">{x.name}</a></td>
                          {typeof x.address === 'undefined' &&
                          <td className="col-2"><strike>{(x.score * 1000).toLocaleString()}</strike>*</td>
                          }
                          {typeof x.address !== 'undefined' &&
                          <td className="col-2">{(x.score * 1000).toLocaleString()}</td>
                          }
                          <td className="col-1">{((0.5 * x.retweets + x.likes)).toFixed(1)}</td>
                          <td className="col-1">{x.retweets}</td>
                          <td className="col-1">{x.likes}</td>
                        </tr>
                      ))}
                      {filterText === "" &&
                      <tr>
                        <td colSpan="2" className="col-7"><b>Total</b></td>
                        <td className="col-2"><b>{socialFaucetRank.map((x) => x.score * 1000).reduce((a, b) => a + b, 0).toLocaleString()}</b></td>
                        <td className="col-1"></td>
                        <td className="col-1"><b>{socialFaucetRank.map((x) => x.retweets).reduce((a, b) => a + b, 0).toLocaleString()}</b></td>
                        <td className="col-1"><b>{socialFaucetRank.map((x) => x.likes).reduce((a, b) => a + b, 0).toLocaleString()}</b></td>
                      </tr>
                      }
                    </tbody>
                  </Table>
                  }
              </div>
              <InputGroup className="mt-0">
                <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon className="faicon" icon={faSearch} />
                </InputGroup.Text>
                <FormControl
                  placeholder="Search user/handle..."
                  value={filterQuery}
                  onChange={event => setFilterQuery(event.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <h5 className="mt-3">Event of the week</h5>
            <p>
              <Image src={Parrot2Logo} style={{'height': '1.2rem'}}/>
              Tag <a href="https://twitter.com/TomBrady" target="_blank" rel="noreferred">@TomBrady</a> in your Dingocoin post for a <b>2X</b> reward cap.
              <Image src={Parrot2Logo} style={{'height': '1.2rem'}}/>
              <br/>
              <Image src={Parrot1Logo} style={{'height': '1.2rem'}}/>
              Be the first to get <a href="https://twitter.com/TomBrady" target="_blank" rel="noreferred">@TomBrady</a> to <i>retweet, quote, or reply</i> to your Dingocoin post, and win <b>5m Dingocoins</b>.
              <Image src={Parrot1Logo} style={{'height': '1.2rem'}}/>
              <br/>
            </p>
            <p>
              {theTomBradyScore !== null && <span>Community's current <i>Tom Brady score</i> (total number of tags): <b>{theTomBradyScore}</b></span>}
            </p>
          </Row>
        </Container>
      </section>

      <section className="section-b" id="burnboard">
        <h2>DINGOCOIN BURNBOARD</h2>
        <CustomDivider/>
        <Container>
          <Row>
            <Col>
              <p>Voluntarily burn your Dingocoins for fun.<br/>Rise to the top <i>because you can</i>.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header><h5>How to participate?</h5></Accordion.Header>
                  <Accordion.Body className="social-faucet-instructions">
                    <Container>
                      <Row>
                        <Col>
                          <p><b>Burning without a message</b></p>
                          <p>To burn your coins without leaving a message, simply send your coins to our burn address, <code>DMuchKingDingoSuchWi1dDogexxboXbKD</code></p>
                          <p><b>Burning with a message</b></p>
                          <p>Leaving a message is trickier. You need to manually sign and send a special transaction containing the message, as follows:</p>
                          <p>1) Open up the "Debug window" in your Dingocoin wallet and go to the "Console".</p>
                          <p>2) Prepare the transaction: Run <code>createrawtransaction [] {"\"{\\\"DMuchKingDingoSuchWi1dDogexxboXbKD\\\": XXXX, \\\"data\\\":\\\"YYYY\\\"}\""}</code> making sure to:
                            <ul>
                              <li>replace <code>XXXX</code> with the amount you want to burn;</li>
                              <li>replace <code>YYYY</code> with a hex-encoding (<a href="https://www.online-toolz.com/tools/text-hex-convertor.php" target="_blank" rel="noreferred"><u>convert here</u></a>) of your ASCII text message. Your text message should have at most 18 characters.</li>
                            </ul>
                          </p>
                          <p>3) Fund the transaction: Take the hex output of (2) and run <code>fundrawtransaction HEX-FROM-STEP-2</code></p>
                          <p>4) Sign the transaction: Take the hex output of (3) and run <code>signrawtransaction HEX-FROM-STEP-3</code></p>
                          <p>5) Send the transaction: Take the hex output of (4) and run <code>sendrawtransaction HEX-FROM-STEP-4</code></p>
                          <p>These steps burn message and your coins <i>permanently</i> onto Dingocoin's mainnet. Your burn should appear on this board within the next 15 minutes.</p>
                          <p><b>Can anyone steal the burned coins?</b></p>
                          <p>The burn address was constructed arbitrarily without a private key, with nothing up our sleeves. Read what it says! The probability of anyone randomly generating the private key to this address is very near zero, so it is almost impossible for anyone to ever be able to claim the burned coins.<br/>In particular, we used <a href="https://github.com/joeuhren/generic-unspendable" target="_blank" rel="noreferred"><u>this tool</u></a> with arguments <code>./unspendable.py D MuchKingDingoSuchWi1dDogexx</code>. You can go ahead to regenerate this burn address in the same way for verification.</p>
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Burn rankings</h3>
              <Table className="social-faucet-table" striped bordered responsive>
                <thead>
                  <tr>
                    <th className="col-2">#</th>
                    <th className="col-5">Burn Amount</th>
                    <th className="col-5">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {burnBoardList.map((x) => (
                    <tr key={x.rank} className={x.rank === 1 ? "gold" : x.rank === 2 ? "silver" : x.rank === 3 ? "bronze" : ""}>
                      <td className="col-2">{x.rank}</td>
                      <td className="col-5">{parseFloat(x.amount).toLocaleString()}</td>
                      <td className="col-5">{x.data === null ? "" : Buffer.from(x.data, 'hex').toString('ascii')}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-a" id="roadmap">
        <h2>ROADMAP - MILESTONES AND UPCOMING PLANS</h2>
        <CustomDivider/>
        <p><i>Did you know?</i>
            <br/>Autradex was the first exchange to list Dingocoin, and provided a sacred trading ground for Dingocoin.
            <br/>Unfortunately, Autradex sustained multiple 51% attacks, back when Dingocoin was not as secure as it is now.
            <br/>Autradex eventually had to close down, shouldering the cost of the many attacks.
            <br/><i>Please consider donating toward the Autradex developers, who carried us when no one else could:</i>
            <br/><code>DDEG5hGGaMPQVTqqBoeGcXLXdDrYauRRxi</code></p>
        <Container>
          <ul className="timeline">
            <li className="event eventcompleted" data-date="Apr 1, 2021"><h3>Birth of Dingocoin</h3><p>Initial deployment. Block reward set to 0 - 1,000,000.</p></li>
            <li className="event eventcompleted" data-date="Apr 2021"><h3>Block reward halved to 500,000</h3><p>5,000 Blocks Mined.</p></li>
            <li className="event eventcompleted" data-date="Apr 2021"><h3>Listed on Autradex</h3></li>
            <li className="event eventcompleted" data-date="Apr 2021"><h3>Listed on DelionDEX</h3></li>
            <li className="event eventcompleted" data-date="May 2021"><h3>Listed on Dex-Trade</h3><p>Listing fee of <b>$2,500</b> raised by the community.</p></li>
            <li className="event eventcompleted" data-date="Jun 2021"><h3>Block reward halved to 250,000</h3><p>100,000 Blocks Mined.</p></li>
            <li className="event eventcompleted" data-date="Jul 2021"><h3>Listed on Cratex</h3></li>
            <li className="event eventcompleted" data-date="Aug 2021"><h3>Wrapped Dingocoin released on BSC</h3>
              <p>Hold and trade Dingocoin on BSC.<br/>
                <b>- <i>We hit a record $100,000 24H trading volume!</i> 🎉</b>
              </p>
            </li>
            <li className="event eventcompleted" data-date="Aug 2021"><h3>Block reward halved to 125,000</h3><p>200,000 Blocks Mined.</p></li>
            <li className="event eventcompleted" data-date="Aug 2021"><h3>Listed on SouthXchange</h3><p>Listing fee of <b>$5,000</b> raised by the community.</p></li>
            <li className="event eventcompleted" data-date="Sep 2021"><h3>Max Re-org Length Activated</h3><p>Protects against 51% attacks.<br/>Confirmations on exchanges can now be reduced significantly.</p></li>
            <li className="event eventcompleted" data-date="Oct 2021"><h3>Chain ID switch activated</h3>
              <p>Merged mining can now be done alongside Doge without conflict.<br/>
                Increases exposure to miners via AuxPoW.<br/>
                <b>- <i>We hit 1TH/s hashrate on the same day, 10x our past record!</i> 🎉</b></p>
            </li>
            <li className="event eventcompleted" data-date="Nov 2021"><h3>Dingosino released on Discord</h3><p>Play games using Dingocoin on Discord.</p></li>
            <li className="event eventcompleted" data-date="Nov 2021"><h3>Dingocoin Social Faucet released</h3><p>Earn Dingocoins simply by promoting Dingocoin on Twitter.</p></li>
            <li className="event eventcompleted" data-date="Nov 2021"><h3>Block reward halved to 62,500</h3><p>300,000 Blocks Mined.</p></li>
            <li className="event eventcompleted" data-date="Dec 2021"><h3>Listed on Hotbit</h3>
              <p>Listing fee of <b>$50,000</b> raised by the community.
                <br/>
                <b>- <i>We hit a record $380,000 24H trading volume!</i> 🎉</b><br/>
                <b>- <i>We hit a record 1,500 Twitter followers, growing 5x overnight!</i> 🎉</b>
              </p>
            </li>
            <li className="event eventincomplete" data-date="~ Dec 2021"><p>Wrapped Dingocoin released on SOL</p><p>Hold and trade Dingocoin on SOL.</p></li>
            <li className="event eventincomplete" data-date="~ Jan 2022"><p>Block reward halved to 31,250</p><p>400,000 Blocks Mined.</p></li>
            <li className="event eventincomplete" data-date="~ Apr 2022"><p>Block reward halved to 15,625</p><p>500,000 Blocks Mined.</p></li>
            <li className="event eventincomplete" data-date="~ Jun 2022"><p>Block reward set permanentely to 10,000</p><p>600,000 Blocks Mined.</p></li>
          </ul>
        </Container>
      </section>

      <section className="section-footer">
        <h6>Copyright © The Dingocoin Project 2021 | Multisig Community Donations: <code>A4KTTmS4dECRZAn6ycsavechg8ccyjxkJP</code> </h6>
      </section>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={exchangesModalShow}
        onHide={() => { setExchangesModalShow(false); }}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Buy Dingocoin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="exchangesModalSection">
            <Row>
              <Col><h5>Live Charts</h5></Col>
            </Row>
            <Row>
              <Col><a target="_blank" rel="noreferrer" href="https://coinpaprika.com/coin/dingo-dingocoin/"><Button variant="outline-primary"><img alt="" src={CoinPaprikaLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://www.coingecko.com/en/coins/dingocoin"><Button variant="outline-primary"><img alt="" src={CoinGeckoLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://coincodex.com/crypto/dingocoin/"><Button variant="outline-primary"><img alt="" src={CoinCodexLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://dex.guru/token/0x9b208b117B2C4F76C1534B6f006b033220a681A4-bsc"><Button variant="outline-primary"><img alt="" src={DexGuruLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://poocoin.app/tokens/0x9b208b117b2c4f76c1534b6f006b033220a681a4"><Button variant="outline-primary"><img alt="" src={PooCoinLogo} /></Button></a></Col>
            </Row>
          </Container>
          <Container className="exchangesModalSection">
            <Row>
              <Col><h5>Exchanges</h5></Col>
            </Row>
            <Row>
              <Col><a target="_blank" rel="noreferrer" href="https://www.hotbit.io/exchange?symbol=DINGO_USDT"><Button variant="outline-primary"><img alt="" src={HotbitExLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://main.southxchange.com/Market/Book/DINGO/LTC"><Button variant="outline-primary"><img alt="" src={SouthXchangeLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://cratex.io/index.php?pair=DINGO/LTC"><Button variant="outline-primary"><img alt="" src={CratexIoLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://dex-trade.com/spot/trading/DINGOUSDT"><Button variant="outline-primary"><img alt="" src={DexTradeLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://dex.delion.online/market/DELION.DINGO_DOGE"><Button variant="outline-primary"><img alt="" src={DelionDexLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://pancakeswap.finance/swap?outputCurrency=0x9b208b117B2C4F76C1534B6f006b033220a681A4"><Button variant="outline-primary"><img alt="" src={PancakeSwap} /></Button></a></Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { setExchangesModalShow(false); }}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={marketplaceModalShow}
        onHide={() => { setMarketplaceModalShow(false); }}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Dingocoin Marketplace
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="marketplace-container">
            <Row>
              <Col><h5>Purchase NFTs</h5></Col>
            </Row>
            <Row xs={1} md={1} lg={1}>
              <Col>
                <div className="marketplace-card">
                  <div className="logo-holder mb-2">
                    <Image src={DingocoinCollection1Logo}/>
                  </div>
                  <a target="_blank" href="https://opensea.io/collection/dingocoin1" rel="noreferrer"><Button className="popup-button" variant="primary">DingoCoin Collection #1</Button></a>
                </div>
              </Col>
            </Row>
            <Row>
              <CustomDivider/>
              <p>To list your own Dingocoin merchandise/NFT collection, hit us up on our Discord channel.</p>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { setMarketplaceModalShow(false); }}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={artModalShow}
        onHide={() => { setArtModalShow(false); }}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container className="art-container">
            <Row className="mb-2">
              <Col>
                {selectedArt &&
                <h4>
                  (Author: <b>{selectedArt.author}</b>)
                </h4>
                }
              </Col>
            </Row>
            <Row>
              <Col>
                {selectedArt !== null && selectedArt.image.default.endsWith('.mp4') &&
                  <video controls>
                    <source src={selectedArt.image.default}/>
                  </video>
                }
                {selectedArt !== null && !selectedArt.image.default.endsWith('.mp4') &&
                  <Image src={selectedArt.image.default}/>
                }
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default Main;
