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

module.exports = { getRandomAlbum, getAlbumById };
