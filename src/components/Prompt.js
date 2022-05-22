import '../App.css';
import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Prompt = () => {
  const [prompt, setPrompt] = useState('')
  console.log(prompt)
  return (
      <Col xs={12}>
        <div className="prompt-wrapper">
          <div className="prompt-content">
            <h3> Enter a prompt. Receive <span id="highlight">AI-powered</span> Feedback.</h3>
            <form className="prompt-form">
              <label for="prompt-input"> Prompt* </label>
              <textarea
                className="prompt-input"
                id="prompt-input"
                placeholder="Enter prompt" 
                onChange={(event) => setPrompt(event.target.value)}
                ></textarea>
                <button class="cta-btn" type="submit"> Submit </button>
            </form>
          </div>

        </div>
      </Col>

  );
}

export default Prompt;
