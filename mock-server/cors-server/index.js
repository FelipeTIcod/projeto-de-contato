const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/candy', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json({ 'candy': 'bubble-gum' })
})

app.get('/buble', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json({ 'buble': 'bubble-kjadshijladshjkdsah' })
})

app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`))