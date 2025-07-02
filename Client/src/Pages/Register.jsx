import { useState } from "react"

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
  return (
    <div className="">
      <form className="max-w-md flex flex-col align-center justify-center">
        <h1>Register</h1>
        <label className="block">First Name</label>
        <input
         className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
         type="text"
         placeholder="Enter your First name"
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)} 
        />
        <label className="block">Second Name</label>
        <input
         className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
         type="text"
         placeholder="Enter your second name"
         value={secondName}
         onChange={(e) => setSecondName(e.target.value)} 
        />
        <label className="block">Email</label>
        <input
         className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
         type="email"
         placeholder="Enter your email"
         value={email}
         onChange={(e) => setEmail(e.target.value)} 
        />
        <label className="block">Password</label>
        <input
         className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
         type="password"
         placeholder="Enter your password"
         value={password1}
         onChange={(e) => setPassword1(e.target.value)} 
        />
        <label className="block">Confirm Password</label>
        <input
         className="border p-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
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
