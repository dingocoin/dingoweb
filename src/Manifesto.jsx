import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomDivider from "./CustomDivider.jsx";

function Manifesto() {
  return (
    <section className="section-a min-height-fill" id="privacy">
      <h1>OUR MANIFESTO</h1>
      <CustomDivider />
      <Container>
        <Row className="privacy">
          <p>
            <b>Last updated Feburary 12, 2022</b>
          </p>

          <p>
            We are Dingocoin, a wild crypto-movement, exploring new territory
            and spreading happiness is what we do.
            <br />
            <br />
            Dingocoin was created by and for sovereign people throughout the
            world. From a fair launch, guardians choose to come along and strive
            to continue creating happiness every day, the Dingocoin way.
            <br />
            <br />
            Through all our lives we have come to value:
            <ul>
              <li>Continuation of the wisdom united into bitcoin</li>
              <li>
                Genuine usefulness with creative and elegant community built
                solutions
              </li>
              <li>
                Being courageous and forging new paths around a broken financial
                system
              </li>
              <li>
                Eternal emission rewarding all newcomers for securing the
                Dingocoin network
              </li>
            </ul>
            <br />
            We are free, warm and creative, and spreading happiness is our
            success.
          </p>
        </Row>
      </Container>
    </section>
  );
}

export default Manifesto;
