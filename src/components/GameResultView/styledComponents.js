import styled from 'styled-components'

export const GameResultContainer = styled.div`
  width: 70%;
  height: 406px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TeamResultContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
`
export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TeamHeader = styled.p`
  color: #ffffff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
`
export const MyChoiceImage = styled.img`
  width: 130px;
`

export const GameResultMsg = styled.p`
  color: #ffffff;
  font-family: Roboto;
  font-size: 22px;
  font-weight: 800;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border: 0px;
  width: 120px;
  height: 30px;
  border-radius: 8px;
  color: #223a5f;
  font-family: Bree Serif;
  font-size: 12px;
  cursor: pointer;
`
