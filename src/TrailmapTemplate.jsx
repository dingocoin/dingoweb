import React from "react";
import { Container } from "react-bootstrap";
import CustomDivider from "./CustomDivider.jsx";
import { useLocation } from "react-router-dom";

const ENTRIES = [
  ["/trailmap", "Prologue"],
  ["/trailmap/manifesto", "Our manifesto"],
  ["/trailmap/sdks", "Project: Dingocoin NextGen"],
  ["/trailmap/browserwallet", "Project: Dingocoin browser wallet"],
  ["/trailmap/nftplatform", "Project: Dingocoin NFT platform"],
  ["/trailmap/multilinguistics", "Project: Dingocoin in every language"],
  ["/trailmap/contribute", "How do I get involved?"],
];

function TrailmapTemplate(props) {
  const location = useLocation();
  const entry = ENTRIES.find((x) => x[0] === location.pathname);

  return (
    <section className="section-a min-height-fill">
      <h1>DINGOCOIN TRAILMAP</h1>
      <CustomDivider />
      <Container>
        <div style={{ textAlign: "justify" }}>
          <h4>{entry[1].toUpperCase()}</h4>
          <ul>
            {ENTRIES.map((x) => (
              <li key={x[0]}>
                <a href={x[0]} className="simple-link">
                  {entry[0] !== x[0] && <span>{x[1]}</span>}
                  {entry[0] === x[0] && (
                    <span>
                      <u>
                        <b>{x[1]}</b>
                      </u>
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          {props.children}
        </div>
      </Container>
    </section>
  );
}

export default TrailmapTemplate;
