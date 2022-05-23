const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
var cors = require("cors");

app.use(express.static(path.resolve(__dirname, '../build')));

app.use(cors())
app.listen(port, () => {
    console.log(`Server is live, running on port: ${port}`)
})

// Endpoint wrapping the OpenAI completion API wrapper.
app.get('/api/completions', async(req, res) => {
    try {
        // Using the OpenAI API wrapper to fetch a get request from the completion API.
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion(req.query.engineId, {
        prompt: req.query.prompt,
        temperature: 0.29,
        max_tokens: 64,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        });

        res.send(response.data)
    }
    
    catch (err) {
        // The API sometimes returns an invalid response due to an HTTPS error - this may
        // be an issue with OpenAI's API wrapper as a whole. 
        res.send(`Error: Invalid response received from the OpenAI API. \n ${err}`)
    }
})

app.get('/api/list_engines', async(req, res) => {
    // Using the OpenAI API wrapper to fetch a list of engines available.
    try {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.listEngines();
    
        res.send(response.data)
    }
    catch (err) {
        res.send(`Error: Invalid response received from the OpenAI API. \n ${err}`)
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
  });
