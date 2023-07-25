const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

/**
 * Player Microservice
 * CRUD    -          Create Read Update Delete
 * GET     - /        - find all players
 * POST    - /        - create a new player and save into db
 * GET     - /:id     - find a single player by id
 * PUT     - /:id     - update or create player
 * PATCH   - /:id     - update player
 * DELETE  - /:id     - delete player from db
 */

app.get("/health",(_req, res) => {
    res.status(200).json({status: "OK"});
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server is listening on PORT ${port}");
    console.log("localhost:${port}");
});