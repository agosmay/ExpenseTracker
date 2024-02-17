import moneySaverImage from "./img/moneySaver.png"

const AlternativeChart = () => {
  return (
    <div>
      <img src={moneySaverImage} alt="Money Saver" className="rounded-full border-4 border-pink-500 p-2 w-50 h-50 animate-pulse" />
      
        <div className="text-center text-gray-500 italic text-lg mt-4 animate-pulse">
          You haven't added anything yet
        </div>
      
     </div>
  )
}

export default AlternativeChart

