import User from "../models/UserModel.js";


// Creating User
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
        console.log(error.message);
        res.status(500).send({ messsge: error.message });
    }
}

// Find User

export const findUser = async (req, res) => {
    try {
        const { username } = req.params;

        const user = await User.findOne({where: { username: username }})

        if (user === null) {
            return res.status(202).json({ message: "User not found"})
        }

        return res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ messsge: error.message });
    }
}