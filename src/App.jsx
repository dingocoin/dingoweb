import './App.scss';

// Assets.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt, faRobot, faCoins, faWallet, faFileContract } from '@fortawesome/free-solid-svg-icons'
import { faWpexplorer, faWindows, faApple, faLinux } from  '@fortawesome/free-brands-svg-icons'
import DingocoinLogo from './assets/img/dingocoin.png'
import DingoImg from './assets/img/dingo.png'
import WhitepaperPdf from './assets/pdf/Dingocoin_Whitepaper.pdf'
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom'

// Bootstrap.
import { Button, Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap'

// Others.
import CustomParticles from './CustomParticles.jsx'
import CustomDivider from './CustomDivider.jsx'

function App() {
  return (
    <div className="App">

      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-brand">
            <img src={DingocoinLogo}/>
            <span>DINGOCOIN</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Roadmap</Nav.Link>
              <NavDropdown className="navbar-item" title="Wallets">
                <NavDropdown.Header>Dingocoin</NavDropdown.Header>
                <NavDropdown.Item>Mainnet Wallet</NavDropdown.Item>
                <NavDropdown.Item>Web Wallet</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Header>wDingocoin</NavDropdown.Header>
                <NavDropdown.Item>BSC Wallet</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="navbar-item" title="Exchanges">
                <NavDropdown.Header>Dingocoin</NavDropdown.Header>
                <NavDropdown.Item>Mainnet (Dingocoin)</NavDropdown.Item>
                <NavDropdown.Item>BSC (wDingocoin)</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Header>wDingocoin</NavDropdown.Header>
                <NavDropdown.Item>PancakeSwap (BSC)</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="section-a">
        <div className="particles-container">
          <Container className="masthead">
            <Row>
              <h2>1 Dingocoin = 1 Dingocoin</h2>
            </Row>
            <Row>
              <Col><img src={DingoImg} className="masthead-avatar" alt="logo" /></Col>
            </Row>
            <Row>
              <p>Dingocoin is an open-source peer-to-peer digital currency.<br/> MUCH KING DINGO SUCH WILD DOGE</p>
            </Row>
            <Row>
              <Col>
                <SocialIcon className="social-icon" url="https://discord.gg/y3J946HFQM " />
                <SocialIcon className="social-icon" url="https://t.me/joinchat/wNb353Dwm_c4NWFk" network="telegram" />
                <SocialIcon className="social-icon" url="https://www.facebook.com/Dingocoin.org/" />
                <SocialIcon className="social-icon" url="https://www.reddit.com/r/dingocoin" />
                <SocialIcon className="social-icon" url="https://twitter.com/jaketrent" />
              </Col>
            </Row>
          </Container>
          <CustomParticles className="particles"/>
        </div>
      </header>

      <section className="section-b">
        <h2>ABOUT DINGOCOIN</h2>
        <CustomDivider/>
        <Container>
          <Row md={1} lg={2}>
            <Col>
              <h3>A fun cryptocurrency...</h3>
              <p>Dingocoin is a decentralized, peer-to-peer digital currency that enables you to easily send money online. Think of it as "the great Dingo internet currency." Created in parody of Dogecoin for absolutely everyone.</p>
            </Col>
            <Col>
              <h3>... supporting community projects.</h3>
              <p>Backed by its own blockchain, Dingocoin provides a testbed for ideas <i>by</i> the community, <i>for</i> the community. Have something fun to try? Throw it out and we'll help. <b>Check out our community-driven projects below!</b></p>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3}>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faCoins} />
                <Link to="www.google.com"><Button variant="primary">AuxPow Blockchain</Button></Link>
                <p>Dingocoin is backed by its own open-source, community-maintained AuxPow blockchain.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faExchangeAlt} />
                <Link to="www.google.com"><Button variant="primary">BSC Wrap Custodian</Button></Link>
                <p><i>Wrap</i> Dingocoins to wDingocoins on BSC securely. Designed and maintained by our very own community members.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faWpexplorer} />
                <Link to="www.google.com"><Button variant="primary">Mainnet Explorer</Button></Link>
                <p>Explore the Dingocoin mainnet. Built by our very own community member.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faRobot} />
                <Link to="www.google.com"><Button variant="primary">Discord Faucet/Tip Bot</Button></Link>
                <p>Get free sample Dingocoins. Tip Dingocoins to others easily. Written by our very own community member.</p>
              </div>
            </Col>
            <Col>
              <div className="project-card">
                <FontAwesomeIcon className="faicon" icon={faRobot} />
                <Link to="www.google.com"><Button variant="primary">Discord Price Bot</Button></Link>
                <p>Get live alerts for arbitrage opportunities across exchanges. Written by our very own community member.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-a">
        <h2>DINGOCOIN WALLETS</h2>
        <CustomDivider/>
        <Container>
          <Row md={1} lg={2}>
            <Col>
              <h3>Hold Dingocoins directly...</h3>

              <div className="wallet-section">
                <h6>Official Mainnet Wallets</h6>
                <Link to="www.google.com"><Button className="wallet-button" variant="primary"><FontAwesomeIcon icon={faWindows} /> Windows</Button></Link>
                <Link to="www.google.com"><Button className="wallet-button" variant="primary"><FontAwesomeIcon icon={faApple} /> macOS</Button></Link>
                <Link to="www.google.com"><Button className="wallet-button" variant="primary"><FontAwesomeIcon icon={faLinux} /> Linux</Button></Link>
              </div>

              <div className="wallet-section">
                <h6>Other Wallets</h6>
                <Link to="www.google.com"><Button className="wallet-button" variant="primary"><FontAwesomeIcon icon={faWallet} /> Hive Multi-Coin Web Wallet</Button></Link>
              </div>
            </Col>
            <Col>
              <h3>... or hold wrapped wDingocoins.</h3>
              <div className="wallet-section">
                <h6>Smart Contracts</h6>
                <Link to="www.google.com"><Button className="wallet-button" variant="primary"><FontAwesomeIcon icon={faFileContract} /> BSC</Button></Link>
                <Link to="www.google.com"><Button className="wallet-button" variant="primary" disabled><FontAwesomeIcon icon={faFileContract}/> SOL (Coming soon...)</Button></Link>
              </div>
              <div className="wallet-section">
                <h6>Recommended Wallets</h6>
                <Link to="www.google.com"><Button className="wallet-button" variant="primary"><FontAwesomeIcon icon={faWallet} /> MetaMask</Button></Link>
                <Link to="www.google.com"><Button className="wallet-button" variant="primary"><FontAwesomeIcon icon={faWallet} /> Trust Wallet</Button></Link>
                <Link to="www.google.com"><Button className="wallet-button" variant="primary"><FontAwesomeIcon icon={faWallet} /> Others</Button></Link>
              </div>
              <div className="wallet-section">
                <h6>Wrap Custodians</h6>
                <Link to="www.google.com"><Button className="wallet-button" variant="primary"><FontAwesomeIcon icon={faFileContract} /> BSC</Button></Link>
                <Link to="www.google.com"><Button className="wallet-button" variant="primary" disabled><FontAwesomeIcon icon={faFileContract} /> SOL (Coming soon...)</Button></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
}

export default App;
