import React from "react";
import TrailmapTemplate from "./TrailmapTemplate";
import { Image } from "react-bootstrap";
import DingoTipImage from "./assets/img/dingotip.svg";

function TrailmapDingoTip() {
  return (
    <TrailmapTemplate>
      <Image
        className="mt-4 mb-2"
        src={DingoTipImage}
        style={{ width: "100%", height: "auto" }}
      />
      <h4 className="mt-4">DINGOTIP</h4>
      <p>
        DingoTip is an app to effortlessly tip/pay to a phone number or email.
        Want to tip or pay someone? Did you receive great service? Want to
        strike up a conversation? Go right ahead, transfer value to someone's
        phone number or email.
      </p>
      <p>
        If Dingocoin is sent to a new user, the user is notified by phone or
        email, and the Dingocoin are ready when he or signs up to DingoTip. If
        the new user doesn't sign up, the Dingocoin are returned to the sender.
        DingoTip is non-custodial, meaning you are the only one holding the keys
        to the Dingocoin you own.
      </p>
      <p>
        At the initial launch, DingoTip will only support Dingocoin, but support
        for Dogecoin is also planned, as well as a feature to exchange between
        Dogecoin and Dingocoin. In the longer term, DingoTip will also be
        extended to support Fiat deposits and functionality made for Point of
        Sale integration.
      </p>
    </TrailmapTemplate>
  );
}

export default TrailmapDingoTip;
