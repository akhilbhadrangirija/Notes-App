const express =require('express')
const notes =require('./data/notes')
const dotenv =require('dotenv')



const app =express();
dotenv.config();


app.get("/",(req,res)=>{
    res.send('api is running')

});
app.get("/api/notes",(req,res)=>{
    res.json(notes)

});
app.get("/api/notes/:id",(req,res)=>{
    const note =notes.find((n)=>n._id===req.params.id)
    res.json(note)

});


const port = process.env.PORT
app.listen(port,()=>console.log(`server started at ${port}`))