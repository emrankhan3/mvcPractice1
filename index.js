const express = require('express')
const app = express();
const userRouter = require('./routes/users.route')
app.use(express.urlencoded({ extended: true }));
app.use(userRouter)

const htmlForm =`
    <form action='/' method='post'>
        <input type='text' name='name' placeholder='Name' />
        <input type='number' name='age' placeholder='age' />
        <button type='submit' name='btn'>save</button>
    </form>
`


app.use((req,res,next)=>{
    res.status(404).json({message:"resource not found!"})
})


app.listen(3001,()=>{
    console.log('server running on localhost:3001');
})
