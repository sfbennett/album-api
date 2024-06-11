const express = require("express");
const app = express();
const port = 3000;
// Import the albums data from the data.js file:
const { albums } = require("./data");
// Import getRandomAlbum function:
const {
  getRandomAlbum,
  getAlbumById,
  addNewAlbum,
  findAlbumByTitle,
  getAlbumByArtist,
} = require("./utils");

// -- ALBUMS ROUTER -- //
const albumsRouter = express.Router();

// Album Middleware -- to validate that the album exists in the database:

albumsRouter.param("albumId", (req, res, next, albumId) => {
  const album = getAlbumById(albumId);
  if (album) {
    req.album = album;
    next();
  } else {
    res.status(404).send("Album not found!");
  }
});

// GET -- all albums:
albumsRouter.get("/", (req, res) => {
  res.json(albums);
});

// GET -- an album by ID:
albumsRouter.get("/albumId", (req, res) => {
  res.send(req.album);
});

// GET -- an album by title:
albumsRouter.get("/title/:albumTitle", (req, res) => {
  const albumTitle = req.params.albumTitle;
  const foundAlbum = findAlbumByTitle(albumTitle);

  if (foundAlbum) {
    res.json(foundAlbum);
  } else {
    res.status(404).send("Album not found!");
  }
});

// GET -- album by artist:
albumsRouter.get("/artist/:artistName", (req, res) => {
  const artistName = req.params.artistName;
  const albumsByArtist = getAlbumByArtist(artistName);

  if (albumsByArtist) {
    res.json(albumsByArtist);
  } else {
    res.status(404).send("Artist not found!");
  }
});

// GET -- a random album:
albumsRouter.get("/random", (req, res) => {
  const randomAlbum = getRandomAlbum();
  res.json(randomAlbum);
});

// POST -- add a new album:
albumsRouter.post("/", (req, res) => {
  const newAlbum = req.body;
  const addedAlbum = addNewAlbum(newAlbum);
  res.status(201).send(addedAlbum);
});

// Mount all Routers to be able to use them:
app.use("/api/albums", albumsRouter);

// 2. Basic Hello World Route Handler
app.get("/", (req, res) => {
  res.send("Hello, world! Welcome to my Album API made using Express.");
});

// 1. Start Express server and have it listen for HTTP requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
