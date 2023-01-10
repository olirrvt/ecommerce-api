import app from "./src/main.js";
const port = process.env.port | 4000;

app.listen(port, () => {
    console.log(`Service running at the door: http://localhost:${port}`);
});