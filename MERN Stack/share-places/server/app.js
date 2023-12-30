import express from "express";
import bodyParser from "body-parser";

import UserRoutes from "./routes/users-routes.js";
import placesRoutes from "./routes/places-routes.js";

const app = express();

app.use("/api/places", placesRoutes);

const PORT = 5000;
app.listen(PORT, function () {
  console.log("Server is running");
});
