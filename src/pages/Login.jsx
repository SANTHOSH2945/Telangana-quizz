import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

function Login() {
  const [mobile, setMobile] = useState('')
  const navigate = useNavigate()

  const sendOtp = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      phone: '+91' + mobile
    })

    if (!error) {
      localStorage.setItem('mobile', mobile)
      alert('OTP Sent')
      navigate('/verify')
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Telangana Quiz Platform</h1>

      <input
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <button onClick={sendOtp}>
        Send OTP
      </button>
    </div>
  )
}

export default Login
