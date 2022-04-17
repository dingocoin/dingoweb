import React from "react";
import TrailmapTemplate from "./TrailmapTemplate";
import {Image} from "react-bootstrap"
import ContributionImage from "./assets/img/contribute.png";

function TrailmapContribute() {
  return (
    <TrailmapTemplate>
      <h4 className="mt-4">GETTING INVOLVED</h4>
      <p className="mb-1">
        One of the challenges for a decentralized project: "How do I get
        involved?"
      </p>
      <ul>
        <li>
          I have an idea for the Dingocoin Ecosystem, who do I propose it to?
        </li>
        <li>
          Can I get involved as a core developer, app developer or meme artist?
        </li>{" "}
        <li>
          What projects are going on, and can I contribute to any of them?
        </li>
      </ul>

      <h4 className="mt-4">WORKING ON A PROJECT</h4>
      <p className="mb-1">
        Dingocoin is most active in Discord, and the community is always ready
        to engage with you. If you have any cool project ideas, feel free to hit
        us up (on Discord). If you would like to contribute but need some
        inspiration, you may consider one of our ongoing projects (listed in the
        Trailmap's content list).
      </p>

      <h4 className="mt-4">CONTRIBUTIONS LIST</h4>
      <Image src={ContributionImage} style={{width: "100%", height: "auto"}}/>
    </TrailmapTemplate>
  );
}

export default TrailmapContribute;
