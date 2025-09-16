import User from "../models/user.js"

export const signUp = async (req, res) => {
    try {
        let check = await User.findOne({ email: req.body.email })
        if (check) {
            return res.status(400).json({
                success: true,
                errors: "Exisiting email entered"
            })
        }
        let cart = {}
        for (let i = 0; i < 300; i++) {
            cart[i = 0]
        }
        const user = new User({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart
        })

        await user.save()

        const token = generateToken(id)

        res.status(200).json({
            success: true,
            user,
            token,
            message: "User Created Successfully"
        })
    } catch (err) {
        console.log(`Error in signUp controller: ${err.message}`);
        res.status(500).json({ error: "Failed to add user" });
    }

}

// user login

export const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })

        if (user) {
            const passCompare = req.body.password === user.password
            if (passCompare) {
                const data = {
                    user: {
                        id: user.id
                    }
                }
                const token = generateToken()
                res.json({
                    success: true,
                    token
                })
            } else {
                res.json({
                    success: false,
                    errors: "Wrong password"
                })
            }
        } else {
            res.json({
                success: false,
                errors: "Wrong Email Id"
            })
        }
    } catch (error) {
        console.log(`Error in login controller: ${err.message}`);
        res.status(500).json({ error: "Failed to login user" });
    }
}

