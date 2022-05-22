import './App.css';

/* Bootstrap Components */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Core Components */
import Header from './components/Header.js'

const App = () => {
  return (
    <Container fluid>
      <Header/>
    </Container>
  );
}

export default App;
