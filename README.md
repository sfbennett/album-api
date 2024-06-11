# ALBUM API

A simple RESTful API I've created with Express.js to manage data from different endpoints and implement testing.

- Get a list of albums
- Generate a random album
- Get an album by ID
- Get an album by title
- Get an album by artist
- Add an album
- Delete an album

This project was a way for me to implement the technical knowledge I've acquired with Express.js, API creation, and testing. Check out my API deployed on Render [here](https://sbennett-album-api.onrender.com).

## Installation

```
git clone https://github.com/yourusername/album-api.git
cd album-api
npm install
```

## Running the server

```
node app.js
```

## API Endpoints

### Get all albums

- Method: `GET`
- URL: `/api/albums`

For example, to see a full list of albums visit: https://sbennett-album-api.onrender.com/api/albums

### Get random album

- Method: `GET`
- URL: `/api/albums/random`

After running this request, refresh the page to generate another random album.

### Get album by ID

- Method: `GET`
- URL: `/api/albums/:albumId`

For example, to retrieve the albm with the ID 5, the URL would be: `api/albums/5`

### Get album by title

- Method: `GET`
- URL: `/api/albums/title/:titleName`

For example, to retrieve an album by title, the URL would be: `api/albums/title/Paranoid`.

When the album is longer than one word, use %20 between each word: `api/albums/title/Black%20Sabbath`.

### Get album by artist

- Method: `GET`
- URL: `/api/albums/artist/:artistName`

For example, to retrieve all albums by a specific artist, the URL would be: `api/albums/artist/:artistName`.

### Add an album

- Method: `POST`
- URL: `/api/albums`
- Request body example:

```
{
  "title": "Album Title",
  "artist": "Album Artist",
  "year": "Album Year"
}
```

### Delete an album

- Method: `DELETE`
- URL: `/api/albums/:albumId`

## Technologies Used

- Node.js
- Express.js
- Routers and Route handlers
- Middleware
- HTTP Methods
- JSON
- Render for hosting
- SuperTest
- Mocha
- Chai
