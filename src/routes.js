const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

const Post = require('./models/Post')

routes.post('/posts', multer(multerConfig).single('file'), async (req, res)=>{

    const post = await Post.create({
        name: req.file.originalname,
        size: req.file.size,
        key: req.file.filename,
        url: '',
    })

    return res.json({ 'name': 'Marco Antonio'})
})

routes.get('/posts', (req, res)=>{

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");


    return res.json({'name': 'Marco Antonio'})
})

module.exports = routes