# Album API

Another simple RESTful API that I've created with Express.js for managing data from two different end points:

1. A list of albums
2. Generate a random album

This project was a way for me to put into practice the technical knowledge I've recently acquired with Express.js and API creation.

Check out my API deployed on Render [here](https://album-api-ay93.onrender.com/).

## API Endpoints

### Get all albums

- Method: `GET`
- URL: `/api/albums`

For example, to see a full list of albums visit:

### Get random album

- Method: `GET`
- URL: `/api/albums/random`

After running this request, refresh the page to generate a random album.

### Get album by ID

- Method: `GET`
- URL: `/api/albums/:albumId`

For example, to retrieve the albm with the ID 5, the URL would be: `api/albums/5`

## Technologies used

- Node.js
- Express.js
- Routers and Route handlers
- Middleware
- HTTP Methods
- JSON
- Render for hosting
