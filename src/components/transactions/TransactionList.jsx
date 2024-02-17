import { useGlobalState } from "../../context/GlobalState"
import TransactionItem from "./TransactionItem"


const TransactionList = () => {
    const {transactions} = useGlobalState()
  return (
    <>
   
      <ul className="mt-10">
      {
      
      transactions.map(transaction => (
            <TransactionItem transaction={transaction} key={transaction.id} />


      ))
      
      }
      </ul>
      

    </>
  )
}

export default TransactionList
