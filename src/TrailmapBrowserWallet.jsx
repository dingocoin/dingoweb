import React from "react";
import TrailmapTemplate from "./TrailmapTemplate";

function TrailmapBrowserWallet() {
  return (
    <TrailmapTemplate>
      <h4 className="mt-4">WEB 3.0 TRANSACTIONS</h4>
      <p>
        We believe in bringing more people to the dingocoin ecosystem to be a
        part of this very liberal and decentralised project through utility and
        adoption. With our recent Dingocoin browser wallet, we have successfully
        penetrated the Web 3.0 frontier. You can now hold and send Dingocoin
        completely in your web browser. Our initiatives are aimed to bring ease
        for developers to integrate Dingocoin into their web platforms - be it
        games, exchanges, NFT platforms, or retailers - and bring down
        development time.
      </p>
      <h4 className="mt-4">DEVELOPMENT TOOLS</h4>
      <p>
        One such problem that developer faces is a ready to integrate trustless
        approach to process dingocoin transactions on their own infrastructures.
        The Dingocoin browser wallet is such a utility aimed to fullfill this
        gap by providing API solutions that can be setup quicky to accept
        dingocoin payments to any web platform. These are already used in our
        fully-functional{" "}
        <a href="/trailmap/nftplatform" className="simple-link">
          Dingocoin NFT platform
        </a>
        . We are extremely close to releasing official documentation for our
        browser wallet. This will spark off an ecosystem of rapid deployment for
        developers to integrate the browser wallet into their applications.
      </p>
    </TrailmapTemplate>
  );
}

export default TrailmapBrowserWallet;
