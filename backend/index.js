import express from 'express'

const PORT = process.env.PORT || 3002
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)

})


app.post('/api', (req, res)=> {
    console.log(req.body)
    res.json({
        message1: req.body.cardNumber
    })
})