import express from 'express';

const app = express();

app.get('/usuarios', (req, res) => {
    res.send('ok , deu bom')
})
app.listen(3000)

// link https://www.youtube.com/watch?v=PyrMT0GA3sE&t=3317s