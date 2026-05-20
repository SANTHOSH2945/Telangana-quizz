import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

function VerifyOtp() {

  const [otp, setOtp] = useState('')
  const navigate = useNavigate()

  const mobile = localStorage.getItem('mobile')

  const verifyOtp = async () => {

    const { error } = await supabase.auth.verifyOtp({
      phone: '+91' + mobile,
      token: otp,
      type: 'sms'
    })

    if (!error) {
      navigate('/dashboard')
    }
  }

  return (
    <div style={{ padding: 20 }}>

      <h1>Verify OTP</h1>

      <input
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={verifyOtp}>
        Verify
      </button>

    </div>
  )
}

export default VerifyOtp
