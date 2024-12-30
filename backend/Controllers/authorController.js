const Author = require("../Models/authorModels")

const createAuthor = async (req, res) => {
    try {
        const {nombre, email, biografia, fechaNacimiento} = req.body
        const newAuthor = await Author.create({nombre, email, biografia, fechaNacimiento})
        res.status(201).json(newAuthor)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getAuthors = async (req, res) => {
    try {
        const authors = await Author.find()
        res.status(200).json(authors)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createAuthor,
    getAuthors
}