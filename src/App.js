import logo from './assets/logo.png';
import './index.css';
import Header from './components/layout/nav/Header.js';
import Main from './components/layout/wrapper/Main.js';
import ScoreTable from './components/scoretable/ScoreTable.js';
import './App.css';

const App = () => {
  return (
    <>
      <Header content="meme" contentTwo="123123">
        <img src={logo} alt="Company Logo" />
      </Header>
      <Main>
        <ScoreTable />
      </Main>
    </>
  );
};

export default App;
