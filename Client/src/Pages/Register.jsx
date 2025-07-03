import { useState } from "react"

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
  return (
    <div className="flex align-center justify-center">
      <form className="max-w-xs w-full flex flex-col gap-1 p-3 mt-15 shadow-md rounded-md bg-white">
        <h1 className="font-bold text-center text-2xl ">Register</h1>
        <label className="block font-semibold">First Name:</label>
        <input
         className="border-[1.5px] rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2596be]"
         type="text"
         placeholder="Enter your First name"
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)} 
        />
        <label className="block font-semibold">Second Name:</label>
        <input
         className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2596be]"
         type="text"
         placeholder="Enter your second name"
         value={secondName}
         onChange={(e) => setSecondName(e.target.value)} 
        />
        <label className="block font-semibold">Email:</label>
        <input
         className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2596be]"
         type="email"
         placeholder="Enter your email"
         value={email}
         onChange={(e) => setEmail(e.target.value)} 
        />
        <label className="block font-semibold">Password:</label>
        <input
         className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2596be]"
         type="password"
         placeholder="Enter your password"
         value={password1}
         onChange={(e) => setPassword1(e.target.value)} 
        />
        <label className="block font-semibold">Confirm Password:</label>
        <input
         className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2596be]"
         type="password"
         placeholder="Confirm your password"
         value={password2}
         onChange={(e) => setPassword2(e.target.value)} 
        />
      </form>
    </div>
  )
}

export default Register
