const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    biografia: { type: String, },
    fechaRegistro: { type: Date,},
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
