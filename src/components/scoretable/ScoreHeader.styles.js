import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #d8d8d8;
  border-top: 0px;
`;
export const AddButton = styled.button`
  background-color: #74b800;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.45);
  border-radius: 3px;
  padding: 12px 24px;
`;

export const YesButton = styled(AddButton)`
  padding: 8px 20px;
  width: 100%;
  text-align: center;
`;
export const NoButton = styled(YesButton)`
  background-color: #fff;
  outline: 2px #282c34 solid;
  outline-offset: -2px;
  color: #282c34;
  margin-right: 20px;
`;
