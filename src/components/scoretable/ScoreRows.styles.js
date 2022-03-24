import styled from 'styled-components';

export const Rows = styled.div`
  max-width: 100vw;
  @media (max-width: 768px) {
    overflow: scroll;
  }
`;
export const Row = styled.tr`
  z-index: 1;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr repeat(6, 4fr);
  min-width: 425px;
  border: 2px solid #d8d8d8;
  border-top: 0px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr repeat(6, 2fr);
  }
`;
export const Col = styled.td`
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
  img {
    width: 18px;
    transform: rotate(90deg);
    @media (max-width: 768px) {
      width: 12px;
    }
  }

  @media (max-width: 768px) {
    height: calc(100% - 20px);
    line-height: 10px;
    padding: 10px 10px;
    font-size: 10px;
  }
  :last-child {
    border: none;
  }
`;
export const HeadCol = styled(Col)`
  background-color: #74b80042;
  border-top: 2px solid #d8d8d8;
  :last-child {
    border: none;
    border-top: 2px solid #d8d8d8;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 8px;
  }
`;

export const Inc = styled(Col)`
  cursor: pointer;
  user-select: none;
  -webkit-text-stroke: 1px black;
  color: green;
  font-size: 20px;
  line-height: 100%;

  img {
    width: 18px;
    transform: rotate(270deg);
    @media (max-width: 768px) {
      width: 12px;
    }
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Dec = styled(Col)`
  cursor: pointer;
  user-select: none;
  -webkit-text-stroke: 1px black;
  color: red;
  font-size: 20px;
  line-height: 100%;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
export const Del = styled(Col)`
  cursor: pointer;
  user-select: none;
`;
