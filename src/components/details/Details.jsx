import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { Loading } from "../../App.styles";
import { PageContainer, Background } from "../home/Home.styles";
import { Title } from "../stocks/Stocks.styles";
import {
  DetailsChartContainer,
  Time,
  TimeContainer,
  DetailsText,
  DetailsSmallText,
} from "./Details.styles";

export const Added = (
  <i
    className="fas fa-bookmark"
    aria-hidden="true"
    style={{ color: "#dabafd" }}
  ></i>
);

export const Add = (
  <i
    className="far fa-bookmark"
    aria-hidden="true"
    style={{ color: "#dabafd" }}
  ></i>
);

const Details = () => {
  const {
    details,
    detailsChart,
    addPortfolio,
    portfolio,
    getDetailsChart,
    activeIndex,
    changeIndex,
    isTablet,
  } = useContext(FinanceContext);

  return (
    <>
      {detailsChart[0] ? (
        <>
          <Background />
          <PageContainer>
            <Title>
              {details.symbol}
              <span
                onClick={() => addPortfolio(details)}
                style={{ marginLeft: "10px" }}
              >
                {portfolio.some(stock => stock.symbol === details.symbol)
                  ? Added
                  : Add}
              </span>
            </Title>
            <DetailsChartContainer>
              <TimeContainer>
                <Time
                  onClick={() => {
                    getDetailsChart("5min");
                    changeIndex(0);
                  }}
                  className={activeIndex === 0 ? "clicked" : null}
                >
                  5M
                </Time>
                <Time
                  onClick={() => {
                    getDetailsChart("15min");
                    changeIndex(1);
                  }}
                  className={activeIndex === 1 ? "clicked" : null}
                >
                  15M
                </Time>
                <Time
                  onClick={() => {
                    getDetailsChart("30min");
                    changeIndex(2);
                  }}
                  className={activeIndex === 2 ? "clicked" : null}
                >
                  30M
                </Time>
                <Time
                  onClick={() => {
                    getDetailsChart("1hour");
                    changeIndex(3);
                  }}
                  className={activeIndex === 3 ? "clicked" : null}
                >
                  1H
                </Time>
              </TimeContainer>

              <ResponsiveContainer>
                {!isTablet ? (
                  <LineChart
                    data={detailsChart[0]}
                    margin={{ top: 20, right: 0, left: 0, bottom: 40 }}
                  >
                    <Line
                      type="monotone"
                      dataKey="close"
                      stroke="#1d2d44"
                      dot={false}
                    />
                  </LineChart>
                ) : (
                  <LineChart
                    data={detailsChart[0]}
                    margin={{ top: 20, right: 0, left: 0, bottom: 40 }}
                  >
                    <Line
                      type="monotone"
                      dataKey="close"
                      stroke="#1d2d44"
                      dot={false}
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis />
                    <XAxis dataKey="date" />
                    <Tooltip />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </DetailsChartContainer>
            <table>
              <tbody>
                <tr>
                  <td>
                    <DetailsText>Company Name</DetailsText>
                  </td>
                  <td>
                    <DetailsSmallText>
                      {details.profile.companyName}
                    </DetailsSmallText>
                  </td>
                </tr>
                <tr>
                  <td>
                    <DetailsText>Price</DetailsText>
                  </td>
                  <td>
                    <DetailsSmallText>
                      {details.profile.price}
                    </DetailsSmallText>
                  </td>
                </tr>
                <tr>
                  <td>
                    <DetailsText>Change</DetailsText>
                  </td>
                  <td>
                    <DetailsSmallText>
                      {details.profile.changesPercentage.slice(1, -1)}
                    </DetailsSmallText>
                  </td>
                </tr>
                <tr>
                  <td>
                    <DetailsText>Exchange</DetailsText>
                  </td>
                  <td>
                    <DetailsSmallText>
                      {details.profile.exchange}
                    </DetailsSmallText>
                  </td>
                </tr>
                <tr>
                  <td>
                    <DetailsText>Website</DetailsText>
                  </td>
                  <td>
                    {details.profile.website ? (
                      <DetailsSmallText>
                        {details.profile.website}
                      </DetailsSmallText>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  <td>
                    <DetailsText>Description</DetailsText>
                  </td>
                </tr>
              </tbody>
            </table>

            <DetailsSmallText
              style={{ lineHeight: "20px", textAlign: "justify" }}
            >
              {details.profile.description}
            </DetailsSmallText>
          </PageContainer>
        </>
      ) : (
        <>
          <Background />
          <Loading className="details">
            <Title>Loading...</Title>
          </Loading>
        </>
      )}
    </>
  );
};

export default Details;
