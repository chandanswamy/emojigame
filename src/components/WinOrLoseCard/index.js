// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, resetWinGame, resetLoseGame} = props
  const playAgainAfterWon = () => {
    resetWinGame()
  }

  const playAgainAfterLose = () => {
    resetLoseGame()
  }

  return (
    <>
      {isWon && (
        <div className="result-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="win or lose"
              className="result-image"
            />
          </div>
          <div className="result-score-container">
            <h1 className="result-title">You Won</h1>
            <p className="best-score">Best Score</p>
            <p className="score-score">{score}/12</p>
            <button
              type="button"
              className="play-again-button"
              onClick={playAgainAfterWon}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
      {!isWon && (
        <div className="result-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
              className="result-image"
            />
          </div>
          <div className="result-score-container">
            <h1 className="result-title">You Lose</h1>
            <p className="best-score">Score</p>
            <p className="score-score">{score}/12</p>
            <button
              type="button"
              className="play-again-button"
              onClick={playAgainAfterLose}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default WinOrLoseCard
