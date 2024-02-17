import { useGlobalState } from "../../context/GlobalState";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div>
        <span>${transaction.amount}</span>
        <button className="bg-red-500 text-white px-2 py-1 rounded-md ml-2 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
          
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
