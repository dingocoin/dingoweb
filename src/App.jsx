import './App.css';

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DingocoinLogo from './assets/img/dingocoin.png'
import DingoImg from './assets/img/dingo.png'
import WhitepaperPdf from './assets/pdf/Dingocoin_Whitepaper.pdf'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand class="navbar-brand">
            <img src={DingocoinLogo}/>
            <span>DINGOCOIN</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Socials</Nav.Link>
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
      <header className="App-header">
        <div className="masthead">
          <h2>1 Dingocoin = 1 Dingocoin</h2>
          <img src={DingoImg} className="masthead-avatar" alt="logo" />
          <p>Dingocoin is an open source peer-to-peer digital currency.<br/> MUCH KING DINGO SUCH WILD DOGE</p>
        </div>
      </header>

    </div>
  );
}

export default App;
