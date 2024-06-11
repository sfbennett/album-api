# ALBUM API

A simple RESTful API that I've created with Express.js for managing data from different end points:

1. A list of albums
2. Generate a random album
3. Get album by Id
4. Get album by title
5. Get album by artist
6. Add an album

This project was a way for me to put into practice the technical knowledge I've recently acquired with Express.js and API creation.

Check out my API deployed on Render [here](https://album-api-ay93.onrender.com/).

## API Endpoints

### Get all albums

- Method: `GET`
- URL: `/api/albums`

For example, to see a full list of albums visit: https://album-api-ay93.onrender.com/api/albums

### Get random album

- Method: `GET`
- URL: `/api/albums/random`

After running this request, refresh the page to generate a random album.

### Get album by ID

- Method: `GET`
- URL: `/api/albums/:albumId`

For example, to retrieve the albm with the ID 5, the URL would be: `api/albums/5`

### Get album by title

- Method: `GET`
- URL: `api/albums/title/:titleName`

For example, to retrieve an album by title, the URL would be: `api/albums/title/:titleName`.

When the album is longer than one word, use %20 between each word like so: `api/albums/title/Black%20Sabbath`.

### Get album by artist

- Method: `GET`
- URL: `api/albums/artist/:artistName`

For example, to retrieve albums by a specific artist, the URL would be: `api/albums/artist/:artistName`.

### Add an album

- Method: `POST`
- URL: `api/albums`

## Technologies Used

- Node.js
- Express.js
- Routers and Route handlers
- Middleware
- HTTP Methods
- JSON
- Render for hosting
