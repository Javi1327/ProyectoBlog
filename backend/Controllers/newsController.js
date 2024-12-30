const News = require("../Models/newsModels")

const createAuthor = async (req, res) => {
    try {
        const {titulo, contenido, descripcion, fecha, author} = req.body
        const newNews = await News.create({titulo, contenido, descripcion, fecha, author})
        res.status(201).json(newNews)
    } catch (error) {  
        res.status(400).json({error: error.message})
    }
}

const getNews = async (req, res) => {
    try {
        const news = await News.find().populate("author", "nombre email")
        res.status(200).json(news)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createNews,
    getNews
}