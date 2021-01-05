const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const keeperRoutes = express.Router();
const PORT = process.env.PORT || 4747;

const app = express();

let KeeperNote = require('./keeper-model/keeper.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/keeperDB", {useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

keeperRoutes.route("/").get(function(req, res) {
    KeeperNote.find(function(err, keepernotes) {
        if (err) {
            console.log(err);
        } else {
            res.json(keepernotes)
        }
    });
});

keeperRoutes.route("/create").post(function(req, res) {
    let note = new KeeperNote(req.body);

    note.save()
        .then(note => {
            res.status(200).json({"note" : "Keeper note successfully created"});
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

keeperRoutes.route("/delete/:id").delete(function(req, res) {
    KeeperNote.findByIdAndDelete(req.params.id, function(err, note) {
        if (!note) {
            res.status(404).send("Cannot delete Note, Maybe Keeper Note is not found");
        } else {
            res.send("Keeper Note was deleted successfully");
        }
    });
});

app.use("/keeper", keeperRoutes);

app.listen(PORT, () => {
    console.log("Server is connected on port " + PORT);
})