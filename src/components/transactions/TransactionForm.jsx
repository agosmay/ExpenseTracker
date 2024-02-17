import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

const TransactionForm = () => {
  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.length && amount.length >= 1) {
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: +amount,
      });
    }

    setDescription("");
    setAmount("");
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a description"
          onChange={handleDescription}
          value={description}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <input
          type="number"
          step="0.01"
          onChange={handleAmount}
          placeholder="Enter an amount"
          value={amount}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;