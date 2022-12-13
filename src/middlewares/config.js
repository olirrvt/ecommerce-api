const middlewaresConfig = (app, Express, cors) => {

  app.use(Express.json());

  app.use((req, res, next) => {
    next();
  });

  const options = {
    origin: ["*"]
  };

  app.use(cors(options));

};

export default middlewaresConfig;
