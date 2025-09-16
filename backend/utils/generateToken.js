import jwt from "jsonwebtoken"

const generateToken = async (id) => {
    const token = jwt.sign(id, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })
}

export default generateToken