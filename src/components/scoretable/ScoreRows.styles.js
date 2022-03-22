import styled from 'styled-components';

export const Row = styled.header`
  z-index: 1;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(6, 1fr);
  border: 2px solid #d8d8d8;
  border-top: 0px;
`;
export const Col = styled.div`
  height: calc(100% - 24px);
  font-size: 14px;
  font-weight: bold;
  color: #000;
  padding: 12px 20px;
  border-right: 2px solid #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  :last-child {
    border: none;
  }
`;
export const HeadCol = styled(Col)`
  background-color: #74b80042;
`;

export const Inc = styled(Col)`
  cursor: pointer;
  user-select: none;
  -webkit-text-stroke: 1px black;
  color: green;
  font-size: 20px;
  line-height: 100%;
`;

export const Dec = styled(Col)`
  cursor: pointer;
  user-select: none;
  -webkit-text-stroke: 1px black;
  color: red;
  font-size: 20px;
  line-height: 100%;
`;
export const Del = styled(Col)`
  cursor: pointer;
  user-select: none;
`;
