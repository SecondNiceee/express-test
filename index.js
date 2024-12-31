import express from "express"
import mongoose from "mongoose"
import router from "./router.js"
import fileUpload from "express-fileupload"
import path from "path"
import { fileURLToPath } from 'url';

const PORT = 5000 

const DB_URL = 'mongodb+srv://col1596321:wNX8dJcmrgCW1faq@cluster0.t3b11.mongodb.net/'

const app = express()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use("/api", router)

app.use(express.static(path.join(__dirname, 'uploads')));


async function startApp() {
    try{

        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("Server started listened on PORT 5000"))

    }
    catch(e){
        console.log(e)
    }
}

startApp()