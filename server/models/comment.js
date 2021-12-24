import moment from 'moment';
import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    // 댓글의 내용
    contents: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    postby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    commentby: {
        type: String,
    }
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;