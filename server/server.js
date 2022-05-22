const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
var http = require('https')
const app = express();
const port = process.env.PORT || 5000;
var cors = require("cors");
console.log(process.env)


// Create a back-end server (API proxy) server with Express.
// http.createServer(app).listen(port, () => console.log(`Backend server live, listening on port; ${port}`));


app.use(cors())
app.listen(port, () => {
    console.log('server')
})

// Endpoint wrapping the OpenAI completion API wrapper.
app.get('/api/completions', async(req, res) => {

    // Using the OpenAI API wrapper to fetch a get request from the completion API.
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    console.log(req.query)

    const response = await openai.createCompletion(req.query.engineId, {
    prompt: req.query.prompt,
    temperature: 0.29,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    });

    res.send(response.data)
})

app.get('/api/list_engines', async(req, res) => {
    // Using the OpenAI API wrapper to fetch a list of engines available.
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.listEngines();

    res.send(response.data)
})