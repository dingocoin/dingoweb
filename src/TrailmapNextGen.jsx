import React from "react";
import TrailmapTemplate from "./TrailmapTemplate";

function TrailmapNextGen() {
  return (
    <TrailmapTemplate>
      <h4 className="mt-4">DINGOCOIN NEXTGEN</h4>
      <p>
        Dingocoin NextGen is a framework that has revolutionized crypto
        applications by decoupling user operations from blockchain interactions.
        In Dingocoin NextGen, users interact with NextGen applications without
        needing to download an entire copy of the blockchain. At the same time,
        they maintain full custody and security of their private keys, without
        ever revealing them to NextGen applications.
      </p>
      <p>
        With Dingocoin NextGen, we have produced tools and applications never
        seen before in the realm of similar coins. Our{" "}
        <a href="/trailmap/browserwallet" className="simple-link">
          Dingocoin browser wallet
        </a>{" "}
        lets you hold and send Dingocoins entirely in your browser, and requires
        less than a minute to setup. Our{" "}
        <a href="/trailmap/nftplatform" className="simple-link">
          Dingocoin NFT platform
        </a>{" "}
        interacts with the browser wallet, running an <i>entire</i> NFT trading
        platform on-chain without users ever having to leave their browser.
      </p>
      <p>
        Dingocoin NextGen marks a turning point in our development methodology.
        With NextGen, users will be able to use Dingocoin anywhere for anything,
        without all the heavy lifting required in other coins. NextGen will be a
        core focus of our working projects in the coming months. These projects
        will ultimately build a solid foundation toward adoption and utilization
        of Dingocoin, accompanied by throughput of unprecedented scale.
      </p>
      <h4 className="mt-4">NEXTGENLIB</h4>
      <p>
        Dingocoin's NextGenLib, currently in the works, will be a library that
        will allow anyone to operate easily within the NextGen framework. This
        will be the first step towards making it possible for mass adoption of
        dingocoin among developers and professionals from different disciplines.
        It can help keep track of a wallet, send and receive transactions
        without the need for a local copy of the blockchain. It will also have a
        number of other advanced functions.
      </p>
    </TrailmapTemplate>
  );
}

export default TrailmapNextGen;
