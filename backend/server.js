import express from "express";
import mongodb from "mongodb";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const dbUrl = "mongodb://localhost/crudwithredux";

const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCFq0oTRcrH5lo_TbrGoJ2h0VE9pwx7ETQ",
  authDomain: "gamecollection-c00a4.firebaseapp.com",
  databaseURL: "https://gamecollection-c00a4",
  projectId: "gamecollection-c00a4",
  storageBucket: "gamecollection-c00a4.appspot.com",
  messagingSenderId: "1069246973374",
};
firebase.initializeApp(config);

function validate(data) {
  let errors = {};
  if (data.title === "") errors.title = "Can't be empty";
  if (data.cover === "") errors.cover = "Can't be empty";
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
}

mongodb.MongoClient.connect(dbUrl, { useUnifiedTopology: true }, function (
  err,
  db
) {
  //const database = db.db("crudwithredux");
  const database = firebase.firestore();

  //#region read

  // app.get("/api/games", (req, res) => {
  //   database
  //     .collection("games")
  //     .find({})
  //     .toArray((err, games) => {
  //       res.json({ games });
  //       console.log(games);
  //     });
  // });

  app.get("/api/games", (req, res) => {
    (async () => {
      try {
        let query = database.collection("games");
        let response = [];
        await query.get().then((querySnapshot) => {
          let docs = querySnapshot.docs;
          for (let doc of docs) {
            const selectedItem = {
              _id: doc.id,
              title: doc.data().title,
              cover: doc.data().cover,
            };
            response.push(selectedItem);
          }
        });
        res.json({ games: response });
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })();
  });
  //#endregion

  //#region add

  // app.post("/api/games", (req, res) => {
  //   const { errors, isValid } = validate(req.body);
  //   if (isValid) {
  //     const { title, cover } = req.body;
  //     database.collection("games").insert({ title, cover }, (err, result) => {
  //       if (err) {
  //         res.status(500).json({ errors: { global: "Something went wrong" } });
  //       } else {
  //         res.json({ game: result.ops[0] });
  //       }
  //     });
  //   } else {
  //     res.status(400).json({ errors });
  //   }
  // });

  app.post("/api/games", (req, res) => {
    (async () => {
      let obj = req.body;

      try {
        await database.collection("games").add(obj); //id auto generated
        return res.json({ game: {} });
      } catch (error) {
        console.log(error);
        return res.status(500).send({ errors: { global: error } });
      }
    })();
  });

  //#endregion

  //#region update
  // app.put("/api/games/:_id", (req, res) => {
  //   const { errors, isValid } = validate(req.body);

  //   if (isValid) {
  //     const { title, cover } = req.body;
  //     database
  //       .collection("games")
  //       .findOneAndUpdate(
  //         { _id: new mongodb.ObjectId(req.params._id) },
  //         { $set: { title, cover } },
  //         { returnOriginal: false },
  //         (err, result) => {
  //           if (err) {
  //             res.status(500).json({ errors: { global: err } });
  //             return;
  //           }

  //           res.json({ game: result.value });
  //         }
  //       );
  //   } else {
  //     res.status(400).json({ errors });
  //   }
  // });

  app.put("/api/games/:_id", (req, res) => {
    (async () => {
      try {
        const document = database.collection("games").doc(req.params._id);
        await document.update({
          title: req.body.title,
          cover: req.body.cover,
        });
        return res.json({ game: {} });
      } catch (error) {
        console.log(error);
        res.status(500).json({ errors: { global: err } });
      }
    })();
  });
  //#endregion

  //#region delete
  app.delete("/api/games/:_id", (req, res) => {
    (async () => {
      try {
        console.log(req.params._id);
        const document = database.collection("games").doc(req.params._id);

        await document.delete().then(function () {
          console.log("Document successfully deleted!");
        });
        return res.json({});
      } catch (error) {
        console.log("error");
        res.status(500).json({ errors: { global: "Delete failed!" } });
      }
    })();
  });
  // app.delete("/api/games/:_id", (req, res) => {
  //   database
  //     .collection("games")
  //     .deleteOne({ _id: new mongodb.ObjectID(req.params._id) }, (err, game) => {
  //       if (err) {
  //         res.status(500).json({ errors: { global: err } });
  //         return;
  //       }
  //       res.json({});
  //     });
  // });

  //#endregion

  //#region get by id

  // app.get("/api/game/:_id", (req, res) => {
  //   database
  //     .collection("games")
  //     .findOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, game) => {
  //       res.json({ game });
  //     });
  // });

  app.get("/api/game/:_id", (req, res) => {
    (async () => {
      try {
        let query = database.collection("games").doc(req.params._id);

        await query.get().then(function (doc) {
          if (doc.exists) {
            res.json({ game: doc.data() });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ errors: { global: error } });
      }
    })();
  });

  //#endregion

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global:
          "Still working on it. Please try again later when we implement it",
      },
    });
  });

  app.listen(5000, () => console.log("Server is running on localhost:5000"));
});
