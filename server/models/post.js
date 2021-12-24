import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,
    },
    contents: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: -2,
    },
    fileUrl: {
        type: String,
        default: "https://source.unsplash.com/random/301x201"
    },
    date: {
        type: String,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    postby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Post = mongoose.model("Post", PostSchema);

export default Post;