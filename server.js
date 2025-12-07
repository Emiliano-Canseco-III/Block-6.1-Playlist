// This imports the express app from "app.js" then starts the server.
import app from "./app.js";

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
