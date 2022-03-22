import styled from 'styled-components';

export const ScreenFader = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #00000099;
  left: 0;
  top: 0;
  z-index: 99;
`;
export const FaderBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 250px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.45);
  padding: 20px;
  z-index: 999;
`;
export const InputField = styled.input`
  all: unset;
  display: block;
  width: calc(100% - 16px);
  margin: 8px auto 20px auto;
  background-color: #f1f1f1;
  padding: 8px;
  border-radius: 3px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;
export const AdjustText = styled.p`
  text-align: center;
  margin: 0 0 20px 0;
`;
