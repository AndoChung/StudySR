import User from "../models/UserModel.js";

export const registerUser = async (req, res) => {
    try {
        const newUser = {
            password: req.body.password,
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
        };

        const user = await User.create(newUser);

        return res.status(201).send(user);
    } catch (error) {
        console.error("Unable to post to the database", error)
    }
}

