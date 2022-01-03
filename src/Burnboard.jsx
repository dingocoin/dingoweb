import React from "react";
import {
  Table,
  Accordion,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import CustomDivider from "./CustomDivider.jsx";

function Burnboard() {

  async function get(link) {
    const controller = new AbortController();
    return (
      await fetch(link, {
        withCredentials: true,
        signal: controller.signal,
      })
    ).json();
  }

  const [burnBoardList, setBurnBoardList] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const burnList = await get("https://stats.dingocoin.org:8443/burnBoard");
      burnList.sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
      for (let i = 0; i < burnList.length; i++) {
        burnList[i].rank = i + 1;
      }
      setBurnBoardList(burnList);
    })();
  }, []);

  return (
    <section className="section-a" id="burnboard">
      <h2>BURNBOARD</h2>
      <CustomDivider />
      <Container>
        <Row>
          <Col>
            <p>
              Voluntarily burn your Dingocoins for fun.
              <br />
              Rise to the top <i>because you can</i>.<br />
              <i>The ultimate answer to "but do you have burn mechanics?"</i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h5>How to participate?</h5>
                </Accordion.Header>
                <Accordion.Body className="social-faucet-instructions">
                  <Container>
                    <Row>
                      <Col>
                        <p>
                          <b>Burning without a message</b>
                        </p>
                        <p>
                          To burn your coins without leaving a message, simply
                          send your coins to our burn address,{" "}
                          <code>DMuchKingDingoSuchWi1dDogexxboXbKD</code>
                        </p>
                        <p>
                          <b>Burning with a message</b>
                        </p>
                        <p>
                          Leaving a message is trickier. You need to manually
                          sign and send a special transaction containing the
                          message, as follows:
                        </p>
                        <p>
                          1) Open up the "Debug window" in your Dingocoin wallet
                          and go to the "Console".
                        </p>
                        <p>
                          2) Prepare the transaction: Run{" "}
                          <code>
                            createrawtransaction []{" "}
                            {
                              '"{\\"DMuchKingDingoSuchWi1dDogexxboXbKD\\": XXXX, \\"data\\":\\"YYYY\\"}"'
                            }
                          </code>{" "}
                          making sure to:
                          <ul>
                            <li>
                              replace <code>XXXX</code> with the amount you want
                              to burn;
                            </li>
                            <li>
                              replace <code>YYYY</code> with a hex-encoding (
                              <a
                                href="https://www.online-toolz.com/tools/text-hex-convertor.php"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <u>convert here</u>
                              </a>
                              ) of your ASCII text message. Your text message
                              should have at most 75 characters.
                            </li>
                          </ul>
                        </p>
                        <p>
                          3) Fund the transaction: Take the hex output of (2)
                          and run{" "}
                          <code>fundrawtransaction HEX-FROM-STEP-2</code>
                        </p>
                        <p>
                          4) Sign the transaction: Take the hex output of (3)
                          and run{" "}
                          <code>signrawtransaction HEX-FROM-STEP-3</code>
                        </p>
                        <p>
                          5) Send the transaction: Take the hex output of (4)
                          and run{" "}
                          <code>sendrawtransaction HEX-FROM-STEP-4</code>
                        </p>
                        <p>
                          These steps burn message and your coins{" "}
                          <i>permanently</i> onto Dingocoin's mainnet. Your burn
                          should appear on this board within the next 15
                          minutes.
                        </p>
                        <p>
                          <b>Can anyone steal the burned coins?</b>
                        </p>
                        <p>
                          The burn address was constructed arbitrarily without a
                          private key, with nothing up our sleeves. Read what it
                          says! The probability of anyone randomly generating
                          the private key to this address is very near zero, so
                          it is almost impossible for anyone to ever be able to
                          claim the burned coins.
                          <br />
                          In particular, we used{" "}
                          <a
                            href="https://github.com/joeuhren/generic-unspendable"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <u>this tool</u>
                          </a>{" "}
                          with arguments{" "}
                          <code>
                            ./unspendable.py D MuchKingDingoSuchWi1dDogexx
                          </code>
                          . You can go ahead to regenerate this burn address in
                          the same way for verification.
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Burnboard</h3>
            <Table className="social-faucet-table" striped bordered responsive>
              <thead>
                <tr>
                  <th className="col-2">#</th>
                  <th className="col-5">Burn Amount</th>
                  <th className="col-5">Message</th>
                </tr>
              </thead>
              <tbody>
                {burnBoardList.map((x) => (
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
                    <td className="col-2">{x.rank}</td>
                    <td className="col-5">
                      {parseFloat(x.amount).toLocaleString()}
                    </td>
                    <td className="col-5">
                      {x.data === null
                        ? ""
                        : Buffer.from(x.data, "hex").toString("ascii")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Burnboard;
