import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["MainJuin", "SubJuin", "User"],
        default: "User",
    },
    reg_date: {
        type: Date,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    comments: [{
        // post_id를 넣어주는 이유? 
        // -> post 를 지울때 하위 댓글들도 지워지게 하기위함.
        post_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        },
        comment_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        },
    }, ],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});

const User = mongoose.model("User", UserSchema);

export default User;