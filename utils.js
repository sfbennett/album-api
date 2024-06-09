const { albums } = require("./data");
// Define getRandomAlbum function and export:

const getRandomAlbum = () => {
  const randomIndex = Math.floor(Math.random() * albums.length);
  return albums[randomIndex];
};

module.exports = { getRandomAlbum };
