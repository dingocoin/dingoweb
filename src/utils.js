/* global BigInt */

import Web3Utils from "web3-utils";

const toSatoshi = (x) => {
  if (x === null || x === undefined || typeof x !== "string" || x === "") {
    throw new Error("Expected string input");
  }
  return (BigInt(Web3Utils.toWei(x, "gwei")) / 10n).toString();
};

const toLocaleString = (x) => {
  const isNegative = BigInt(x) < 0n;
  if (isNegative) {
    x = -x;
  }
  const integer = BigInt(x).toString();
  return (
    (isNegative ? "-" : "") + `${integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  );
};

const satoshiToLocaleString = (x) => {
  const isNegative = BigInt(x) < 0n;
  if (isNegative) {
    x = -x;
  }
  const integer = (BigInt(x) / 100000000n).toString();
  return (
    (isNegative ? "-" : "") + `${integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  );
};

const post = async (link, data) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 300000);
  return (
    await fetch(link, {
      withCredentials: true,
      method: "POST",
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
};

const get = (link) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 300000);
  return fetch(link, {
    withCredentials: true,
    method: "GET",
    signal: controller.signal,
  });
};

export { toSatoshi, toLocaleString, satoshiToLocaleString, post, get };
