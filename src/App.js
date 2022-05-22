import './App.css';

/* Bootstrap Components */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Core Components */
import Header from './components/Header.js';
import Prompt from './components/Prompt.js';

const App = () => {
  return (
    <Container fluid>
      <Header/>
      <Prompt/>
    </Container>
  );
}

export default App;
