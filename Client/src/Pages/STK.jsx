import { useState } from "react"

const STK = () => {

    const [phoneNumber, setphoneNumber] = useState('')
    const [amount, setAmount] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const pay = (event) => {
        event.preventDefault()
        setLoading(true)

    if (!phoneNumber || !amount) {
       setError("All Fields required")
       setLoading(false)
       return
    }

    if (phoneNumber.length < 10) {
      setError("Please enter a valid number")
      setLoading(false)
      return
    }

    if(parseFloat(amount) < 10) {
        setError('Minimum amount is 10')
        setLoading(false)
        return
    }

    //Handle Pay Logic
        setError("")
    }

  return (
    <div className=" flex align-center justify-center">
      <form className="register max-w-xs w-full flex flex-col gap-1 p-3 mt-15 shadow-md rounded-md bge">
        <div className="bg-amber-50">
        <h1 className=" font-bold text-center text-2xl mb-5">Buy Arnold Coffee</h1>
        </div>
        <label className="block font-semibold">Enter your phone number:</label>
        <input
         className=" border-[1px] rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2596be]"
         type="number"
         placeholder="Number to Pay"
         value={phoneNumber}
         onChange={(e) => setphoneNumber(e.target.value)} 
         required
        />
        <label className="block font-semibold mt-5">Amount to pay:</label>
        <input
         className=" border-[1px] rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2596be]"
         type="number"
         placeholder="Amount to pay (min 10)"
         value={amount}
         onChange={(e) => setAmount(e.target.value)} 
         required
        />
        {error && (
          <p className="text-red-600 flex justify-center font-semibold">{error}</p>
        )}
        <div className="mt-3 m-auto">
        <button
           className={`relative px-6 py-3 font-semibold border-2 border-black overflow-hidden group rounded ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
           onSubmit={pay}  
        >
          <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
          <span className="relative z-10 text-black group-hover:text-white transition-colors duration-400">
            {loading ? "Processing..." : "Make Payment"}
          </span>
        </button>
        </div>
      </form>
    </div>
  )
}

export default STK
