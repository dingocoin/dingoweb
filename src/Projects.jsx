import React from "react";
import { Modal, Row, Col, Button, Image, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faShoppingCart,
  faRobot,
  faArrowRight,
  faLaptopCode,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import CryptoGrenadeLogo from "./assets/img/cryptogrenade.png";
import DingetteLogo from "./assets/img/dingette.png";
import DingodiggersLogo from "./assets/img/dingodigger.png";
import DingominerLogo from "./assets/img/dingominer.png";
import DingosinoLogo from "./assets/img/dingosino.png";
import RobloxLogo from "./assets/img/roblox.png";
import SocialFaucetLogo from "./assets/img/socialfaucet.png";
import CustomDivider from "./CustomDivider";
import DingocoinCollection1Logo from "./assets/img/dingocoincollection1.png";
import DoucheyDingoesLogo from "./assets/img/doucheydingos.gif";
import MerchCryptoDingosLogo from "./assets/img/merch_cryptodingos.png";
import MerchDingocoinArtLogo from "./assets/img/merch_dingocoinart.png";
import NFTLogo from "./assets/img/dingocoinnftplatform.png";
import BSCLogo from "./assets/img/bsc.png";
import SOLLogo from "./assets/img/sol.png";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  const [marketplaceModalShow, setMarketplaceModalShow] = React.useState(false);

  return (
    <section className="projects min-height-fill">
      <Container className="py-3 py-lg-5 d-flex flex-column mt-4">
        <h1 className="mt-4">Projects</h1>
        <span className="subtitle">
          Showcasing projects completed by the community.
        </span>

        <h2>Fun</h2>
        <div className="cards-container">
          <a
            href="https://nft.dingocoin.org"
            target="_blank"
            rel="noreferrer"
            className="project-card d-flex flex-row"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <Image src={NFTLogo} />
              </div>
              <h5 className="text-primary">NFT Platform</h5>
              <p className="text-muted">Trade NFTs on the Dingocoin mainnet.</p>
            </div>
          </a>
          <a
            href="https://discord.gg/y3J946HFQM"
            target="_blank"
            rel="noreferrer"
            className="project-card d-flex flex-row"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <Image src={DingodiggersLogo} />
              </div>
              <h5 className="text-primary">Dingo Diggers</h5>
              <p className="text-muted">Easily Earn Dingo Mining Rewards.</p>
            </div>
          </a>
          <a
            href="https://discord.gg/y3J946HFQM"
            target="_blank"
            rel="noreferrer"
            className="project-card d-flex"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <Image src={DingosinoLogo} />
              </div>
              <h5 className="text-primary">Dingosino</h5>
              <p className="text-muted">
                Play games using Dingocoins on Discord.
              </p>
            </div>
          </a>
          <a
            href="https://www.roblox.com/games/8019728893/Dingo-Coin-City"
            target="_blank"
            rel="noreferrer"
            className="project-card d-flex"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <Image src={RobloxLogo} />
              </div>
              <h5 className="text-primary">Dingocoin City</h5>
              <p className="text-muted">
                Hang out with the Dingo Pack on Roblox <i>(Beta).</i>
              </p>
            </div>
          </a>
          <a
            href="http://miner.dingocoin.org/"
            target="_blank"
            rel="noreferrer"
            className="project-card d-flex"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <Image src={DingominerLogo} />
              </div>
              <h5 className="text-primary">Dingo Miner</h5>
              <p className="text-muted">
                Learn the ropes of mining with our Dingo Miner game.
              </p>
            </div>
          </a>
          <a
            href="https://www.reddit.com/user/Dingo-Is-My-Man/"
            target="_blank"
            rel="noreferrer"
            className="project-card d-flex"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <Image src={DingetteLogo} />
              </div>
              <h5 className="text-primary">Dingette's Channel</h5>
              <p className="text-muted">
                UwU? What's this? Our very own fan-lady growing the pack??? OwO
              </p>
            </div>
          </a>
          <div
            className="project-card d-flex"
            onClick={() => setMarketplaceModalShow(true)}
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <FontAwesomeIcon className="faicon" icon={faShoppingCart} />
              </div>
              <h5 className="text-primary">Marketplace</h5>
              <p className="text-muted">
                Purchase merchandise/NFTs created by our community members.
              </p>
            </div>
          </div>
          <a
            href="https://discord.gg/y3J946HFQM"
            target="_blank"
            rel="noreferrer"
            className="project-card d-flex"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <FontAwesomeIcon className="faicon" icon={faRobot} />
              </div>
              <h5>Discord Faucet/Tips</h5>
              <p className="text-muted">
                Get free sample Dingocoins.
                <br /> Tip Dingocoins to others easily.
              </p>
            </div>
          </a>
          <a
            href="https://dev.dingocoin.org"
            target="_blank"
            rel="noreferrer"
            className="project-card develop d-flex"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <FontAwesomeIcon className="faicon" icon={faLaptopCode} />
              </div>
              <h5>Start developing your own project!</h5>
              <Button className="btn-outline-light rounded-pill">
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </Button>
            </div>
          </a>
        </div>

        <h2>Activities</h2>
        <div className="cards-container">
          <a
            href="https://twitter.com/dingocoincrypto"
            className="project-card d-flex"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <Image src={SocialFaucetLogo} />
              </div>
              <h5 className="text-primary">Weekly Airdrop</h5>
              <p className="text-muted">
                Earn Dingocoins in our weekly Twitter airdrops.
              </p>
            </div>
          </a>
          <a href="/stake" className="project-card d-flex">
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <FontAwesomeIcon className="faicon" icon={faChartLine} />
              </div>
              <h5 className="text-primary">Stake Dingocoins</h5>
              <p className="text-muted">
                Earn weekly rewards just for holding Dingocoins.
              </p>
            </div>
          </a>
          <a
            rel="noreferrer"
            href="https://cryptogrenade.xyz/"
            target="_blank"
            className="project-card d-flex"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <Image src={CryptoGrenadeLogo} />
              </div>
              <h5 className="text-primary">CG's Faucet Platform</h5>
              <p className="text-muted">
                Cryptogrenade's faucet platform - Paid to click, shortlinks,
                referral rewards.
              </p>
            </div>
          </a>
        </div>

        <h2>Utilities</h2>
        <div className="cards-container">
          <a
            href="https://dingocoin.org/wallets"
            className="project-card d-flex"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <FontAwesomeIcon className="faicon" icon={faWindowRestore} />
              </div>
              <h5 className="text-primary">Browser Wallet</h5>
              <p className="text-muted">
                Hold and send Dingocoins right in your browser. Interact with
                the web.
              </p>
            </div>
          </a>
          <a
            rel="noreferrer"
            href="https://wrap.dingocoin.org"
            target="_blank"
            className="project-card d-flex"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <Image src={SOLLogo} />
              </div>
              <h5 className="text-primary">SOL Wrap</h5>
              <p className="text-muted">Wrapped Dingocoin on the SOL chain.</p>
            </div>
          </a>
          <a
            rel="noreferrer"
            href="https://wrap.dingocoin.org"
            target="_blank"
            className="project-card d-flex"
          >
            <div className="mb-auto mx-auto">
              <div className="logo-holder">
                <Image src={BSCLogo} />
              </div>
              <h5 className="text-primary">BSC Wrap</h5>
              <p className="text-muted">Wrapped Dingocoin on the BSC chain.</p>
            </div>
          </a>
        </div>
      </Container>

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
    </section>
  );
}

export default Projects;
