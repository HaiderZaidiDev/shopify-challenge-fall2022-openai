import './App.css';

/* Bootstrap Components */
import Container from 'react-bootstrap/Container';

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
