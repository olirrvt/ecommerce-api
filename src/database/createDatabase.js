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
    id VARCHAR(50) PRIMARY KEY,
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
    id VARCHAR(50) PRIMARY KEY,
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
    id VARCHAR(50) PRIMARY KEY,
    status VARCHAR(20),
    user_id INT,
    product_id INT,
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