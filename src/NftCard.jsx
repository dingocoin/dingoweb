import React from "react";
import { getMeta, getPreviewLink, getState } from "./storage";
import { Card } from "react-bootstrap";
import { satoshiToLocaleString } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

function NFTCard(props) {
  const domRef = React.useRef();
  const [isVisible, setVisible] = React.useState(false);
  const [previewLink, setPreviewLink] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [stats, setStats] = React.useState(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    observer.observe(domRef.current);
    return () => {
      try {
        observer.unobserve(domRef.current);
      } catch {}
    };
  }, []);

  React.useEffect(() => {
    (async () => {
      if (isVisible) {
        const meta = await getMeta(props.address);
        const previewLink = await getPreviewLink(props.address);
        const state = await getState(props.address);

        setPreviewLink(previewLink);
        setName(meta === null ? null : meta.name);
        setStats(state === null ? null : state.stats);
      }
    })();
  }, [props.address, isVisible]);

  return (
    <Card
      className="nft-card floating-borders floating-borders-press"
      ref={domRef}
    >
      <div className="header-box">
        <div className="spinner">
          <div className="spinner-border text-primary" role="status">
          </div>
        </div>
        <Card.Img variant="top" src={previewLink} loading="lazy"></Card.Img>
      </div>
      <hr />
      <Card.Body>
        <Card.Title className="text-start">
          {name === null ? "-" : name === "" ? "Unnamed NFT" : name}
        </Card.Title>
        <Card.Subtitle className="text-start text-muted">{props.address}</Card.Subtitle>
        <Card.Text>
          <span className="card-price">
            {stats === null ? "-" : satoshiToLocaleString(stats.price)}
          </span>
          <br />
          <span className="card-price-subtitle">DINGO</span>
        </Card.Text>
      </Card.Body>
      <hr />
      <div className="card-sub-body text-muted">
        <span className="align-middle">
          <FontAwesomeIcon icon={faCashRegister} />{" "}
          {stats === null ? "-" : satoshiToLocaleString(stats.tradeVolume)}
        </span>
        &nbsp;&nbsp;&nbsp;
        <span className="align-middle">
          <FontAwesomeIcon icon={faExchangeAlt} />{" "}
          {stats === null ? "-" : stats.tradeCount}
        </span>
      </div>
    </Card>
  );
}

export default NFTCard;

