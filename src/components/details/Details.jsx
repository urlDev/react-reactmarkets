import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { PageContainer, Background } from "../home/Home.styles";
import { Title } from "../stocks/Stocks.styles";
import {
  DetailsChartContainer,
  Time,
  TimeContainer,
  DetailsText,
  DetailsSmallText,
} from "./Details.styles";

const Details = () => {
  const { details, detailsChart } = useContext(FinanceContext);
  //   const {
  //     price,
  //     companyName,
  //     exchange,
  //     changesPercentage,
  //     description,
  //     ceo,
  //     sector,
  //     website,
  //   } = details[0].profile;
  return (
    <>
      {detailsChart[0] ? (
        <>
          <Background />
          <PageContainer>
            <Title>{details[0].symbol}</Title>
            <DetailsChartContainer>
              <TimeContainer>
                <Time>5M</Time>
                <Time>15M</Time>
                <Time>30M</Time>
                <Time>1H</Time>
              </TimeContainer>

              <ResponsiveContainer>
                <LineChart
                  data={detailsChart[0]}
                  margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
                >
                  <Line
                    type="monotone"
                    dataKey="close"
                    stroke="#1d2d44"
                    dot={false}
                  />
                  {/* <XAxis dataKey="date" />
                  <YAxis /> */}
                </LineChart>
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
                      {details[0].profile.companyName}
                    </DetailsSmallText>
                  </td>
                </tr>
                <tr>
                  <td>
                    <DetailsText>Price</DetailsText>
                  </td>
                  <td>
                    <DetailsSmallText>
                      {details[0].profile.price}
                    </DetailsSmallText>
                  </td>
                </tr>
                <tr>
                  <td>
                    <DetailsText>Change</DetailsText>
                  </td>
                  <td>
                    <DetailsSmallText>
                      {details[0].profile.changesPercentage}
                    </DetailsSmallText>
                  </td>
                </tr>
                <tr>
                  <td>
                    <DetailsText>Exchange</DetailsText>
                  </td>
                  <td>
                    <DetailsSmallText>
                      {details[0].profile.exchange}
                    </DetailsSmallText>
                  </td>
                </tr>
                <tr>
                  <td>
                    <DetailsText>Website</DetailsText>
                  </td>
                  <td>
                    {details[0].profile.website ? (
                      <DetailsSmallText>
                        {details[0].profile.website.slice(11)}
                      </DetailsSmallText>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>

            <DetailsSmallText
              style={{ lineHeight: "20px", textAlign: "justify" }}
            >
              {details[0].profile.description}
            </DetailsSmallText>
          </PageContainer>
        </>
      ) : null}
    </>
  );
};

export default Details;
