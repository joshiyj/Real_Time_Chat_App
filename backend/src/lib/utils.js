import jwt from "jsonwebtoken";
 
export const generateToken = (userId, res) => {

    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })

    res.cookie("jwt", token, {
        maxAge: 7*24*60*60*1000, // 7 days
        httpOnly: true, // cookie cannot be accessed by client-side JavaScript
        sameSite: "strict", // cookie will only be sent in requests from the same site
        secure: process.env.NODE_ENV !== "development", // cookie will only be sent over HTTPS in production
    })

    return token;
} 
