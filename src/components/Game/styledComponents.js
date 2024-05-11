import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 40px;
`

export const GameHeader = styled.div`
  width: 80%;
  border: 2px solid #ffffff;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 100px;
`

export const GameTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
`

export const GameTitle = styled.h1`
  color: #ffffff;
  font-family: Bree Serif;
  font-size: 18px;
  font-weight: 500;
  margin: 0px;
  width: 90px;
`

export const GameScoreCard = styled.div`
  background-color: #ffffff;
  height: 80px;
  width: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreHeader = styled.p`
  color: #223a5f;
  font-family: Bree Serif;
  font-size: 18px;
  font-weight: 500;
  margin: 0px;
`
export const ScoreValue = styled.p`
  color: #223a5f;
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 0px;
`

export const ChoicesButtonLists = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 350px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  height: 40px;
  width: 80px;
  font-family: Bree Serif;
  font-size: 12px;
  align-self: flex-end;
  margin-right: 14px;
  cursor: pointer;
`

export const ModalContainer = styled.div`
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CloseButton = styled.button`
  border: none;
  align-self: flex-end;
  cursor: pointer;
`

export const RulesImg = styled.img`
  width: 80%;
`
