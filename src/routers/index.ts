import RouterBuilder from "../server/router_builder";
import { Router, Request, Response, NextFunction } from "express";
import { router_default_v1 } from "./router_default";

namespace Default {
  export function router_api(): Router {
    return new RouterBuilder("/api").addRouter(router_default_v1()).build();
  }
}

export = Default;
