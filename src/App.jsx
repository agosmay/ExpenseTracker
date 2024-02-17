import { GlobalProvider } from "./context/GlobalState";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";

const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white flex justify-center items-center">
        <div>
        <div className="w full p-10 rounded-lg flex gap-16">
          <div>
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <div className="flex flex-col flex-1">
            <div className="w-96">
            <ExpenseChart />
            </div>
            
            <TransactionList />
          
          </div>
        </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;








