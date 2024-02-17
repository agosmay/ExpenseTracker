import { useGlobalState } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item)=> (acc += item) , 0).toFixed(2)

  return (
    <div className="flex justify-between">
      
      <h1 className='text-pink-400 text-xl font-bold'>Your Balance</h1>
      <br />
      <br />
      <h3 className="text-2xl font-bold">${total}</h3>
    </div>
  );
};

export default Balance;
