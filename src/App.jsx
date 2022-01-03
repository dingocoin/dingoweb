import "./App.scss";
import React from "react";

import Main from "./Main";
import Airdrop from "./Airdrop";
import Burnboard from "./Burnboard";
import Privacy from "./Privacy";
import ReactGA from "react-ga";

// Controls.
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

// Assets.
import CoinCodexLogo from "./assets/img/coincodex.png";
import CoinPaprikaLogo from "./assets/img/coinpaprika.png";
import CoinMarketCapLogo from "./assets/img/coinmarketcap.png";
import CratexIoLogo from "./assets/img/cratexio.png";
import DelionDexLogo from "./assets/img/deliondex.png";
import DexGuruLogo from "./assets/img/dex-guru.png";
import DexTradeLogo from "./assets/img/dextrade.png";
import DingocoinLogo from "./assets/img/dingocoin.png";
import PancakeSwap from "./assets/img/pancakeswap.png";
import RaydiumSwap from "./assets/img/raydiumswap.png";
import PooCoinLogo from "./assets/img/poocoin.png";
import SouthXchangeLogo from "./assets/img/southxchange.png";
import HotbitLogo from "./assets/img/hotbitex.png";
import CoinGeckoLogo from "./assets/img/coingecko.png";
import BirdeyeLogo from "./assets/img/birdeye.png";

function App() {
  ReactGA.initialize("UA-210617812-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [location, setLocation] = React.useState(null);
  React.useEffect(() => {
    setLocation(window.location.pathname);
  }, []);
  React.useEffect(() => {}, [location]);

  return (
    <div className="App">
      <Navbar className="navbar" bg="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">
            <img alt="" src={DingocoinLogo} />
            <span>DINGOCOIN</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav
              className="ms-auto"
              navbarScroll
              style={{ maxHeight: "300px" }}
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/airdrop">Airdrop</Nav.Link>
              <Nav.Link href="/burnboard">Burnboard</Nav.Link>
              <NavDropdown className="navbar-important" title="Links">
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
                <NavDropdown.Item
                  target="_blank"
                  rel="noreferrer"
                  href="https://birdeye.so/token/6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3"
                >
                  <img alt="" src={BirdeyeLogo} />
                </NavDropdown.Item>
                <NavDropdown.Divider />
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
                <NavDropdown.Item
                  target="_blank"
                  rel="noreferrer"
                  href="https://raydium.io/swap/?from=11111111111111111111111111111111&to=6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3"
                >
                  <img alt="" src={RaydiumSwap} />
                </NavDropdown.Item>
                <NavDropdown.Divider />
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
                <NavDropdown.Item
                  target="_blank"
                  rel="noreferrer"
                  href="/privacy"
                >
                  Privacy Policy
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {(location === "/airdrop" && <Airdrop />) ||
          (location === "/burnboard" && <Burnboard />) ||
        (location === "/privacy" && <Privacy/>) || <Main />}

      <section className="section-footer">
        <h6>
          Copyright © The Dingocoin Project 2021 | Multisig Community Donations:{" "}
          <code>A4KTTmS4dECRZAn6ycsavechg8ccyjxkJP</code>{" "}
        </h6>
      </section>
    </div>
  );
}

export default App;
