// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// const compression = require("compression");

// const PORT = 3000;

// const app = express();

// app.use(logger("dev"));



// app.use(compression());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });


// const databaseUrl = process.env.MONGODB_URI || "notetaker";
// const collections = ["notes"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "./public/index.html"));
// });

// app.post("/submit", (req, res) => {
//   console.log(req.body);

//   db.notes.insert(req.body, (error, saved) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.send(saved);
//     }
//   });
// });

// app.get("/all", (req, res) => {
//   db.notes.find({}, (error, found) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.json(found);
//     }
//   });
// });

// app.get("/find/:id", (req, res) => {
//   db.notes.findOne(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     (error, found) => {
//       if (error) {
//         console.log(error);
//         res.send(error);
//       } else {
//         console.log(found);
//         res.send(found);
//       }
//     }
//   );
// });

// app.post("/update/:id", (req, res) => {
//   db.notes.update(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     {
//       $set: {
//         title: req.body.title,
//         note: req.body.note,
//         modified: Date.now()
//       }
//     },
//     (error, edited) => {
//       if (error) {
//         console.log(error);
//         res.send(error);
//       } else {
//         console.log(edited);
//         res.send(edited);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   db.notes.remove(
//     {
//       _id: mongojs.ObjectID(req.params.id)
//     },
//     (error, removed) => {
//       if (error) {
//         console.log(error);
//         res.send(error);
//       } else {
//         console.log(removed);
//         res.send(removed);
//       }
//     }
//   );
// });

// app.delete("/clearall", (req, res) => {
//   db.notes.remove({}, (error, response) => {
//     if (error) {
//       console.log(error);
//       res.send(error);
//     } else {
//       console.log(response);
//       res.send(response);
//     }
//   });
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Application running on PORT ${PORT}`);
// });

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));



app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
