import './App.css';

/* Bootstrap Components */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Core Components */
import Header from './components/Header.js';
import Prompt from './components/Prompt.js';
import Responses from './components/Responses.js';

const App = () => {
  return (
    <Container fluid>
      <Header/>
      <Prompt/>
      <Responses/>
    </Container>
  );
}

export default App;
