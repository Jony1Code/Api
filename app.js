const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./models/index");

const routers = require("./routes/routes");

dotenv.config();

const app = express();

db.sequalize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routers);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("PORT =>", PORT);
});
