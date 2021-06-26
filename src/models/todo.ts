import mongoose, { Schema, Document } from "mongoose"

export interface ITodo extends Document {
    _id: string
    name: string
    description: string
}

let TodoSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    task: {
        type: String
    },
    description: {
        type: String
    }
})

export default mongoose.model<ITodo>("Todo", TodoSchema)
