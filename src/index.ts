import * as express from "express";
import { Express } from "express-serve-static-core";
import * as bodyParser from "body-parser"; // pull information from HTML POST (express4)
import * as cors from "cors";

import extendsImplementation from "./middleware/extends.implementation.middleware.js";
import ErrorHandler from "./middleware/errors.handler.middleware.js";
import NoRouteErrorHandler from "./middleware/no.route.error.handler.middleware.js";
import mapIndexRoute from "./routes/index.route.js";

const app: Express = express();
app.set("views", "./src/views");
app.set("view engine", "pug");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(extendsImplementation);

// simulate delay
app.use((req, res, next) => setTimeout(next, 200));

mapIndexRoute(app);

app.use(ErrorHandler);
app.use(NoRouteErrorHandler);

app.set("port", 3003);

var server = app.listen(app.get("port"), "", () => {
  console.log("pm2 deploy test api running on port 3003");
});
