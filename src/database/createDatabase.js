import sqlite3 from "sqlite3";
import path from "path";
const caminhoArquivo = path.resolve("./src/database/", "database.db");

const db = new sqlite3.Database(caminhoArquivo);

// Pragma Setup

const pragma = `PRAGMA foreign_keys = ON`;

function enableForeignKey() {
  db.run(pragma, (error) => {
    if (error) console.log("Error in process of creation exec 'pragma'");
  });
};

// Entities Setup

const USERS_SCHEMA = `
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(80),
    email VARCHAR(80),
    senha VARCHAR(100)
)`;

function CreateTableUser() {
  db.run(USERS_SCHEMA, (error) => {
    if (error) console.log(error);
  });
};

const PRODUCTS_SCHEMA = `
CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(80),
    descricao VARCHAR(200),
    valor FLOAT 
)`;

  function CreateTableProduct() {
    db.run(PRODUCTS_SCHEMA, (error) => {
      if (error) console.log(error);
    });
};

const CARRINHO_SCHEMA = `
CREATE TABLE carrinho (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    status VARCHAR(20),
    user_id INTEGER,
    product_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
)`;

  function CreateTableCarrinho() {
    db.run(CARRINHO_SCHEMA, (error) => {
      if (error) console.log(error);
    });
  };

("");
db.serialize(() => {
  enableForeignKey();
  CreateTableUser();
  CreateTableProduct();
  CreateTableCarrinho();
});