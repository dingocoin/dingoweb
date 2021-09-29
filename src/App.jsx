import './App.scss';
import React from 'react';

// Assets.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt, faRobot, faCoins, faWallet, faFileContract } from '@fortawesome/free-solid-svg-icons'
import { faWpexplorer, faWindows, faApple, faLinux, faTwitter, faReddit, faFacebook, faDiscord, faTelegram } from  '@fortawesome/free-brands-svg-icons'
import DingocoinLogo from './assets/img/dingocoin.png'
import WhitepaperPdf from './assets/pdf/Dingocoin_Whitepaper.pdf'
import CoinPaprikaLogo from './assets/img/coinpaprika.png'
import CoinGeckoLogo from './assets/img/coingecko.png'
import NomicsLogo from './assets/img/nomics.png'
import DexGuruLogo from './assets/img/dex-guru.png'
import PooCoinLogo from './assets/img/poocoin.png'
import AutradexLogo from './assets/img/autradex.png'
import DexTradeLogo from './assets/img/dextrade.png'
import SouthXchangeLogo from './assets/img/southxchange.png'
import CratexIoLogo from './assets/img/cratexio.png'
import DelionDexLogo from './assets/img/deliondex.png'
import PancakeSwap from './assets/img/pancakeswap.png'

// Bootstrap.
import { Button, Navbar, Nav, NavDropdown, Container, Row, Col, Modal } from 'react-bootstrap'

// Others.
import CustomDivider from './CustomDivider.jsx'

function App() {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(function() { setLoaded(true); }, 300);
  }, []);

  const [exhangesModalShow, setExchangesShow] = React.useState(false);

  return (
    <div className="App">

      <Navbar className="navbar" bg="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <img alt="" src={DingocoinLogo}/>
            <span>DINGOCOIN</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#about">Features</Nav.Link>
              <Nav.Link href="#wallets">Wallets</Nav.Link>
              <Nav.Link href="#roadmap">Roadmap</Nav.Link>
              <NavDropdown className="navbar-important" title="Resources">
                <NavDropdown.Item target="_blank" rel="noreferrer" href={WhitepaperPdf}>Whitepaper</NavDropdown.Item>
                <NavDropdown.Item>Mining Information (W.I.P)</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="navbar-important" title="Live Charts">
                <NavDropdown.Header>Live Charts</NavDropdown.Header>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://coinpaprika.com/coin/dingo-dingocoin/"><img alt="" src={CoinPaprikaLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://www.coingecko.com/en/coins/dingocoin"><img alt="" src={CoinGeckoLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://nomics.com/assets/dingo"><img alt="" src={NomicsLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://dex.guru/token/0x9b208b117B2C4F76C1534B6f006b033220a681A4-bsc"><img alt="" src={DexGuruLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://poocoin.app/tokens/0x9b208b117b2c4f76c1534b6f006b033220a681a4"><img alt="" src={PooCoinLogo} /></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="navbar-important" title="Exchanges">
                <NavDropdown.Header>Exchanges</NavDropdown.Header>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://wallet.autradex.systems"><img alt="" src={AutradexLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://dex-trade.com/spot/trading/DINGOUSDT"><img alt="" src={DexTradeLogo} /></NavDropdown.Item>
                <NavDropdown.Item target="_blank" rel="noreferrer" href="https://main.southxchange.com/Market/Book/DINGO/BTC"><img alt="" src={SouthXchangeLogo} /></NavDropdown.Item>
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
            <Row xs={1} md={1} lg={1} className="quick-actions">
              <Col>
                <a target="_blank" rel="noreferrer" onClick={() => { setExchangesShow(true); }}><Button className="popup-button" variant="primary">Buy Dingocoin</Button></a>
              </Col>
            </Row>
            <Row xs={3} md={5} lg={5} className="socials">
              <Col className="socials-button-holder"><a target="_blank" rel="noreferrer" href="https://discord.gg/y3J946HFQM"><FontAwesomeIcon className="faicon" icon={faDiscord} /></a></Col>
              <Col className="socials-button-holder"><a target="_blank" rel="noreferrer" href="https://t.me/joinchat/wNb353Dwm_c4NWFk"><FontAwesomeIcon className="faicon" icon={faTelegram} /></a></Col>
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
              <p>Dingocoin is a decentralized, peer-to-peer digital currency that enables you to easily send money online. Think of it as "the great Dingo internet currency." Created in parody of Dogecoin for absolutely everyone.</p>
            </Col>
            <Col>
              <h3>... supporting community features.</h3>
              <p>Backed by its own blockchain, Dingocoin provides a testbed for ideas <i>by</i> the community, <i>for</i> the community. Have something fun to try? Throw it out and we'll help.</p>
            </Col>
          </Row>
        </Container>
        <CustomDivider/>
        <h3>Community-driven features</h3>
        <p>Designed and maintained by our very own community members.</p>
        <Container>
          <Row xs={1} md={2} lg={3}>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faCoins} />
                <a target="_blank" rel="noreferrer" href="https://github.com/dingocoin/dingocoin"><Button className="popup-button" variant="primary">AuxPow Blockchain</Button></a>
                <p>Dingocoin is backed by its own open-source, community-maintained AuxPow blockchain.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faWpexplorer} />
                <a target="_blank" rel="noreferrer" href="https://explorer.dingocoin.com"><Button className="popup-button" variant="primary">Mainnet Explorer</Button></a>
                <p>Explore the Dingocoin mainnet.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faExchangeAlt} />
                <a target="_blank" rel="noreferrer" href="https://wrap.dingocoin.org"><Button className="popup-button" variant="primary">BSC Wrap Custodian</Button></a>
                <p><i>Wrap</i> Dingocoins to wDingocoins on BSC securely.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faRobot} />
                <a target="_blank" rel="noreferrer" href="https://discord.gg/y3J946HFQM"><Button className="popup-button" variant="primary">Discord Faucet/Tip Bot</Button></a>
                <p>Get free sample Dingocoins. Tip Dingocoins to others easily.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faRobot} />
                <a target="_blank" rel="noreferrer" href="https://discord.gg/y3J946HFQM"><Button className="popup-button" variant="primary">Discord Price Bot</Button></a>
                <p>Get live alerts for arbitrage opportunities across exchanges.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-a" id="wallets">
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
                        <a target="_blank" rel="noreferrer" href="https://github.com/dingocoin/dingocoin/releases/download/v1.16.0.2/windows-binaries.zip"><Button className="popup-button" variant="primary">Windows</Button></a>
                      </div>
                    </Col>
                    <Col>
                      <div className="wallet-download">
                        <FontAwesomeIcon className="faicon" icon={faApple} />
                        <a target="_blank" rel="noreferrer" href="https://github.com/dingocoin/dingocoin/releases/tag/v1.16.0.2"><Button className="popup-button" variant="primary">macOS</Button></a>
                      </div>
                    </Col>
                    <Col>
                      <div className="wallet-download">
                        <FontAwesomeIcon className="faicon" icon={faLinux} />
                        <a target="_blank" rel="noreferrer" href="https://github.com/dingocoin/dingocoin/releases/download/v1.16.0.2/linux-binaries.zip"><Button className="popup-button" variant="primary">Linux</Button></a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>

              <div className="wallet-section">
                <p>Other Mainnet Wallets</p>
                <div className="wallet-download">
                  <FontAwesomeIcon className="faicon" icon={faWallet} />
                  <a target="_blank" rel="noreferrer" href="https://beehivewallet.link/"><Button className="popup-button" variant="primary">Hive Multi-Coin Web Wallet</Button></a>
                </div>
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
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-b" id="roadmap">
        <h2>ROADMAP - MILESTONES AND UPCOMING PLANS</h2>
        <CustomDivider/>
        <Container>
          <ul className="timeline">
            <li className="event eventcompleted" data-date="Apr 2, 2021"><h3>Birth of Dingocoin</h3><p>Genesis plus 1 block mined. Block reward set to 0 - 1,000,000.</p></li>
            <li className="event eventcompleted" data-date="Apr 8, 2021"><h3>5,000 Blocks Mined</h3><p>Block reward halved to 500,000.</p></li>
            <li className="event eventcompleted" data-date="Jun 17, 2021"><h3>100,000 Blocks Mined</h3><p>Block reward halved to 250,000.</p></li>
            <li className="event eventcompleted" data-date="Aug 29, 2021"><h3>Wrapped Dingocoin Released on BSC</h3><p>Hold and trade Dingocoin on BSC.</p></li>
            <li className="event eventcompleted" data-date="Aug 30, 2021"><h3>200,000 Blocks Mined</h3><p>Block reward halved to 125,000.</p></li>
            <li className="event eventcompleted" data-date="Sep 18, 2021"><h3>Max Re-org Length Activated</h3><p>Protects against 51% attacks.<br/>Confirmations on exchanges can now be reduced significantly.</p></li>
            <li className="event eventincomplete" data-date="~ Oct, 2021"><h3>(Height 265,000) Chain ID switch activated</h3><p>Merged mining can now be done alongside Doge without conflict.<br/>Increases exposure to miners via AuxPOW.</p></li>
            <li className="event eventincomplete" data-date="~ Nov, 2021"><h3>300,000 Blocks Mined</h3><p>Block reward halved to 62,500.</p></li>
            <li className="event eventincomplete" data-date="~ Jan, 2022"><h3>400,000 Blocks Mined</h3><p>Block reward halved to 31,250.</p></li>
            <li className="event eventincomplete" data-date="~ Apr, 2022"><h3>500,000 Blocks Mined</h3><p>Block reward halved to 15,625.</p></li>
            <li className="event eventincomplete" data-date="~ Jun, 2022"><h3>600,000 Blocks Mined</h3><p>Block reward set permanentely to 10,000.</p></li>
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
        onHide={() => { setExchangesShow(false); }}>
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
              <Col><a target="_blank" rel="noreferrer" href="https://nomics.com/assets/dingo"><Button variant="outline-primary"><img alt="" src={NomicsLogo} /></Button></a></Col>
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
              <Col><a target="_blank" rel="noreferrer" href="https://main.southxchange.com/Market/Book/DINGO/BTC"><Button variant="outline-primary"><img alt="" src={SouthXchangeLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://cratex.io/index.php?pair=DINGO/LTC"><Button variant="outline-primary"><img alt="" src={CratexIoLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://dex.delion.online/market/DELION.DINGO_DOGE"><Button variant="outline-primary"><img alt="" src={DelionDexLogo} /></Button></a></Col>
              <Col><a target="_blank" rel="noreferrer" href="https://pancakeswap.finance/swap?outputCurrency=0x9b208b117B2C4F76C1534B6f006b033220a681A4"><Button variant="outline-primary"><img alt="" src={PancakeSwap} /></Button></a></Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { setExchangesShow(false); }}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default App;
