import Post from "./Post.js"

class PostService{
    async create (post){
        const createdPost = await Post.create(post)
        return createdPost

    }
    async getAll(){
        const gettedPosts = await Post.find()
        return gettedPosts
    }
    async getOne(id){
        if (!id){
            throw new Error("id не указан")
        }
        const gettedPost = await Post.findById(id)
        return gettedPost
    }
    async update(post){
        const id = post._id
        if (!id){
            throw new Error("id не указан")
        }
        const updatedPost = await Post.findByIdAndUpdate(id, post, {new:true})
        return updatedPost
    }
    async delete(id){
        if (!id){
            throw new Error("id не указан")
        }
        const post = await Post.findByIdAndDelete(id);
        return post
    }
}

export default new PostService