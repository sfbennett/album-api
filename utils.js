const { albums } = require("./data");

// Define getRandomAlbum function and export:
const getRandomAlbum = () => {
  const randomIndex = Math.floor(Math.random() * albums.length);
  return albums[randomIndex];
};

// Define getAlbumById function and export:
const getAlbumById = (id) => {
  return albums[id];
};

// Define addNewAlbum function and export:
const addNewAlbum = (newAlbum) => {
  const maxId = albums.reduce(
    (max, album) => (album.id > max ? albumid : max),
    0
  );
  newAlbum.id = maxId + 1;
  albums.push(newAlbum);
  return newAlbum;
};

// Define findAlbumByTitle function and export:
const findAlbumByTitle = (albumTitle) => {
  const foundAlbum = albums.find((album) => album.title === albumTitle);
  return foundAlbum;
};

// Define getAlbumByArtist function and export:
const getAlbumByArtist = (artistName) => {
  const albumsByArtist = albums.filter((album) => album.artist === artistName);
  return albumsByArtist;
};

module.exports = {
  getRandomAlbum,
  getAlbumById,
  addNewAlbum,
  findAlbumByTitle,
  getAlbumByArtist,
};
