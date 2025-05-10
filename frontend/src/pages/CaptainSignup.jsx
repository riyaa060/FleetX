import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CapatainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/images/logonameblack.png'  


const CaptainSignup = () => {

  const navigate = useNavigate()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')


  const { captain, setCaptain } = React.useContext(CaptainDataContext)


  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

  }
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
  <div className="max-w-3xl mx-auto w-full">
    <img className="w-20 mb-6" src={logo} alt="FleetX Logo" />

    <form onSubmit={submitHandler} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">What's our Captain's name</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            required
            className="bg-[#eeeeee] rounded-lg px-4 py-2 border text-lg w-full"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            required
            className="bg-[#eeeeee] rounded-lg px-4 py-2 border text-lg w-full"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg"
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
          className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg"
          type="password"
          placeholder="Password"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            required
            className="bg-[#eeeeee] rounded-lg px-4 py-2 border text-lg w-full"
            type="text"
            placeholder="Vehicle Color"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
          />
          <input
            required
            className="bg-[#eeeeee] rounded-lg px-4 py-2 border text-lg w-full"
            type="text"
            placeholder="Vehicle Plate"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            required
            className="bg-[#eeeeee] rounded-lg px-4 py-2 border text-lg w-full"
            type="number"
            placeholder="Vehicle Capacity"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
          />
          <select
            required
            className="bg-[#eeeeee] rounded-lg px-4 py-2 border text-lg w-full"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="moto">Moto</option>
          </select>
        </div>
      </div>

      <button className="bg-[#111] text-white font-semibold rounded-lg px-4 py-2 w-full text-lg">
        Create Captain Account
      </button>
    </form>

    <p className="text-center mt-4">
      Already have an account? <Link to="/captain-login" className="text-blue-600">Login here</Link>
    </p>
  </div>

  <div className="mt-10 max-w-3xl mx-auto text-center">
    <p className="text-[10px] leading-tight">
      This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span>.
    </p>
  </div>
</div>

  )
}

export default CaptainSignup