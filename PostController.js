import Post from "./Post.js"
import PostService from "./PostService.js"



class PostController {
    async create (req, res){
        try{
            console.log(req.file)
            const {author , title, content, picture} = req.body
            const post = await PostService.create({author , title, content, picture})
            res.status(200).json(post)
        }
        catch(error){
            res.status(500).json(error)
        }
    }


    async getAll(req, res){
        try{
            const posts = await PostService.getAll()
            return res.json(posts)
        }
        catch(error){
            res.status(500).json(error)
        }

    }

    async getOne(req, res){

        try{
            
            const {id} = req.params
            const post = await PostService.getOne(id)
            return res.json(post)

        }
        catch(error){
            res.json(error)
        }

    }
    async update(req, res){
        try{
            const post = req.body
            const updatedPost = await PostService.update(post)
            return res.json(updatedPost)
        }
        catch(error){
            res.status(500).json(error.message)
        }

    }
    async delete(req, res){ 
        try{
            const {id} = req.params
            const post = await PostService.delete(id);
            return res.json(post)
        }
        catch(error){
            res.status(500).json(error)
        }
    }
}




export default new PostController