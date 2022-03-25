import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    cardNumber: Number,
    ExpirationDate: String,
    cvv: Number,
    amount: Number
})

export default mongoose.model("CardsDB", schema)