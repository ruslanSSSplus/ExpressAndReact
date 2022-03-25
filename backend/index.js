import express from 'express'
import mongoose from "mongoose";

import CardsDB from './models/CardsDB.js'



mongoose.connect("mongodb://localhost:27017/Cards",
    {
        useNewUrlParser: true
    }).then( () => {
    const app = express()
    const PORT = process.env.PORT || 3002


    app.use(express.json())
    app.use(express.urlencoded({extended: false}))

    app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`)

    })


    app.post('/api', async (req, res)=> {
        console.log(req.body)
        const data = new CardsDB(req.body)
        await data.save()
        res.json({
            message1: req.body.cardNumber
        })
    })
    app.get('/', (req, res)=> {
       res.send("good")
    })
}).catch(()=> {
    console.log('Database connection failed!')
})

