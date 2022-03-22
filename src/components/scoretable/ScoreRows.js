import { useEffect, useState } from 'react';
import { Row, Col, HeadCol, Inc, Dec, Del } from './ScoreRows.styles.js';

export const ScoreRows = (props) => {
  const [currentScore, setCurrentScore] = useState();

  useEffect(() => {
    if (props.Agreed) {
      const players = [...props.Players];
      const index = players.findIndex(
        (player) => player.id === currentScore.id
      );
      const player = { ...players[index] };

      if (currentScore.score === 'wins') {
        player.wins = player.wins + 1;
      } else if (currentScore.score === 'losses') {
        player.losses = player.losses + 1;
      }

      players[index] = player;
      props.HandlePlayer(players);
      props.SetAgreed(false);
    }
  }, [props.BoxType]);

  const handleDelete = (playerID) => {
    const players = [...props.Players];
    const index = players.findIndex((player) => player.id === playerID);

    players.splice(index, 1);

    props.HandlePlayer(players);
  };

  const handleScore = (playerID, change) => {
    props.BoxType('AdjustScore');
    const currScore = {
      id: playerID,
      score: change,
    };
    setCurrentScore(currScore);
  };
  return (
    <>
      <Row>
        <HeadCol>Players</HeadCol>
        <HeadCol>Wins</HeadCol>
        <HeadCol>Losses</HeadCol>
        <HeadCol>Add Win</HeadCol>
        <HeadCol>Add Loss</HeadCol>
        <HeadCol>Remove</HeadCol>
      </Row>
      {props.Players.map((player) => (
        <Row id={player.id}>
          <Col>{player.name}</Col>
          <Col>{player.wins}</Col>
          <Col>{player.losses}</Col>
          <Inc onClick={() => handleScore(player.id, 'wins')}>&#129093;</Inc>
          <Dec onClick={() => handleScore(player.id, 'losses')}>&#129095;</Dec>
          <Del onClick={() => handleDelete(player.id)}>❌</Del>
        </Row>
      ))}
    </>
  );
};

export default ScoreRows;
