const userController = (app, db) => {

  app.get("/", (req, res) => {
    
      const SQL = `SELECT * FROM users`;
      new Promise((resolve, reject) => {
        db.all(SQL, (erro, rows) => {
            
            if (!erro) {
                resolve(rows);
            } else {
                reject(erro);
            };

        });
      })
    
      .then((result) => res.json(result))
      .catch((error) => console.log(error));

  });

  app.post("/", (req, res) => {});

  app.put("/:id", (req, res) => {});

  app.delete("/:id", (req, res) => {});
};

export default userController;
