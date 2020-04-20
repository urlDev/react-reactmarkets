import React, { useContext, Suspense } from "react";
import { FinanceContext } from "../../Context";

import { Loading } from "../../App.styles";

import { Text, Title } from "../stocks/Stocks.styles";

const DefaultStockComponent = React.lazy(() =>
  import("../defaultStockComponent/DefaultStockComponent")
);

const MostGainer = () => {
  const { mostGainer, mostGainerChart } = useContext(FinanceContext);

  return (
    <>
      <Title>Most Gainer</Title>
      {mostGainerChart.length > 9 ? (
        <>
          <Suspense fallback={<Loading>Loading...</Loading>}>
            <DefaultStockComponent
              stock={mostGainer}
              stockChart={mostGainerChart}
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

export default MostGainer;
