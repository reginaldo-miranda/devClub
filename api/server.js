import express, { json } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();

/*
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
*/



app.use(express.json());

app.post('/usuarios',  async (req, res) => {

  await prisma.user.create({
    data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
         }
   })
    res.status(201).json(req.body)
})

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany();
    res.status(200).json(users)
})


app.put('/usuarios/:id',  async (req, res) => {

    await prisma.user.update({
      where:{
        id:req.params.id
      }, 
      data: {
          email: req.body.email,
          name: req.body.name,
          age: req.body.age
           }
     })
      res.status(201).json(req.body)
  })




app.listen(3000)

// link https://www.youtube.com/watch?v=PyrMT0GA3sE&t=3317s