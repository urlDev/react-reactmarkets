import React, { useContext, Suspense } from "react";
import { FinanceContext } from "../../Context";

import { Loading } from "../../App.styles";

import { Title, Text } from "../stocks/Stocks.styles";

const DefaultStockComponent = React.lazy(() =>
  import("../defaultStockComponent/DefaultStockComponent")
);

const MostLoser = () => {
  const { mostLoser, mostLoserChart } = useContext(FinanceContext);

  return (
    <>
      <Title>Most Loser</Title>
      {mostLoserChart.length > 9 ? (
        <>
          <Suspense fallback={<Loading>Loading...</Loading>}>
            <DefaultStockComponent
              stock={mostLoser}
              stockChart={mostLoserChart}
            />
          </Suspense>
        </>
      ) : (
        <Loading className="main">
          <Text>Loading...</Text>
        </Loading>
      )}
    </>
  );
};

export default MostLoser;
