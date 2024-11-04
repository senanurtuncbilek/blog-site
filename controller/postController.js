const Post = require('../models/post')

const newPost =  async (req, res) =>{
    await Post.create(req.body);//db kaydet
    res.redirect('/');//anasayfaya yönlendir
}

const getPage = async (req, res) => {
    const id = req.params.id;
    const posts = await Post.find({_id: id});
    res.render('site/post.ejs', {posts});//veriyi ejs şablonuna gönder
 }

module.exports = {
    newPost,
    getPage,
}