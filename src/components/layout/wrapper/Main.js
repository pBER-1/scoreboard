import styled from 'styled-components';
import { Content } from './Main.styles.js';

const Main = (props) => {
  return <Content>{props.children}</Content>;
};

export default Main;
