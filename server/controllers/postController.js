import Post from "../models/Post";

export const getPost = async(req, res) => {
    const findPost = await Post.find();
    console.log(`All Post: ${findPost}`);
    res.json(findPost);
}

export const postPost = async(req, res, next) => {
    try {
        console.log(`req : ${req}`);
        const {
            title,
            contents,
            fileUrl,
            postby
        } = req.body;
        const newPost = await Post.create({
            title,
            contents,
            fileUrl,
            postby
        });
    } catch (e) {
        console.log(e);
    }
}