const Arena = require("bull-arena");
const EmailRoutes = require("./src/email/routes");

module.exports = (app, port, queues, Queue) => {
  const arenaConfig = Arena(
    {
      Bull: Queue,
      queues,
    },
    {
      basePath: "/arena",
      disableListen: true,
    }
  );

  // Make arena's resources (js/css deps) available at the base app route
  app.use("/", arenaConfig);
  EmailRoutes(app);
  app.listen(port, () => {
    console.log("server on port: ", port);
  });
};
