import React from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChrome,
  faFirefox,
  faWindows,
  faApple,
  faUbuntu,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Wallets() {
  return (
    <section className="wallets min-height-fill">
      <Container className="py-3 py-lg-5 d-flex flex-column">
        <h1 className="mt-4">Wallets</h1>

        <h2>Browser</h2>
        <div className="d-flex flex-row flex-wrap justify-content-lg-start justify-content-center">
          <a
            href="https://chrome.google.com/webstore/detail/dingocoin-wallet/kfapifmeobcllcbdjmgnkbfbcokmdkmf"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faChrome} />
                <span>Chrome</span>
              </div>
            </Button>
          </a>
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/dingocoin-wallet/"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faFirefox} />
                <span>Firefox</span>
              </div>
            </Button>
          </a>
        </div>

        <h2>Mobile</h2>
        <span className="subtitle">(Coming soon...)</span>
        <div className="d-flex flex-row flex-wrap justify-content-lg-start justify-content-center">
          <Button className="btn-light" disabled>
            <div className="d-flex flex-column">
              <FontAwesomeIcon className="icon" icon={faAndroid} />
              <span>Android</span>
            </div>
          </Button>
          <Button className="btn-light disabled">
            <div className="d-flex flex-column">
              <FontAwesomeIcon className="icon" icon={faApple} />
              <span>iOS</span>
            </div>
          </Button>
        </div>

        <h2>Desktop (Full-node)</h2>
        <div className="d-flex flex-row flex-wrap justify-content-lg-start justify-content-center">
          <a
            href="https://github.com/dingocoin/dingocoin/releases/latest"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faWindows} />
                <span>Windows</span>
              </div>
            </Button>
          </a>
          <a
            href="https://github.com/dingocoin/dingocoin/releases/latest"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faApple} />
                <span>macOS</span>
              </div>
            </Button>
          </a>
          <a
            href="https://github.com/dingocoin/dingocoin/releases/latest"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faUbuntu} />
                <span>Ubuntu</span>
              </div>
            </Button>
          </a>
        </div>

        <h2>Unofficial (Beehive)</h2>
        <div className="d-flex flex-row flex-wrap justify-content-lg-start justify-content-center">
          <a
            href="https://beehivewallet.link/"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                <span>Web</span>
              </div>
            </Button>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.beehive.beehivemulti_coinwallet"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faAndroid} />
                <span>Android</span>
              </div>
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Wallets;
