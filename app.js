// ESM pattern for importing and exporting an express app
import express from "express";
import playlist from "./db/playlist.js";

const app = express();

// Middleware to parse JSON bodies by using express.json() and GET route.
app.get("/", (req, res) => {
  res.send("You've reached the Playlist API!");
});

// GET route to return the playlist data as JSON.
app.get("/playlist", (req, res) => {
  res.json(playlist);
});

// GET route to return a specific song by its index in the playlist array.
app.get("/playlist/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id >= 0 && id < playlist.length) {
    res.json({ song: playlist[id] });
  } else {
    res.status(404).json({ error: "Song not found" });
  }
});
export default app;
