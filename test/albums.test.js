import request from "supertest";
import app from "../app.js";
import { expect } from "chai";

// 1. Define test case for the /api/albums endpoint:

describe("GET /api/albums", () => {
  it("responds with JSON containing all of the albums", (done) => {
    request(app)
      .get("/api/albums") // GET request to endpoint
      .expect("Content-Type", /json/) // Expect response content type to be JSON
      .expect(200) // Expect (200 OK) success code
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an("array"); // Assertion to ensure response contains full array of albums
        done();
      });
  });
});

// 2. Define test case for GET a random album:

describe("GET /api/albums/random", () => {
  it("responds with a JSON object containing one random album", (done) => {
    request(app)
      .get("/api/albums/random") // GET request to random album endpoint
      .expect("Content-Type", /json/) // Expect response content type to be JSON
      .expect(200) // Expect (200 OK) success code
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an("object"); // Object instead of array because it'll be just one album
        expect(res.body).to.have.property("title");
        expect(res.body).to.have.property("artist");
        expect(res.body).to.have.property("year");
        done();
      });
  });
});

// 3. Define test case for GET album by artist:

describe("GET /api/albums/artist/:artistName", () => {
  it("should respond with the albums by that specific artist", (done) => {
    const artistName = "Paramore"; // Define existing artist name for testing
    request(app)
      .get(`/api/albums/artist/${artistName}`) // Get request to album artist endpoint
      .expect("Content-Type", /json/) // Expect response content type to be JSON
      .expect(200) // Expect (200 OK) success code
      .end((err, res) => {
        if (err) return done(err);

        if (Array.isArray(res.body)) {
          // If array (multiple albums for artist), iterate over each and checks if arist name of each matches expected artist name
          res.body.forEach((album) => {
            expect(album.artist).to.equal(artistName);
          });
        } else {
          // If object (one album by an artist), directly check artist name of single album matches expected artist name
          expect(res.body.artist).to.equal(artistName);
        }
        done();
      });
  });
});
