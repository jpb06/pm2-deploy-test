import { Application } from "express";
import { Request, Response } from "express-serve-static-core";

const mapIndexRoute = (server: Application) => {
  server.get("/", (req: Request, res: Response) =>
    res.render("index", {
      title: "Hello!",
      message: "This app was deployed using pm2",
    })
  );
};

export default mapIndexRoute;
