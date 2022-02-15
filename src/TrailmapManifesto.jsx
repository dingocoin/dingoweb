import React from "react";
import {Image} from "react-bootstrap";
import TrailmapTemplate from "./TrailmapTemplate";
import Manifesto1Logo from "./assets/img/manifesto1.png"
import Manifesto2Logo from "./assets/img/manifesto2.jpg"

function TrailmapManifesto() {
  return (
    <TrailmapTemplate>
      <div className="manifesto-images">
        <Image src={Manifesto2Logo}/>
      </div>
      <h4 className="mt-4">THE DINGOCOIN MANIFESTO</h4>
      <p>
        We are Dingocoin, a wild crypto-movement, exploring new territory and
        spreading happiness is what we do.
      </p>
      <p>
        Dingocoin was created by and for sovereign people throughout the world.
        From a fair launch, guardians choose to come along and strive to
        continue creating happiness every day, the Dingocoin way.
      </p>
      <p>
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
            Eternal emission rewarding all newcomers for securing the Dingocoin
            network
          </li>
        </ul>
      </p>
      <p>
        We are free, warm and creative, and spreading happiness is our success.
      </p>
      <div className="manifesto-images">
        <Image src={Manifesto1Logo}/>
      </div>
    </TrailmapTemplate>
  );
}

export default TrailmapManifesto;
