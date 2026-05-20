function Result() {

  const score = localStorage.getItem('score')

  return (
    <div style={{ padding: 20 }}>

      <h1>Quiz Result</h1>

      <h2>
        Your Score: {score}/20
      </h2>

      {
        score < 10
          ? <p>Improve Current Affairs Preparation</p>
          : <p>Good Performance</p>
      }

    </div>
  )
}

export default Result
