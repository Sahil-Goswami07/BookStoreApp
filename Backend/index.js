import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()
import bookRoute from './route/book.route.js'
import cors from 'cors'
import userRoute from './route/user.route.js'

dotenv.config()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MongoDBURI || 'mongodb://localhost:27017/bookStore'



// connect to mongoDB
try {
    mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('MongoDB connected')
} catch (error) {
    console.log("error connecting to mongoDB",error)
    
}

//difining routes
app.use("/Book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})