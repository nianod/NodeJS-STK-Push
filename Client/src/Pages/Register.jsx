import { useState } from "react"
import { Link } from 'react-router-dom'

const Register = () => {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleRegister = (e) => {
      setLoading(true)
      e.preventDefault()
    }

  return (
    <div className=" flex align-center justify-center">
      <form className="register max-w-xs w-full flex flex-col gap-1 p-3 mt-15 shadow-md rounded-md bg-white">
        <h1 className="font-bold text-center text-2xl ">Register</h1>
        <label className="block font-semibold">Full Name:</label>
        <input
         className=" border-[1.5px] rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2596be]"
         type="text"
         placeholder="Enter your Full name"
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)} 
        />
        <label className="block font-semibold">Email:</label>
        <input
         className=" border-[1.5px] rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2596be]"
         type="email"
         placeholder="Enter your email"
         value={email}
         onChange={(e) => setEmail(e.target.value)} 
        />
        <label className="block font-semibold">Password:</label>
        <input
         className=" border-[1.5px] rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2596be]"
         type="password"
         placeholder="Enter your password"
         value={password1}
         onChange={(e) => setPassword1(e.target.value)} 
        />
        <label className="block font-semibold">Confirm Password:</label>
        <input
         className=" border-[1.5px] rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2596be]"
         type="password"
         placeholder="Confirm your password"
         value={password2}
         onChange={(e) => setPassword2(e.target.value)} 
        />
        {error && (
          <p className="text-red-600 flex justify-center">{error}</p>
        )}
        <div className="mt-3">
          <button
            onClick={handleRegister}
            className={`bg-[#2596be] w-full align-center p-2 rounded-xl font-bold text-xl text-white hover:bg-[#2e6478] ${loading ? "cursor-not-allowed bg-[#206178]":"cursor-pointer"}`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"} 
          </button>
        </div>
        <p className="text-gray-600">
          Do you have an Account?
           <Link
            to={'/login'}
           >
            <span className="text-blue-600">Login</span>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register
