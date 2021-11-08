import React from 'react';

// Assets.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt, faRobot, faCoins, faFileContract, faPassport, faComment, faHeart, faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faWindows, faLinux, faApple, faTwitter, faReddit, faFacebook, faDiscord, faGooglePlay } from  '@fortawesome/free-brands-svg-icons'
import DingocoinLogo from './assets/img/dingocoin.png'
import WhitepaperPdf from './assets/pdf/Dingocoin_Whitepaper.pdf'
import CoinPaprikaLogo from './assets/img/coinpaprika.png'
import CoinCodexLogo from './assets/img/coincodex.png'
import DexGuruLogo from './assets/img/dex-guru.png'
import PooCoinLogo from './assets/img/poocoin.png'
import AutradexLogo from './assets/img/autradex.png'
import DexTradeLogo from './assets/img/dextrade.png'
import SouthXchangeLogo from './assets/img/southxchange.png'
import CratexIoLogo from './assets/img/cratexio.png'
import DelionDexLogo from './assets/img/deliondex.png'
import PancakeSwap from './assets/img/pancakeswap.png'
import BSCLogo from './assets/img/bsc.png'
import SOLLogo from './assets/img/sol.png'
import DingosinoLogo from './assets/img/dingosino.png'
import SocialFaucetLogo from './assets/img/socialfaucet.png'

// Bootstrap.
import { Table, Accordion, Button, Navbar, Nav, NavDropdown, Container, Row, Col, Modal, Image } from 'react-bootstrap'

// Others.
import CustomDivider from './CustomDivider.jsx'
import { TwitterTweetEmbed } from 'react-twitter-embed'

function Main() {

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

    const tMax = 2000;
    const animateStart = Date.now();
    const interval = setInterval(() => {
      const progress = (Date.now() - animateStart) / tMax;
      if (progress >= 1) {
        clearInterval(interval);
        setDingoStats({
          supply: Math.round(dingoStats.total_amount),
          blocks: dingoStats.height,
          blockReward: blockReward,
          blocksToHalving: blocksToHalving });
        setDingoVolume(volume);
        setDingoPrice(price);
        setDingoCap(cap);
      } else {
        const v = 1 - (1 - progress)**8;
        setDingoStats({
          supply: Math.round(v * dingoStats.total_amount),
          blocks: Math.round(v * dingoStats.height),
          blockReward: blockReward,
          blocksToHalving: blocksToHalving});
        setDingoVolume(v * volume);
        setDingoPrice(v * price);
        setDingoCap(v * cap);
      }
    }, 10);

  }, []);

  const [socialFaucetRank, setSocialFaucetRank] = React.useState([]);
  const [socialFaucetLastUpdate, setSocialFaucetLastUpdate] = React.useState(null);
  React.useEffect(async () => {
    // Retireve.
    const {metrics, users, lastRefreshed} = await get('https://n4.dingocoin.org:8443/socialFaucet');
    // Collate.
    const rank = [];
    for (const address of Object.keys(metrics)) {
      rank.push({
        user: users[address],
        score: metrics[address].score,
        replies: metrics[address].reply_count,
        retweets: metrics[address].retweet_count,
        likes: metrics[address].like_count,
        rank: null });
    }
    rank.sort((a, b) => b.score - a.score); // Sort descending.
    // Add rank index.
    for (let i = 0; i < rank.length; i++) {
      rank[i].rank = i + 1;
    }
    console.log(lastRefreshed);
    setSocialFaucetRank(rank);
    setSocialFaucetLastUpdate(new Date(Date.parse(lastRefreshed)));
  }, []);

  const [exhangesModalShow, setExchangesModalShow] = React.useState(false);
  const [socialFaucetModalShow, setSocialFaucetModalShow] = React.useState(false);

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
              <Nav.Link onClick={() => document.getElementById('about').scrollIntoView()}>About</Nav.Link>
              <Nav.Link onClick={() => document.getElementById('features').scrollIntoView()}>Features</Nav.Link>
              <Nav.Link onClick={() => document.getElementById('wallets').scrollIntoView()}>Wallets</Nav.Link>
              <Nav.Link onClick={() => document.getElementById('roadmap').scrollIntoView()}>Roadmap</Nav.Link>
              <NavDropdown className="navbar-important" title="Live Charts">
                <NavDropdown.Header>Live Charts</NavDropdown.Header>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://coinpaprika.com/coin/dingo-dingocoin/"><img alt="" src={CoinPaprikaLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://coincodex.com/crypto/dingocoin/"><img alt="" src={CoinCodexLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://dex.guru/token/0x9b208b117B2C4F76C1534B6f006b033220a681A4-bsc"><img alt="" src={DexGuruLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://poocoin.app/tokens/0x9b208b117b2c4f76c1534b6f006b033220a681a4"><img alt="" src={PooCoinLogo} /></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="navbar-important" title="Exchanges">
                <NavDropdown.Header>Exchanges</NavDropdown.Header>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://wallet.autradex.systems"><img alt="" src={AutradexLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://dex-trade.com/spot/trading/DINGOUSDT"><img alt="" src={DexTradeLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://main.southxchange.com/Market/Book/DINGO/LTC"><img alt="" src={SouthXchangeLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://cratex.io/index.php?pair=DINGO/LTC"><img alt="" src={CratexIoLogo} /></NavDropdown.Item>
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
              <p>Dingocoin is an open-source peer-to-peer digital currency.<br/> MUCH KING DINGO SUCH WILD DOGE</p>
            </Row>
            <Row xs={1} md={1} lg={4} className="quick-actions">
              <Col>
                <Button className="popup-button" variant="primary" onClick={() => { setExchangesModalShow(true); }}>Buy Dingocoin</Button>
              </Col>
              <Col>
                <a target="_blank" href="https://miningpoolstats.stream/dingocoin" rel="noreferrer"><Button className="popup-button" variant="primary">Mine Dingocoin</Button></a>
              </Col>
              <Col>
                <a target="_blank" href="https://openchains.info/coin/dingocoin/blocks" rel="noreferrer"><Button className="popup-button" variant="primary">Dingocoin Explorer</Button></a>
              </Col>
              <Col>
                <a target="_blank" href={WhitepaperPdf} rel="noreferrer"><Button className="popup-button" variant="primary">Whitepaper</Button></a>
              </Col>
            </Row>
            <Row xs={3} md={4} lg={4} className="socials">
              <Col className="socials-button-holder"><a target="_blank" rel="noreferrer" href="https://discord.gg/y3J946HFQM"><FontAwesomeIcon className="faicon" icon={faDiscord} /></a></Col>
              <Col className="socials-button-holder"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/Dingocoin.org/"><FontAwesomeIcon className="faicon" icon={faFacebook} /></a></Col>
              <Col className="socials-button-holder"><a target="_blank" rel="noreferrer" href="https://www.reddit.com/r/dingocoin"><FontAwesomeIcon className="faicon" icon={faReddit} /></a></Col>
              <Col className="socials-button-holder"><a target="_blank" rel="noreferrer" href="https://twitter.com/dingocoincrypto"><FontAwesomeIcon className="faicon" icon={faTwitter} /></a></Col>
            </Row>
          </Container>
        </div>
      </header>

      <section className="section-b" id="about">
        <h2>ABOUT DINGOCOIN</h2>
        <CustomDivider/>
        <Container>
          <Row xs={1} md={1} lg={2}>
            <Col>
              <h3>A fun cryptocurrency...</h3>
              <p>Dingocoin is a decentralized, peer-to-peer digital currency that enables you to easily send money online. Think of it as "the great Dingo internet currency". </p>
            </Col>
            <Col>
              <h3>... supporting community features.</h3>
              <p>Backed by its own Scrypt AuxPoW blockchain, Dingocoin provides a testbed for ideas <i>by</i> the community, <i>for</i> the community. Have something fun to try? Throw it out and we'll help.</p>
            </Col>
          </Row>
          <Row xs={1} md={1} lg={3} className="projectFactsWrap">
            <Col>
              <div class="item">
                <p class="number">{dingoPrice === null ? "-" : ("$" + dingoPrice.toFixed(7))}</p>
                <span></span>
                <p>Dingocoin price</p>
              </div>
            </Col>
            <Col>
              <div class="item">
                <p class="number">{dingoCap === null ? "-" : ("$" + Math.floor(dingoCap).toLocaleString())}</p>
                <span></span>
                <p>Dingocoin marketcap</p>
              </div>
            </Col>
            <Col>
              <div class="item">
                <p class="number">{dingoVolume === null ? "-" : ("$" + Math.floor(dingoVolume).toLocaleString())}</p>
                <span></span>
                <p>24h volume</p>
              </div>
            </Col>
          </Row>
          <Row xs={1} md={1} lg={4} className="projectFactsWrap">
            <Col>
              <div class="item">
                <p class="number">{dingoStats === null ? "-" : dingoStats.supply.toLocaleString()}</p>
                <span></span>
                <p>Dingocoin supply</p>
              </div>
            </Col>
            <Col>
              <div class="item">
                <p class="number">{dingoStats === null ? "-" : dingoStats.blocks.toLocaleString()}</p>
                <span></span>
                <p>Blocks mined</p>
              </div>
            </Col>
            <Col>
              <div class="item">
                <p class="number">{dingoStats === null ? "-" : dingoStats.blockReward.toLocaleString()}</p>
                <span></span>
                <p>Current block reward</p>
              </div>
            </Col>
            <Col>
              <div class="item">
                <p class="number">{dingoStats === null ? "-" : dingoStats.blocksToHalving.toLocaleString()}</p>
                <span></span>
                <p>Blocks to next halving</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-a" id="features">
        <h2>COMMUNITY-DRIVEN FEATURES</h2>
        <CustomDivider/>
        <p>Designed and maintained by our very own community members.</p>
        <Container>
          <Row xs={1} md={2} lg={3}>
            <Col>
              <div className="project-card">
                <div className="logo-holder">
                  <FontAwesomeIcon className="faicon" icon={faCoins} />
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
                <a target="_blank" rel="noreferrer"><Button className="popup-button" variant="primary" onClick={() => { setSocialFaucetModalShow(true); }}>Dingocoin Social Faucet</Button></a>
                <p>Earn Dingocoins simply by promoting Dingocoins on Twitter.</p>
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

      <section className="section-a" id="roadmap">
        <h2>ROADMAP - MILESTONES AND UPCOMING PLANS</h2>
        <CustomDivider/>
        <Container>
          <ul className="timeline">
            <li className="event eventcompleted" data-date="Apr 1, 2021"><h3>Birth of Dingocoin</h3><p>Initial deployment. Block reward set to 0 - 1,000,000.</p></li>
            <li className="event eventcompleted" data-date="Apr, 2021"><h3>Block reward halved to 500,000.</h3><p>5,000 Blocks Mined</p></li>
            <li className="event eventcompleted" data-date="Jun, 2021"><h3>Block reward halved to 250,000.</h3><p>100,000 Blocks Mined</p></li>
            <li className="event eventcompleted" data-date="Aug, 2021"><h3>Wrapped Dingocoin released on BSC</h3><p>Hold and trade Dingocoin on BSC.</p></li>
            <li className="event eventcompleted" data-date="Aug, 2021"><h3>Block reward halved to 125,000.</h3><p>200,000 Blocks Mined</p></li>
            <li className="event eventcompleted" data-date="Sep, 2021"><h3>Max Re-org Length Activated</h3><p>Protects against 51% attacks.<br/>Confirmations on exchanges can now be reduced significantly.</p></li>
            <li className="event eventcompleted" data-date="Oct, 2021"><h3>Chain ID switch activated</h3>
              <p>Merged mining can now be done alongside Doge without conflict.<br/>
                Increases exposure to miners via AuxPoW.<br/>
                <b>- We hit 1TH/s hashrate on the same day, 10x our past record! 🎉🎉🎉</b></p>
            </li>
            <li className="event eventcompleted" data-date="Nov, 2021"><h3>Dingosino released on Discord</h3><p>Play games using Dingocoin on Discord.</p></li>
            <li className="event eventcompleted" data-date="Nov, 2021"><h3>Dingocoin Social Faucet released</h3><p>Earn Dingocoins simply by promoting Dingocoin on Twitter.</p></li>
            <li className="event eventincomplete" data-date="~ Nov, 2021"><p>Block reward halved to 62,500.</p><p>300,000 Blocks Mined</p></li>
            <li className="event eventincomplete" data-date="~ Dec, 2021"><p>Wrapped Dingocoin released on SOL</p><p>Hold and trade Dingocoin on SOL.</p></li>
            <li className="event eventincomplete" data-date="~ Jan, 2022"><p>Block reward halved to 31,250.</p><p>400,000 Blocks Mined</p></li>
            <li className="event eventincomplete" data-date="~ Apr, 2022"><p>Block reward halved to 15,625.</p><p>500,000 Blocks Mined</p></li>
            <li className="event eventincomplete" data-date="~ Jun, 2022"><p>Block reward set permanentely to 10,000.</p><p>600,000 Blocks Mined</p></li>
          </ul>
        </Container>
      </section>

      <section className="section-footer">
        <h6>Copyright © The Dingocoin Project 2021</h6>
      </section>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={exhangesModalShow}
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
              <Col><a target="_blank" rel="noreferrer" href="https://wallet.autradex.systems"><Button variant="outline-primary"><img alt="" src={AutradexLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://dex-trade.com/spot/trading/DINGOUSDT"><Button variant="outline-primary"><img alt="" src={DexTradeLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://main.southxchange.com/Market/Book/DINGO/LTC"><Button variant="outline-primary"><img alt="" src={SouthXchangeLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://cratex.io/index.php?pair=DINGO/LTC"><Button variant="outline-primary"><img alt="" src={CratexIoLogo} /></Button></a></Col>
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
        show={socialFaucetModalShow}
        onHide={() => { setSocialFaucetModalShow(false); }}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Dingocoin Social Faucet - Leaderboard
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <div className="social-faucet-table">
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>User</th>
                      <th>Rewards</th>
                      <th><FontAwesomeIcon className="faicon" icon={faComment} /></th>
                      <th><FontAwesomeIcon className="faicon" icon={faRetweet} /></th>
                      <th><FontAwesomeIcon className="faicon" icon={faHeart} /></th>
                    </tr>
                  </thead>
                  <tbody>
                    {socialFaucetRank.map((x) => (
                      <tr>
                        <td>{x.rank}</td>
                        <td><a href={"https://twitter.com/" + x.user} target="_blank">@{x.user}</a></td>
                        <td>{x.score * 10}</td>
                        <td>{x.replies}</td>
                        <td>{x.retweets}</td>
                        <td>{x.likes}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <p>Updates at the start of every hour (last: {socialFaucetLastUpdate == null ? '' : socialFaucetLastUpdate.toLocaleString()}).</p>
              <CustomDivider/>
            </Row>
            <Row>
              <Col>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>How to participate?</h5></Accordion.Header>
                    <Accordion.Body>
                      <p>Simply post a tweet advertising Dingocoin. In your tweet, include
                        <ol>
                          <li>a link to <code>dingocoin.org</code>,</li>
                          <li>hashtags <code>#dingocoin</code> and <code>#socialfaucet</code>, and</li>
                          <li>a hashtag with your Dingocoin address (e.g. <code>#DQBx7G4aozdqYFCv2dU4kacaEcPzwg8dkZ</code>). Your rewards will be sent here.</li>
                        </ol>
                      </p>
                      <p>Below is an example:
                        <TwitterTweetEmbed
                          tweetId={'1457510685441732609'}
                          options={{height:700}}
                        /></p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><h5>Rewards and payouts</h5></Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Get rewarded* based on activity on your tweets:
                      <ul>
                        <li>1 like = 10 Dingocoin</li>
                        <li>1 reply = 20 Dingocoin</li>
                        <li>1 retweet = 30 Dingocoin</li>
                      </ul>
                    </p>
                    <p>Rewards are paid out every Sunday noon, UTC. The leaderboard also resets at that time.</p>
                    <p>*Rates not fixed. May have to adjust in case we fly to the moon.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => { setSocialFaucetModalShow(false); }}>Close</Button>
      </Modal.Footer>
    </Modal>

  </div>
  );
}

export default Main;
