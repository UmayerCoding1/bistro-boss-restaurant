const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req , res) => {
    res.send('bistro boss restaurant server is ready');
})

app.get('/umayer', async(req,res) => {
    res.send({
        name: 'Umayer Hossain',
        age:19,
        cgpa: 3.82,
        ggo: 33
    })
})

app.listen(port, () => {
    console.log(`This server is running PORT: ${port}`);
    
})