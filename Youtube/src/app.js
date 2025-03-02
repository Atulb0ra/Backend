import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: '16kb'
}))//used for parsing json data or other data from the request body

app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))//used to parse url encoded data

app.use(express.static("public")) //store image and pdf in public folder

app.use(cookieParser()) //used to parse cookie data from the request header

export { app }