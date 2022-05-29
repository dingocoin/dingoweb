import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import CustomDivider from "./CustomDivider.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChrome,
  faFirefox,
  faWindows,
  faApple,
  faUbuntu,
  faAndroid,
  faTwitter,
  faInstagram,
  faTelegram,
  faReddit,
  faFacebook,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faBaby, faGlobe, faComment } from "@fortawesome/free-solid-svg-icons";

function Community() {
  return (
    <section className="community min-height-fill">
      <Container className="py-3 py-lg-5 d-flex flex-column">
        <h1>Community</h1>

        <div className="d-flex flex-row flex-wrap justify-content-center">
          <a
            href="https://discord.gg/y3J946HFQM"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faDiscord} />
                <span>Discord</span>
              </div>
            </Button>
          </a>
          <a
            href="https://t.me/DingoCoinTalk"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faTelegram} />
                <span>Telegram</span>
              </div>
            </Button>
          </a>
          <a
            href="https://twitter.com/dingocoincrypto"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faTwitter} />
                <span>Twitter</span>
              </div>
            </Button>
          </a>
          <a
            href="https://www.instagram.com/dingocoin"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                <span>Instagram</span>
              </div>
            </Button>
          </a>
          <a
            href="https://www.reddit.com/r/dingocoin"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faReddit} />
                <span>Reddit</span>
              </div>
            </Button>
          </a>
          <a
            href="https://www.facebook.com/Dingocoin.org/"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faFacebook} />
                <span>Facebook</span>
              </div>
            </Button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBw1SJJWcM1eLY_1oFS9iNdKn7fJapKl5zqwraP1TSvXu5VA/viewform?usp=sf_link"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faComment} />
                <span>Feedback</span>
              </div>
            </Button>
          </a>
        </div>

        <h2>International</h2>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <a
            href="https://t.me/DingoChinese"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faTelegram} />
                <span>中文</span>
              </div>
            </Button>
          </a>
          <a
            href="https://t.me/DingocoinBharat"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faTelegram} />
                <span>हिंदी</span>
              </div>
            </Button>
          </a>
          <a
            href="https://t.me/DingoCoin_VietNam"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faTelegram} />
                <span>tiếng Việt</span>
              </div>
            </Button>
          </a>
          <a
            href="https://t.me/Dingocoinpersian"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faTelegram} />
                <span>فارسی</span>
              </div>
            </Button>
          </a>
        </div>

      </Container>
    </section>
  );
}

export default Community;
