import  Express  from "express";
const app = Express();
const port = 2200;

app.listen(port, () => {
    console.log(`Service running at the door: ${port}`);
});