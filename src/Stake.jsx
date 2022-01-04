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

      let currentTotal = 0;
      const stakedCurrent = Object.entries(
        await get("https://stats.dingocoin.org:8443/stake/current")
      ).map((x) => {
        const a = parseInt(BigInt(x[1]) / BigInt('100000000'));
        currentTotal += a;
        return { address: x[0], amount: a };
      });
      stakedCurrent.sort((a, b) => b.value - a.value);
      for (let i = 0; i < stakedCurrent.length; i++) {
        stakedCurrent[i].rank = i + 1;
        stakedCurrent[i].earn = stakedCurrent[i].amount * STAKE_REWARD / currentTotal;
      }
      setCurrentList(stakedCurrent);

      const stakedNext = Object.entries(
        await get("https://stats.dingocoin.org:8443/stake/current")
      ).map((x) => {
        return { address: x[0], amount: parseInt(BigInt(x[1]) / BigInt('100000000')) };
      });
      stakedNext.sort((a, b) => b.value - a.value);
      for (let i = 0; i < stakedNext.length; i++) {
        stakedNext[i].rank = i + 1;
      }
      setNextList(stakedNext);

      const dingoStats = await get(
        "https://stats.dingocoin.org:8443/stats/dingo"
      );
      setTerminalBlocks(STAKE_INTERVAL - dingoStats.height % STAKE_INTERVAL);

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
                    <p>A fixed reward pool is allocated for every interval (10,000 blocks). You earn proportional to how much you stake.</p>
                    <p>1) Send <b>exactly 1,000,000</b> Dingocoins (no more, no less; see (3)) to any address of yours.</p>
                    <p>2) Don't spend from that address.</p>
                    <p>3) Repeat for as many 1,000,000 deposits as you would like. Make sure not to spend from your staking address (Tip: use a separate wallet for staked funds).</p>
                    <p>4) Wait for the end of the next interval and rewards will be automatically sent to your staking address (these rewards compound toward the next interval).</p>
                    <br/>
                    <p>* Your funds need to be deposited before the start of each interval for it to be counted for that interval.</p>
                    <p>* Deposited funds carry over to subsequent intervals <i>as long as you keep your Dingocoins in your pants</i>.</p>
                    <p>* Spending from your staking address will invalidate all staked funds, and you will need to re-deposit all funds. You will also forfeit your earnings for the week.</p>
                    <p>* Reward pool is subject to weekly changes weekly.</p>
                    <p>* Rewards take up to 48 hours to dispense after each interval.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <DropdownButton
                title={view === "next" ? "Next Interval" : "Current Interval"}
                className="mb-2"
              >
                <Dropdown.Item
                  onClick={() => {
                    setView("current");
                  }}
                >
                  Current Interval
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setView("next");
                  }}
                >
                  Next Interval
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
                        <th className="col-3">Staked</th>
                        <th className="col-3">To Earn</th>
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
                          <td className="col-3">{Math.floor(x.earn).toLocaleString()}</td>
                        </tr>
                      ))}
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
                        <th className="col-7">Address</th>
                        <th className="col-4">Staked</th>
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
                          <td className="col-7">{x.address}</td>
                          <td className="col-4">{x.amount.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <p>Current interval reward pool: <b>{STAKE_REWARD.toLocaleString()} Dingocoins</b>.<br/>Interval ending in <b>{terminalBlocks} blocks</b>.</p>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Stake;
