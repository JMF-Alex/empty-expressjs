import express from "express";
import path from "path/win32";
import { fileURLToPath } from "node:url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get("/index.html", (_, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});