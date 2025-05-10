import React, { useState, useContext } from 'react'
import logo from '../assets/images/logonameblack.png'  
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'



const UserSignup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

  const navigate = useNavigate()



  const { user, setUser } = useContext(UserDataContext)




  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')

  }
  return (
    <div>
<div className="min-h-screen flex flex-col justify-between p-6 sm:p-8 md:p-12 bg-white">
  <div className="w-full max-w-xl mx-auto">
    <img className="w-16 mb-10" src={logo} alt="Logo" />

    <form onSubmit={submitHandler} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">What's your name</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            required
            className="bg-gray-100 w-full rounded-lg px-4 py-2 border text-lg placeholder:text-base"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            required
            className="bg-gray-100 w-full rounded-lg px-4 py-2 border text-lg placeholder:text-base"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 w-full rounded-lg px-4 py-2 border text-lg placeholder:text-base"
          type="email"
          placeholder="email@example.com"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-100 w-full rounded-lg px-4 py-2 border text-lg placeholder:text-base"
          type="password"
          placeholder="password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white text-lg font-semibold py-3 rounded-lg hover:bg-gray-900 transition-colors"
      >
        Create account
      </button>
    </form>

    <p className="text-center mt-4">
      Already have an account?{" "}
      <Link to="/login" className="text-blue-600 hover:underline">
        Login here
      </Link>
    </p>
  </div>

  <div className="mt-10 text-center text-xs text-gray-500 leading-snug">
    This site is protected by reCAPTCHA and the{" "}
    <span className="underline">Google Privacy Policy</span> and{" "}
    <span className="underline">Terms of Service</span> apply.
  </div>
</div>

    </div >
  )
}

export default UserSignup