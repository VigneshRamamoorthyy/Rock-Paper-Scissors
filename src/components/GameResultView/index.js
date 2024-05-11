import {
  GameResultContainer,
  TeamResultContainer,
  TeamContainer,
  TeamHeader,
  MyChoiceImage,
  GameResultMsg,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {myChoice, opponentChoice, resultMsg, onPlayAgain} = props

  const {imageUrl} = opponentChoice

  const onClickPlayAgain = () => {
    onPlayAgain()
  }

  return (
    <GameResultContainer>
      <TeamResultContainer>
        <TeamContainer>
          <TeamHeader>YOU</TeamHeader>
          <MyChoiceImage src={myChoice[1]} alt="your choice" />
        </TeamContainer>
        <TeamContainer>
          <TeamHeader>OPPONENT</TeamHeader>
          <MyChoiceImage src={imageUrl} alt="opponent choice" />
        </TeamContainer>
      </TeamResultContainer>
      <GameResultMsg>{resultMsg}</GameResultMsg>
      <PlayAgainButton onClick={onClickPlayAgain}>PLAY AGAIN</PlayAgainButton>
    </GameResultContainer>
  )
}

export default GameResultView
