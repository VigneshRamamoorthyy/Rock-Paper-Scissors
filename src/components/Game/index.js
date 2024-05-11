import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import Buttons from '../Buttons'

import GameResultView from '../GameResultView'

import {
  AppContainer,
  GameHeader,
  GameTitleContainer,
  GameTitle,
  GameScoreCard,
  ScoreHeader,
  ScoreValue,
  ChoicesButtonLists,
  RulesButton,
  ModalContainer,
  CloseButton,
  RulesImg,
} from './styledComponents'

class Game extends Component {
  state = {
    myChoice: [],
    opponentChoice: {},
    resultMsg: '',
    score: 0,
    isShow: false,
  }

  onPlayAgain = () => {
    this.setState({
      isShow: false,
    })
  }

  renderGameResult = () => {
    const {myChoice, opponentChoice, resultMsg} = this.state

    return (
      <GameResultView
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMsg={resultMsg}
        onPlayAgain={this.onPlayAgain}
      />
    )
  }

  onClickChoice = (id, image) => {
    const {choicesList} = this.props
    // console.log(Math.floor(Math.random() * 3))
    const randomValue = Math.floor(Math.random() * 3)
    if (choicesList[randomValue].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        myChoice: [id, image],
        opponentChoice: choicesList[randomValue],
        score: prevState.score + 1,
        resultMsg: 'YOU WON',
        isShow: true,
      }))
    } else if (choicesList[randomValue].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        myChoice: [id, image],
        opponentChoice: choicesList[randomValue],
        score: prevState.score + 1,
        resultMsg: 'YOU WON',
        isShow: true,
      }))
    } else if (choicesList[randomValue].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        myChoice: [id, image],
        opponentChoice: choicesList[randomValue],
        score: prevState.score + 1,
        resultMsg: 'YOU WON',
        isShow: true,
      }))
    } else if (choicesList[randomValue].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        myChoice: [id, image],
        opponentChoice: choicesList[randomValue],
        score: prevState.score - 1,
        resultMsg: 'YOU LOSE',
        isShow: true,
      }))
    } else if (choicesList[randomValue].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        myChoice: [id, image],
        opponentChoice: choicesList[randomValue],
        score: prevState.score - 1,
        resultMsg: 'YOU LOSE',
        isShow: true,
      }))
    } else if (choicesList[randomValue].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        myChoice: [id, image],
        opponentChoice: choicesList[randomValue],
        score: prevState.score - 1,
        resultMsg: 'YOU LOSE',
        isShow: true,
      }))
    } else {
      this.setState(prevState => ({
        myChoice: [id, image],
        opponentChoice: choicesList[randomValue],
        score: prevState.score + 0,
        resultMsg: 'IT IS DRAW',
        isShow: true,
      }))
    }
  }

  renderChoicesButtonLists = () => {
    const {choicesList} = this.props
    return (
      <ChoicesButtonLists>
        {choicesList.map(eachChoice => (
          <Buttons
            choiceDetails={eachChoice}
            key={eachChoice.id}
            onClickChoice={this.onClickChoice}
          />
        ))}
      </ChoicesButtonLists>
    )
  }

  render() {
    const {isShow, score} = this.state
    console.log(this.state)
    return (
      <AppContainer>
        <GameHeader>
          <GameTitleContainer>
            <GameTitle>ROCK PAPER SCISSORS</GameTitle>
          </GameTitleContainer>
          <GameScoreCard>
            <ScoreHeader>Score</ScoreHeader>
            <ScoreValue>{score}</ScoreValue>
          </GameScoreCard>
        </GameHeader>
        {isShow ? this.renderGameResult() : this.renderChoicesButtonLists()}
        <Popup
          modal
          trigger={
            <RulesButton type="button" className="trigger-button">
              RULES
            </RulesButton>
          }
        >
          {close => (
            <ModalContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine size={20} />
              </CloseButton>
              <RulesImg
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </ModalContainer>
          )}
        </Popup>
      </AppContainer>
    )
  }
}

export default Game
