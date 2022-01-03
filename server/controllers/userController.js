import User from '../models/User';
import "dotenv/config";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const getUser = async(req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length == 0) {
            return res.status(400).json({ msg: "No users !" });
        }
        res.status(200).json(users);

    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: err.message });
    }
}


export const postUser = async(req, res) => {
    console.log(req);
    const {
        name,
        email,
        password
    } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ msg: "모든 필드를 채워주세요." });
    }
    User.findOne({ email }).then((user) => {
        if (user) {
            return res.status(400).json({ msg: "이미 가입된 이메일입니다." });
        }
        const newUser = new User({
            name,
            email,
            password
        });

        console.log(newUser);
        // newUser 등록
        newUser.save().then((user) => {
            jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    });
                }) //jwt.sign
        });


    });
}