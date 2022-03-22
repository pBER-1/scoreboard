import { useState } from 'react';
import jsonData from './data.json';
import { ScoreHeader } from './ScoreHeader.js';
import { ScoreRows } from './ScoreRows.js';
import PopupBox from './PopupBox.js';

const ScoreTable = () => {
  const [players, setPlayers] = useState(jsonData);
  const [boxtype, setBoxType] = useState('');
  const [agreed, setAgreed] = useState(false);

  const setPlayersHandler = (player) => {
    setPlayers(player);
  };

  const ChangeBoxType = (type) => {
    setBoxType(type);
  };

  const ChangeAgreed = (bool) => {
    setAgreed(bool);
  };

  return (
    <>
      <PopupBox
        type={boxtype}
        Players={players}
        BoxType={ChangeBoxType}
        HandlePlayer={setPlayersHandler}
        Agreed={agreed}
        SetAgreed={ChangeAgreed}
      />
      <ScoreHeader BoxType={ChangeBoxType} />
      <ScoreRows
        Players={players}
        HandlePlayer={setPlayersHandler}
        BoxType={ChangeBoxType}
        Agreed={agreed}
        SetAgreed={ChangeAgreed}
      />
    </>
  );
};

export default ScoreTable;
