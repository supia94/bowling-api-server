import RouterBuilder from "../server/router_builder";
import { Router, Request, Response, NextFunction } from "express";

namespace DefaultRouter {
  export function router_default_v1(): Router {
    return new RouterBuilder("/v1")
      .get("/version", (req: Request, res: Response, next: NextFunction) => {
        res.json({ version: 1.0, name: "default api" });
      })
      .build();
  }
}

export = DefaultRouter;
