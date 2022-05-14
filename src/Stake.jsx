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

const STAKE_REWARD = 750000; // 2 Million.
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
  const [nextTerminalHeight, setNextTerminalHeight] = React.useState(null);
  const [view, setView] = React.useState("next");
  React.useEffect(() => {
    (async () => {
      const currentStaked = Object.entries(
        await get("https://stats.dingocoin.org:8443/stake/current")
      ).map((x) => {
        return {
          address: x[0],
          amount: parseInt(BigInt(x[1].amount) / BigInt("100000000")),
          score: parseInt(x[1].score),
        };
      });
      currentStaked.sort((a, b) => b.amount - a.amount);
      let currentStakedTotalScore = 0;
      for (let i = 0; i < currentStaked.length; i++) {
        currentStaked[i].rank = i + 1;
        currentStakedTotalScore += currentStaked[i].score;
      }
      for (let i = 0; i < currentStaked.length; i++) {
        currentStaked[i].earn = Math.floor(
          (parseFloat(currentStaked[i].score) * STAKE_REWARD) /
            currentStakedTotalScore
        );
      }
      setCurrentList(currentStaked);

      const staked = Object.entries(
        await get("https://stats.dingocoin.org:8443/stake/next")
      ).map((x) => {
        return {
          address: x[0],
          amount: parseInt(BigInt(x[1].amount) / BigInt("100000000")),
          score: parseInt(x[1].score),
        };
      });
      staked.sort((a, b) => b.amount - a.amount);
      for (let i = 0; i < staked.length; i++) {
        staked[i].rank = i + 1;
      }
      setNextList(staked);

      const dingoStats = await get(
        "https://stats.dingocoin.org:8443/stats/dingo"
      );
      setTerminalBlocks(STAKE_INTERVAL - (dingoStats.height % STAKE_INTERVAL));
      setNextTerminalHeight(
        dingoStats.height +
          STAKE_INTERVAL -
          (dingoStats.height % STAKE_INTERVAL)
      );
    })();
  }, []);

  return (
    <div>
      <section className="section-a min-height-fill" id="airdrop">
        <h1 className="mt-5 text-primary text-center">STAKE DINGOCOINS</h1>
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
                      how many coins you have staked.
                    </p>
                    <p>
                      1) Each round lasts 10K blocks. To earn staking rewards,
                      your coins must be staked for the entire round.
                      <br />
                      2) Stake coins by sending exact multiples of 100,000 DINGO
                      to any address of yours.
                      <br />
                      3) Don't spend from that address until the round ends.
                    </p>
                    <br />
                    <p>
                      FAQ:
                      <br />
                      * Your funds need to be deposited before the start of each
                      round for it to be counted for that round.
                      <br />
                      * Sending N counts of 100,000 DINGO transactions count the
                      same as sending a single (N * 100,000) DINGO transaction.
                      You can use the latter to save time.
                      <br />
                      * Deposited funds carry over to subsequent rounds as long
                      as they are not spent.
                      <br />
                      * Spending from your staking address will invalidate all
                      staked funds, and you will need to re-deposit all funds.
                      You will also forfeit your earnings for the round.
                      <br />
                      * Reward pool is subject to changes between every round.
                      <br />* Rewards take up to 48 hours to dispense after each
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
                        <tr key={x.rank}>
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
                        <td className="col-3"></td>
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
                      </tr>
                    </thead>
                    <tbody>
                      {nextList.map((x) => (
                        <tr key={x.rank}>
                          <td className="col-1">{x.rank}</td>
                          <td className="col-5">{x.address}</td>
                          <td className="col-3">{x.amount.toLocaleString()}</td>
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
                      </tr>
                    </tbody>
                  </Table>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <p className="mt-4">
              Next round starting in: <b>{terminalBlocks} blocks</b>.<br />
              Reward pool: <b>{(STAKE_REWARD).toLocaleString()} Dingocoins</b>.
            </p>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Stake;
