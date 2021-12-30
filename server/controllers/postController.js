import Post from "../models/Post";

export const home = (req, res) => {
    return res.send("Welcome my blog.");
}

export const getAllPosts = async(req, res) => {
    const findPost = await Post.find();
    console.log(`all Post: ${findPost}`);
    return res.json(findPost);
}

export const getPost = async(req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        if (!post) throw Error("No posts");
        console.log(`find post: ${post}`);
        return res.json(post);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: err.message });
    }
}

export const postPost = async(req, res, next) => {
    try {
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
        console.log(`>>> ${newPost}`);
        newPost.save();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ msg: err.message });
    }
    return res.redirect("/posts");
}