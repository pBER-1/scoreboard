import styled from 'styled-components';
import { NavWrapper, Nav } from './Header.styles.js';

const Header = (props) => {
  return (
    <NavWrapper>
      <Nav>{props.children}</Nav>
    </NavWrapper>
  );
};

export default Header;
