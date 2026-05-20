import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const navigate = useNavigate()

  return (
    <div style={{ padding: 20 }}>

      <h1>Dashboard</h1>

      <button onClick={() => navigate('/quiz')}>
        Start Daily Quiz
      </button>

    </div>
  )
}

export default Dashboard
