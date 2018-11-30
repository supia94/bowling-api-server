"use strict";
import * as express from "express";

namespace RouterErrorHandler {
  export interface Error {
    status?: number;
    message?: string;
  }

  export function default_error_handler() {
    return [
      function(
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) {
        console.error("err => ", err);
        res.locals.message = err.message;
        res.locals.error = !!process.env["development"] ? err : {};
        res.status(err.status || 500);
        res.json({
          status: err.status || 500,
          message: err.message || "Internal server error."
        });
      }
    ];
  }

  export function unknown_error_handler() {
    return function(
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) {
      // next(createError(404));
      res.status(404).json({
        status: 404,
        message: "Not found."
      });
    };
  }
}

export = RouterErrorHandler;
