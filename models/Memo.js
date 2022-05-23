import mongoose from 'mongoose'

const MemoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const Memo = mongoose.model('Memo', MemoSchema)
export default Memo