import "./App.scss";
import React from "react";

// Controls.
import {
  DropdownButton,
  Dropdown,
  Table,
  Accordion,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import CustomDivider from "./CustomDivider.jsx";

// Assets.
import DingocoinLogo from "./assets/img/dingocoin.png";

import BigInt from "big-integer";

const STAKE_REWARD = 1000000; // 2 Million.
const STAKE_INTERVAL = 10000; // 10k blocks.

function Stake() {
  async function get(link) {
    const controller = new AbortController();
    return (
      await fetch(link, {
        withCredentials: true,
        signal: controller.signal,
      })
    ).json();
  }

  const [currentList, setCurrentList] = React.useState([]);
  const [nextList, setNextList] = React.useState([]);
  const [terminalBlocks, setTerminalBlocks] = React.useState([]);
  const [view, setView] = React.useState("next");
  React.useEffect(() => {
    (async () => {
      const stakedCurrent = Object.entries(
        await get("https://stats.dingocoin.org:8443/stake/current")
      ).map((x) => {
        const a = parseInt(BigInt(x[1]) / BigInt("100000000"));
        return { address: x[0], amount: a };
      });
      stakedCurrent.sort((a, b) => b.amount - a.amount);
      let currentSubTotal = 0;
      for (let i = 3; i < stakedCurrent.length; i++) {
        currentSubTotal += stakedCurrent[i].amount;
      }
      for (let i = 0; i < stakedCurrent.length; i++) {
        stakedCurrent[i].rank = i + 1;
        stakedCurrent[i].earn =
          i === 0
            ? 500000
            : i === 1
            ? 400000
            : i === 2
            ? 350000
            : (stakedCurrent[i].amount * STAKE_REWARD) / currentSubTotal;
      }
      setCurrentList(stakedCurrent);

      const stakedAmount = await get(
        "https://stats.dingocoin.org:8443/stake/amount"
      );
      const stakedScore = await get(
        "https://stats.dingocoin.org:8443/stake/score"
      );
      const staked = [];
      for (const k of Object.keys(stakedAmount)) {
        staked.push({
          address: k,
          amount: parseInt(BigInt(stakedAmount[k]) / BigInt("100000000")),
          score: parseInt(BigInt(stakedScore[k])),
        });
      }
      staked.sort((a, b) => b.amount - a.amount);
      for (let i = 0; i < staked.length; i++) {
        staked[i].rank = i + 1;
      }
      setNextList(staked);

      const dingoStats = await get(
        "https://stats.dingocoin.org:8443/stats/dingo"
      );
      setTerminalBlocks(STAKE_INTERVAL - (dingoStats.height % STAKE_INTERVAL));
    })();
  }, []);

  return (
    <div>
      <section className="section-a" id="airdrop">
        <h2>STAKE DINGOCOINS</h2>
        <CustomDivider />
        <Container>
          <Row>
            <p>Simply #KeepYourDingoInYourPants and get rewarded.</p>
          </Row>
          <Row xs={1} md={1} lg={1} className="mb-4 mt-3">
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>How to participate?</h5>
                  </Accordion.Header>
                  <Accordion.Body className="social-faucet-instructions">
                    <p>
                      Every round, a fixed reward pool is split evenly based on
                      how many staking points each address earns.
                    </p>
                    <p>
                      1) Deposit <b>an exact amount</b> of Dingocoins (no more,
                      no less; see (3)) to any address of yours. Earn points
                      depending on the exact amount deposited:
                      <ul>
                        <li>
                          <b>100,000 Dingocoins:</b> 1 point.
                        </li>
                        <li>
                          <b>1,000,000 Dingocoins:</b> 5 points.
                        </li>
                        <li>
                          <b>10,000,000 Dingocoins:</b> 10 points.
                        </li>
                        <li>
                          <b>100,000,000 Dingocoins:</b> 50 points.
                        </li>
                        <li>
                          <b>1,000,000,000 Dingocoins:</b> 100 points.
                        </li>
                      </ul>
                    </p>
                    <p>2) Don't spend from that address.</p>
                    <p>
                      3) Repeat for as many deposits as you would like. You can
                      mix the deposit sizes. Make sure not to spend from your
                      staking address (Tip: use a separate wallet for staked
                      funds).
                    </p>
                    <p>
                      4) Wait for the end of the next round (every 10,000
                      blocks) and rewards will be automatically sent to your
                      staking address.
                    </p>
                    <br />
                    <p>
                      * Your funds need to be deposited before the start of each
                      round for it to be counted for that round.
                    </p>
                    <p>
                      * Deposited funds and rewards carry over to subsequent
                      rounds{" "}
                      <i>as long as you keep your Dingocoins in your pants</i>.
                    </p>
                    <p>
                      * Spending from your staking address will invalidate all
                      staked funds, and you will need to re-deposit all funds.
                      You will also forfeit your earnings for the round.
                    </p>
                    <p>
                      * Reward pool is subject to changes between every round.
                    </p>
                    <p>
                      * Rewards take up to 48 hours to dispense after each
                      round.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <DropdownButton
                title={view === "next" ? "Next Round" : "Current Round"}
                className="mb-2"
              >
                <Dropdown.Item
                  onClick={() => {
                    setView("current");
                  }}
                >
                  Current Round
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setView("next");
                  }}
                >
                  Next Round
                </Dropdown.Item>
              </DropdownButton>
              <div className="social-faucet-board">
                {view === "current" && (
                  <Table
                    className="social-faucet-table"
                    striped
                    bordered
                    responsive
                  >
                    <thead>
                      <tr>
                        <th className="col-1">#</th>
                        <th className="col-5">Address</th>
                        <th className="col-3 table-dingo">
                          <span>
                            <img alt="" src={DingocoinLogo} />
                          </span>
                          &nbsp;Staked
                        </th>
                        <th className="col-3 table-dingo">
                          <span>
                            <img alt="" src={DingocoinLogo} />
                          </span>
                          &nbsp;To Earn
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentList.map((x) => (
                        <tr
                          key={x.rank}
                          className={
                            x.rank === 1
                              ? "gold"
                              : x.rank === 2
                              ? "silver"
                              : x.rank === 3
                              ? "bronze"
                              : ""
                          }
                        >
                          <td className="col-1">{x.rank}</td>
                          <td className="col-5">{x.address}</td>
                          <td className="col-3">{x.amount.toLocaleString()}</td>
                          <td className="col-3">
                            {Math.floor(x.earn).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="2" className="col-7">
                          <b>Total</b>
                        </td>
                        <td className="col-3">
                          <b>
                            {currentList
                              .map((x) => x.amount)
                              .reduce((a, b) => a + b, 0)
                              .toLocaleString()}
                          </b>
                        </td>
                        <td className="col-3">
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                )}
                {view === "next" && (
                  <Table
                    className="social-faucet-table"
                    striped
                    bordered
                    responsive
                  >
                    <thead>
                      <tr>
                        <th className="col-1">#</th>
                        <th className="col-5">Address</th>
                        <th className="col-3 table-dingo">
                          <span>
                            <img alt="" src={DingocoinLogo} />
                          </span>
                          &nbsp;Staked
                        </th>
                        <th className="col-3 table-dingo">
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {nextList.map((x) => (
                        <tr key={x.rank}>
                          <td className="col-1">{x.rank}</td>
                          <td className="col-5">{x.address}</td>
                          <td className="col-3">{x.amount.toLocaleString()}</td>
                          <td className="col-3">{x.score.toLocaleString()}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="2" className="col-7">
                          <b>Total</b>
                        </td>
                        <td className="col-3">
                          <b>
                            {nextList
                              .map((x) => x.amount)
                              .reduce((a, b) => a + b, 0)
                              .toLocaleString()}
                          </b>
                        </td>
                        <td className="col-3">
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            {view === "current" && (
              <p className="mt-4">
                Current round ending in <b>{terminalBlocks} blocks</b>.<br />
                1st place reward: <b>{(500000).toLocaleString()} Dingocoins</b>.
                <br />
                2nd place reward: <b>{(400000).toLocaleString()} Dingocoins</b>.
                <br />
                3rd place reward: <b>{(350000).toLocaleString()} Dingocoins</b>.
                <br />
                Remaining places: {(1000000).toLocaleString()} Dingocoins split
                evenly based on staked amount.
              </p>
            )}
            {view === "next" && (
              <p className="mt-4">
                Next round starting in <b>{terminalBlocks} blocks</b>.<br />
                Reward pool: <b>{(2000000).toLocaleString()} Dingocoins</b>.
              </p>
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Stake;
