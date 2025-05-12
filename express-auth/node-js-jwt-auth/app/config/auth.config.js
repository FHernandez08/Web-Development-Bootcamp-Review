import dotenv from "dotenv";
dotenv.config();

console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);

export default {
    secret: process.env.SECRET_KEY
}