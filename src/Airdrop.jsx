import "./App.scss";
import React from "react";

// Controls.
import {
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Table,
  Accordion,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import CustomDivider from "./CustomDivider.jsx";
import { TwitterTweetEmbed } from "react-twitter-embed";

// Assets.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faRetweet,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import DingocoinLogo from "./assets/img/dingocoin.png";

function Airdrop() {

  async function get(link) {
    const controller = new AbortController();
    return (
      await fetch(link, {
        withCredentials: true,
        signal: controller.signal,
      })
    ).json();
  }

  const [socialFaucetRank, setSocialFaucetRank] = React.useState([]);
  const [socialFaucetHistoryRank, setSocialFaucetHistoryRank] = React.useState(
    []
  );
  const [socialFaucetView, setSocialFaucetView] = React.useState("weekly");
  React.useEffect(() => {
    (async () => {
      // Retireve.
      const { users, metrics, historyMetrics, address } = await get(
        "https://stats.dingocoin.org:8443/socialFaucet"
      );

      // Collate.
      const rank = [];
      for (const userId of Object.keys(metrics)) {
        rank.push({
          name: users[userId].name,
          handle: users[userId].screen_name,
          score: metrics[userId].score,
          likes: metrics[userId].like_count,
          retweets: metrics[userId].retweet_count,
          rank: null,
          address: address[userId],
        });
      }
      rank.sort(
        (a, b) => 0.5 * b.retweets + b.likes - (0.5 * a.retweets + a.likes)
      ); // Sort descending.
      // Add rank index.
      for (let i = 0; i < rank.length; i++) {
        rank[i].rank = i + 1;
      }
      setSocialFaucetRank(rank);

      // Collate history.
      const historyRank = [];
      for (const userId of Object.keys(historyMetrics)) {
        if (userId in users) {
          historyRank.push({
            name: users[userId].name,
            handle: users[userId].screen_name,
            score: historyMetrics[userId].score,
            likes: historyMetrics[userId].like_count,
            retweets: historyMetrics[userId].retweet_count,
            rank: null,
          });
        }
      }
      historyRank.sort(
        (a, b) => 0.5 * b.retweets + b.likes - (0.5 * a.retweets + a.likes)
      ); // Sort descending.
      for (let i = 0; i < historyRank.length; i++) {
        historyRank[i].rank = i + 1;
      }
      setSocialFaucetHistoryRank(historyRank);
    })();
  }, []);

  const [filterQuery, setFilterQuery] = React.useState("");
  const [filterText, setFilterText] = React.useState("");

  React.useEffect(() => {
    const timeOutId = setTimeout(() => setFilterText(filterQuery), 500);
    return () => clearTimeout(timeOutId);
  }, [filterQuery]);

  return (<div>
      <section className="section-a min-height-fill" id="airdrop">
        <h1>WEEKLY AIRDROP</h1>
        <CustomDivider />
        <Container>
          <Row>
            <p>Earn Dingocoins simply by promoting Dingocoin on Twitter.</p>
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
                      Simply post on Twitter advertising Dingocoin. This can be
                      a <b>tweet</b>, a <b>quote-tweet</b>, or a <b>reply</b> to
                      another tweet.
                    </p>
                    <p>In your post, include all of:</p>
                    <ol>
                      <li>
                        a link to <code>dingocoin.org</code>,
                      </li>
                      <li>
                        hashtags <code>#dingocoin</code> and{" "}
                        <code>#weeklyairdrop</code>, and
                      </li>
                      <li>
                        a hashtag with your Dingocoin address (e.g.{" "}
                        <code>#DQBx7G4aozdqYFCv2dU4kacaEcPzwg8dkZ</code>). Your
                        rewards will be sent here.
                      </li>
                    </ol>
                    <p>
                      Retweet/quote-tweet such a post of someone else for
                      additional rewards (sent to your latest address, if any).
                    </p>
                    <p>
                      Below is an example tweet:
                      <TwitterTweetEmbed
                        tweetId={"1470096073809084429"}
                        options={{ height: 700 }}
                      />
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <Accordion className="mt-2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Rewards and payouts</h5>
                  </Accordion.Header>
                  <Accordion.Body className="social-faucet-instructions">
                    <p>Get rewarded based on your activity:</p>
                    <ul>
                      <li>
                        1 like on your post (including liking your own) = 1,000
                        Dingocoin
                      </li>
                      <li>
                        1 retweet/quote-retweet on your post = 500 Dingocoin
                      </li>
                      <li>
                        Retweet/quote-retweet someone else's post = 500
                        Dingocoin
                      </li>
                      <li>
                        Retweeting/quote-retweeting your own post = no reward
                      </li>
                    </ul>
                    <p>
                      * Each user can earn up to 20,000 Dingocoins per week. Top
                      3 users for the week can earn up to 100,000 for that week!
                    </p>
                    <p>
                      * Please ensure that you have a tweet in the current week
                      associating your Twitter account to a Dingocoin reward
                      address.
                    </p>
                    <p>
                      * Your posts might be filtered away by Twitter if your
                      account or activity is deemed too obscure or spammy.
                      Please try increasing the number of followers, to wait for
                      your account to mature, and/or to not spam too blatantly.
                    </p>
                    <p>
                      * The leaderboard is updated at the start of every hour.
                      Rewards are paid out some time on Sunday, UTC. The
                      leaderboard also resets at that time. Only retweets and
                      likes of tweets in the current week are scored.
                    </p>
                    <p>
                      * Rates are not fixed. May have to adjust in case we fly
                      to the moon.
                    </p>
                    <p>
                      <b>
                        Feeling generous? Fund our weekly airdrop to keep it
                        running :){" "}
                        <code>DTE3TFVBy69od8XaRPVHoDfrucgMFjVzYc</code>
                      </b>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <DropdownButton
                title={
                  socialFaucetView === "all-time"
                    ? "All-time Ranking"
                    : "This Week's Ranking"
                }
                className="mb-2"
              >
                <Dropdown.Item
                  onClick={() => {
                    setSocialFaucetView("all-time");
                  }}
                >
                  All-time Ranking
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSocialFaucetView("weekly");
                  }}
                >
                  This Week's Ranking
                </Dropdown.Item>
              </DropdownButton>
              <div className="social-faucet-board">
                {socialFaucetView === "all-time" && (
                  <Table
                    className="social-faucet-table"
                    striped
                    bordered
                    responsive
                  >
                    <thead>
                      <tr>
                        <th className="col-1">#</th>
                        <th className="col-7">User</th>
                        <th className="col-2">Score</th>
                        <th className="col-1">
                          <FontAwesomeIcon
                            className="faicon"
                            icon={faRetweet}
                          />
                        </th>
                        <th className="col-1">
                          <FontAwesomeIcon className="faicon" icon={faHeart} />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {socialFaucetHistoryRank
                        .filter(
                          (x) =>
                            x.name
                              .toLowerCase()
                              .includes(filterText.toLowerCase()) ||
                            x.handle
                              .toLowerCase()
                              .includes(filterText.toLowerCase())
                        )
                        .map((x) => (
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
                            <td className="col-7">
                              <a
                                href={"https://twitter.com/" + x.handle}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {x.name}
                              </a>
                            </td>
                            <td className="col-2">
                              {(0.5 * x.retweets + x.likes).toFixed(1)}
                            </td>
                            <td className="col-1">
                              {x.retweets.toLocaleString()}
                            </td>
                            <td className="col-1">
                              {x.likes.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      {filterText === "" && (
                        <tr>
                          <td colSpan="2" className="col-7">
                            <b>Total</b>
                          </td>
                          <td className="col-2"></td>
                          <td className="col-1">
                            <b>
                              {socialFaucetHistoryRank
                                .map((x) => x.retweets)
                                .reduce((a, b) => a + b, 0)
                                .toLocaleString()}
                            </b>
                          </td>
                          <td className="col-1">
                            <b>
                              {socialFaucetHistoryRank
                                .map((x) => x.likes)
                                .reduce((a, b) => a + b, 0)
                                .toLocaleString()}
                            </b>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                )}
                {socialFaucetView === "weekly" && (
                  <Table
                    className="social-faucet-table"
                    striped
                    bordered
                    responsive
                  >
                    <thead>
                      <tr>
                        <th className="col-1">#</th>
                        <th className="col-6">User</th>
                        <th className="col-2 table-dingo">
                          <span>
                            <img alt="" src={DingocoinLogo} />
                          </span>
                          &nbsp;Earned
                        </th>
                        <th className="col-1">Score</th>
                        <th className="col-1">
                          <FontAwesomeIcon
                            className="faicon"
                            icon={faRetweet}
                          />
                        </th>
                        <th className="col-1">
                          <FontAwesomeIcon className="faicon" icon={faHeart} />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {socialFaucetRank
                        .filter(
                          (x) =>
                            x.name
                              .toLowerCase()
                              .includes(filterText.toLowerCase()) ||
                            x.handle
                              .toLowerCase()
                              .includes(filterText.toLowerCase())
                        )
                        .map((x) => (
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
                            <td className="col-6">
                              <a
                                href={"https://twitter.com/" + x.handle}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {x.name}
                              </a>
                            </td>
                            {typeof x.address === "undefined" && (
                              <td className="col-2">
                                <strike>
                                  {(x.score * 1000).toLocaleString()}
                                </strike>
                                *
                              </td>
                            )}
                            {typeof x.address !== "undefined" && (
                              <td className="col-2">
                                {(x.score * 1000).toLocaleString()}
                              </td>
                            )}
                            <td className="col-1">
                              {(0.5 * x.retweets + x.likes).toFixed(1)}
                            </td>
                            <td className="col-1">
                              {x.retweets.toLocaleString()}
                            </td>
                            <td className="col-1">
                              {x.likes.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      {filterText === "" && (
                        <tr>
                          <td colSpan="2" className="col-7">
                            <b>Total</b>
                          </td>
                          <td className="col-2">
                            <b>
                              {socialFaucetRank
                                .map((x) => x.score * 1000)
                                .reduce((a, b) => a + b, 0)
                                .toLocaleString()}
                            </b>
                          </td>
                          <td className="col-1"></td>
                          <td className="col-1">
                            <b>
                              {socialFaucetRank
                                .map((x) => x.retweets)
                                .reduce((a, b) => a + b, 0)
                                .toLocaleString()}
                            </b>
                          </td>
                          <td className="col-1">
                            <b>
                              {socialFaucetRank
                                .map((x) => x.likes)
                                .reduce((a, b) => a + b, 0)
                                .toLocaleString()}
                            </b>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                )}
              </div>
              <InputGroup className="mt-0">
                <InputGroup.Text id="basic-addon1">
                  <FontAwesomeIcon className="faicon" icon={faSearch} />
                </InputGroup.Text>
                <FormControl
                  placeholder="Search user/handle..."
                  value={filterQuery}
                  onChange={(event) => setFilterQuery(event.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </section>

  </div>);
};

export default Airdrop;
