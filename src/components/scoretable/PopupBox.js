import { YesButton, NoButton } from './ScoreHeader.styles.js';
import {
  ScreenFader,
  FaderBox,
  InputField,
  ButtonContainer,
  AdjustText,
} from './PopupBox.styles.js';
import { useState } from 'react';

export const PopupBox = (props) => {
  const [addPlayerData, setaddPlayerData] = useState();
  const [currID, setCurrID] = useState(Object.keys(props.Players).length);

  const handleAddPlayerChange = (event) => {
    event.preventDefault();

    const newPlayerData = { ...addPlayerData };
    newPlayerData[event.target.getAttribute('name')] = event.target.value;

    setaddPlayerData(newPlayerData);
  };

  const handleAddPlayerSubmit = (event) => {
    event.preventDefault();
    setCurrID(currID + 1);
    const newPlayer = {
      id: currID + 1,
      name: addPlayerData.playerName,
      wins: 0,
      losses: 0,
    };
    const addedPlayer = [...props.Players, newPlayer];
    props.HandlePlayer(addedPlayer);
    props.BoxType('');
  };

  return (
    <>
      {props.type && (
        <>
          <ScreenFader onClick={() => props.BoxType('')} />
          <FaderBox>
            {props.type === 'AddPlayer' && (
              <form onSubmit={handleAddPlayerSubmit}>
                <b>Player:</b>
                <InputField
                  name="playerName"
                  placeholder="Name"
                  required="required"
                  onChange={handleAddPlayerChange}
                />
                <ButtonContainer>
                  <YesButton type="submit">Add</YesButton>
                  <NoButton onClick={() => props.BoxType('')}>Cancel</NoButton>
                </ButtonContainer>
              </form>
            )}
            {props.type === 'AdjustScore' && (
              <>
                <AdjustText>
                  Are you sure you want to adjust the score?
                </AdjustText>
                <ButtonContainer>
                  <YesButton
                    onClick={() => {
                      props.BoxType('');
                      props.SetAgreed(true);
                    }}
                  >
                    Yes
                  </YesButton>
                  <NoButton onClick={() => props.BoxType('')}>No</NoButton>
                </ButtonContainer>
              </>
            )}
          </FaderBox>
        </>
      )}
    </>
  );
};

export default PopupBox;
