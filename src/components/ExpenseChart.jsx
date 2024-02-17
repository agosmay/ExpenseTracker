import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";
import AlternativeChart from "./AlternativeChart";

const ExpenseChart = () => {
  const { transactions } = useGlobalState();

  if (transactions.length === 0) {
    return <AlternativeChart />;
  }

  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncome = transactions.filter(transaction => transaction.amount > 0).reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenses = Math.abs(transactions.filter(transaction => transaction.amount < 0).reduce((acc, transaction) => acc + transaction.amount, 0));

  const totalExpensesPercentage = totalIncome === 0 ? 0 : Math.round((totalExpenses / totalIncome) * 100);
  const totalIncomePercentage = 100 - totalExpensesPercentage;

  return (
    <>
      <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
          { x: "Expenses", y: totalExpensesPercentage },
          { x: "Incomes", y: totalIncomePercentage },
        ]}
        animate={{
          duration: 2000,
        }}
        labels={({ datum }) => `${datum.x} ${datum.y}% `}
        labelComponent={<VictoryLabel angle={90} style={{ fill: "white" }} />}
      />

      {totalIncome === 0 ? null : (
        <div>
          <h3 className='text-pink-400 text-xl font-bold'>History</h3>
        </div>
      )}

      
    </>
  );
};

export default ExpenseChart;
