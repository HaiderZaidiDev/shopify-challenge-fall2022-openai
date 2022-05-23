import '../App.css';
import React, {useState, useEffect} from 'react';

/* Bootstrap Components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Core Components */
import Responses from './Responses.js';
import axios from 'axios';

const Prompt = () => {
  const [prompt, setPrompt] = useState('')
  const [responses, setResponses] = useState('')
  const [engines, setEngines] = useState('')
  const [engineSelected, setEngine] = useState('text-curie-001')

  useEffect(() => {

    fetchEngines()

  }, [])

  const fetchEngines = () => {
    axios.get(`/api/list_engines`)
    .then((res) => {
      setEngines(res.data.data.reverse()) // Updating state with list of engines available.
    })
    .catch((err) => {
      console.log(`Error: ${err}`)
    })
  }

  const fetchPromptResponse = () => {
    // Sending a GET request to the OpenAI Completions API, via our API proxy. 
    axios.get(`/api/completions?prompt=${prompt}&engineId=${engineSelected}`)
    .then((res) => {
      let completedResponse = {
        prompt: prompt,
        response: res.data.choices[0].text,
      }
      let newResponses = [...responses]
      newResponses.unshift(completedResponse)
      setResponses(newResponses) // On success, we add responses to a list of responses in th state.
    })
    .catch((err) => {
      console.log(`Error: ${err}`)
    })
  }

  const submitHandler = (event) => {
    event.preventDefault(); // Prevents page from refreshing instantly after submit.
    fetchPromptResponse()
  }

  return (
    <React.Fragment>
      <Col xs={12}>
        <Row className="prompt-wrapper">
          <h3> Enter a prompt. Receive <span id="highlight"> AI-powered</span>  Feedback.</h3>
          <div className="prompt">
            <form className="prompt-form" onSubmit={submitHandler}>
              <label htmlFor="prompt-input"> Prompt* </label>
              <textarea
                className="prompt-input"
                id="prompt-input"
                placeholder="Enter prompt" 
                onChange={(event) => setPrompt(event.target.value)}
                ></textarea>
              
              <label htmlFor="engine-select"> Select Engine (text-curie-001 is recommended): </label>
              <select className="select-btn" id="engine-select" defaultValue="text-curie-001" onChange={(event) => setEngine(event.target.value)}> 
              {/* Rendering list of engines available. Shows a placeholder loading option until the API has completed its call */}
                {engines 
                ? engines.map((engine, idx) => (
                  <option key={idx} value={engine.id}>{engine.id}</option>
                ))
                : <option>Loading engines...</option>
              }
              </select>
              <button className="cta-btn" type="submit"> Submit </button>
            </form>
          </div>
        </Row>
      </Col>
      {responses && <Responses responses={responses}/>}
    </React.Fragment>

  );
}

export default Prompt;
