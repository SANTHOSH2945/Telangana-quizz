import { useEffect, useState } from 'react'
              onClick={() =>
                selectAnswer(q.id, 'A')
              }
            >
              {q.option_a}
            </button>

            <br />

            <button
              onClick={() =>
                selectAnswer(q.id, 'B')
              }
            >
              {q.option_b}
            </button>

            <br />

            <button
              onClick={() =>
                selectAnswer(q.id, 'C')
              }
            >
              {q.option_c}
            </button>

            <br />

            <button
              onClick={() =>
                selectAnswer(q.id, 'D')
              }
            >
              {q.option_d}
            </button>

            <hr />

          </div>
        ))
      }

      <button onClick={submitQuiz}>
        Submit Quiz
      </button>

    </div>
  )
}

export default Quiz
