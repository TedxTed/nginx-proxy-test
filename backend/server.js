import express from "express";

const app = express();
const port = 8080;

app.get("services/m/post/1", (req, res) => {
  res.json({ message: "Hello, this is post 1!" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
