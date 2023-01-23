// Write your code here.
import './index.css'

const NavBar = props => {
  const {gameInProgress, clickedEmojisList, topScore} = props
  const score = clickedEmojisList.length

  return (
    <nav className="navbar">
      <div className="app-name-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="app-name">Emoji Game</h1>
      </div>
      {gameInProgress && (
        <div className="scores-container">
          <p className="score">Score: {score} </p>
          <p className="score">Top Score: {topScore} </p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
