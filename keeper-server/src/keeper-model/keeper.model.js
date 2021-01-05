const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let KeeperNote = new Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("KeeperNote", KeeperNote);