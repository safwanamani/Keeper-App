const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const keeperRoutes = express.Router();
const PORT = process.env.PORT || 4747;
const dbName = process.env.DB_NAME;
const userName = process.env.USER_NAME;
const password = process.env.PASSWORD;

const app = express();

let KeeperNote = require('./keeper-model/keeper.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://"+userName+":"+password+"@cluster0.vykqo.mongodb.net/"+dbName+"?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true});
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

keeperRoutes.route("/:id").get(function(req, res) {
    let id = req.params.id;

    KeeperNote.findById(id, function(err, note) {
        if (err) {
            console.log(err);
        } else {
            res.json(note);
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

keeperRoutes.route("/update/:id").post(function(req, res) {
    KeeperNote.findById(req.params.id, (err, note) => {
        if (!note) {
            res.status(404).send("Data is not found");
        } else {
            note.title = req.body.title;
            note.content = req.body.content;

            note.save().then(note => {
                res.json("Keeper Note updated");
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
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