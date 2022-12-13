import app from "./src/main.js";
const port = 4200;


app.listen(port, () => {
    console.log(`Service running at the door: http://localhost:${port}`);
});