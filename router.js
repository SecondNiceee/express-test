import Router from "express";
import PostController from "./PostController.js";
import multer from "./middlewears/file.js";



const router = new Router()


router.post("/posts" , multer.single('picture'),  PostController.create)


router.get("/posts" , PostController.getAll)

router.get("/posts/:id" , PostController.getOne)

router.put("/posts" , PostController.update)

router.delete("/posts/:id" , PostController.delete)

export default router