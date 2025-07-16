import express, { json } from 'express';

const app = express();

const users = []

app.use(express.json());

app.post('/usuarios', (req, res) => {

   users.push(req.body)
    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})
app.listen(3000)

// link https://www.youtube.com/watch?v=PyrMT0GA3sE&t=3317s