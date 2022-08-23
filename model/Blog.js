import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    activity: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    calories: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

export default mongoose.model("Blog", blogSchema);
