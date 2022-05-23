import mongoose from 'mongoose'
import Memo from '../models/Memo.js'

export const getMemos = async (req, res) => {
    try {
        const memos = await Memo.find()
        res.status(200).json(memos)
    } catch (err) {
        res.status(404).json(err.message)
    }
}

export const createMemo = async (req, res) => {
    const memo = req.body
    const newMemo = new Memo(memo)
    try{
        await newMemo.save()
        res.status(200).json(newMemo)
    } catch(err) {
        res.status(404).json(err.message)
    }
}

export const deleteMemo = async (req, res) => {
    const {id: _id} = req.params

    if( !mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that ID")

    await Memo.findByIdAndDelete(_id)
    res.json({message: "Post deleted Successfully"})
}

