import React, { useContext, Suspense } from "react";
import { FinanceContext } from "../../Context";

import { Loading } from "../../App.styles";

import { Title, Text } from "../stocks/Stocks.styles";

const DefaultStockComponent = React.lazy(() =>
  import("../defaultStockComponent/DefaultStockComponent")
);

const MostActive = () => {
  const { mostActive, mostActiveChart } = useContext(FinanceContext);

  return (
    <>
      <Title>Most Active</Title>
      {mostActiveChart.length > 9 ? (
        <>
          <Suspense fallback={<Loading>Loading...</Loading>}>
            <DefaultStockComponent
              stock={mostActive}
              stockChart={mostActiveChart}
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

export default MostActive;
