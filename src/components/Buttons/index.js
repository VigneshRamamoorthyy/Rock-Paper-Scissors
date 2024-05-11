import {GameButton, ChoiceImg, ChoiceButtonList} from './styledComponents'

const Buttons = props => {
  const {choiceDetails, onClickChoice} = props
  const {imageUrl, id} = choiceDetails

  const onClickChoiceItem = () => {
    onClickChoice(id, imageUrl)
  }
  console.log(`${id.toLowerCase()}Button`)
  return (
    <ChoiceButtonList>
      <GameButton type="button" data-testid={`${id.toLowerCase()}Button`}>
        <ChoiceImg src={imageUrl} onClick={onClickChoiceItem} alt={id} />
      </GameButton>
    </ChoiceButtonList>
  )
}

export default Buttons
