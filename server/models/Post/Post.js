const mongoose = require('mongoose');

const postShema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    title: String,
    imageUrl: String,
    description: String,
});

module.exports = mongoose.model('Post', postShema)