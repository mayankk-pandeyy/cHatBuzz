const express = require("express");
const { chats } = require("./data/data");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server started on Port ${PORT}`)
    console.log("Nodemon Running")
})

app.get('/', (req, res)=>{
    res.send("Hello bhai");
})

app.get('/api/chat', (req, res)=>{
    res.send(chats);
})

app.get('/api/chat/:id', (req, res)=> {
    const singleChat = chats.find((c)=>{
        if(c._id == req.params.id){
            return c;
        }
    })

    res.send(singleChat);
})