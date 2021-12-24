import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        default: "unclassified"
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    }]
});

const Category = mongoose.model("Category", CategorySchema);

export default Category;