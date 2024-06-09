const express = require("express");
const app = express();
const port = 3000;
// Import the albums data from the data.js file //
const { albums } = require("./data");
// Import getRandomAlbum function //
const { getRandomAlbum, getAlbumById } = require("./utils");

// ALBUMS ROUTER //
const albumsRouter = express.Router();

// Album Middleware (to valid that the album exists in the database)

albumsRouter.param("albumID", (req, res, next, albumId) => {
  const album = getAlbumById(albumId);
  if (album) {
    req.album = album;
    next();
  } else {
    res.status(404).send("Album not found!");
  }
});

// GET All Albums //
albumsRouter.get("/", (req, res) => {
  res.json(albums);
});

// GET Album by Id //
albumsRouter.get("/albumId", (req, res) => {
  res.send(req.album);
});

// GET a Random Album //
albumsRouter.get("/random", (req, res) => {
  const randomAlbum = getRandomAlbum();
  res.json(randomAlbum);
});

// ADD an album //

// DELETE an album //

// Mount all Routers to be able to use them //
app.use("/api/albums", albumsRouter);

// 2. Basic Hello World Route Handler
app.get("/", (req, res) => {
  res.send("Hello, world! Welcome to my Album API made using Express.");
});

// 1. Start Express server and have it listen for HTTP requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
