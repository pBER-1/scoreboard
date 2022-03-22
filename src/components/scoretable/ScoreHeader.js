import { HeaderWrapper, AddButton } from './ScoreHeader.styles.js';

export const ScoreHeader = (props) => {
  return (
    <>
      <HeaderWrapper>
        <h1>League Table</h1>
        <AddButton onClick={() => props.BoxType('AddPlayer')}>
          Add Player
        </AddButton>
      </HeaderWrapper>
    </>
  );
};

export default ScoreHeader;
