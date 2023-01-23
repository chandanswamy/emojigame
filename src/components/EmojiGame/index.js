import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], gameInProgress: true, topScore: 0}

  gameCompleteAndUpdateTopScore = currentScore => {
    const {topScore} = this.state

    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({
      topScore: newTopScore,
      gameInProgress: false,
    })
  }

  clickedEmoji = id => {
    const {clickedEmojisList} = this.state
    const clickedEmojisLength = clickedEmojisList.length
    const {emojisList} = this.props
    const isEmojiPresent = clickedEmojisList.includes(id)

    if (isEmojiPresent) {
      this.gameCompleteAndUpdateTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.gameCompleteAndUpdateTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getEmojiCards = () => {
    const shuffledEmojiList = this.shuffledEmojisList()

    return (
      <div className="emoji-cards-section">
        <ul className="emoji-list-container">
          {shuffledEmojiList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              emojiDetails={eachEmoji}
              clickedEmoji={this.clickedEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }

  getWinOrLoseCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = emojisList.length === clickedEmojisList.length
    const score = clickedEmojisList.length

    return (
      <div className="result-card">
        <WinOrLoseCard
          isWon={isWon}
          score={score}
          resetWinGame={this.resetWinGame}
          resetLoseGame={this.resetLoseGame}
        />
      </div>
    )
  }

  resetWinGame = () => {
    this.setState({clickedEmojisList: [], gameInProgress: true})
  }

  resetLoseGame = () => {
    this.setState({clickedEmojisList: [], gameInProgress: true})
  }

  render() {
    const {clickedEmojisList, gameInProgress, topScore} = this.state

    return (
      <div className="app-container">
        <div className="emoji-game">
          <NavBar
            clickedEmojisList={clickedEmojisList}
            gameInProgress={gameInProgress}
            topScore={topScore}
          />
          <div>
            {gameInProgress && this.getEmojiCards()}
            {!gameInProgress && this.getWinOrLoseCard()}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
