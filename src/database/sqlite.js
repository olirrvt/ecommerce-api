import sqlite3 from "sqlite3";
import path from "path";
const caminhoArquivo = path.resolve("./src/database/", "database.db");

const db = new sqlite3.Database(caminhoArquivo);
process.on("SIGINT", () => {
    db.close(() => {
        console.log("Closed database!");
        process.exit(0);
    });
});

export default db;