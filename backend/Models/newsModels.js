const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    contenido: {type: String, required: true},
    descripcion: {type: String, required: true},
    fecha: {type: Date, default: Date.now},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "Author", required: true}
});

const News = mongoose.model("News", newsSchema);
module.exports = News;