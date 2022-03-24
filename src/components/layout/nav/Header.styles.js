import styled from 'styled-components';

export const NavWrapper = styled.header`
  z-index: 10;
  width: calc(100% - 40px);
  height: 70px;
  box-shadow: 0px 4px 4px -1px rgba(0, 0, 0, 0.45);
  background-color: #fff;
  padding: 0 20px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
`;
export const Nav = styled.div`
  max-width: 1760px;
  width: 100%;
  margin: auto;
  img {
    height: 40px;
  }
`;
