"use strict";
import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as swagger_ui from "swagger-ui-express";
import * as helmet from "helmet";
import * as moment from "moment";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as path from "path";

module RouterRequestHandler {
  export function default_request_handler() {
    return [
      helmet(),
      logger('dev'),
      express.json(),
      express.urlencoded({ extended: false }),
      cookieParser(),
      express.static(path.join(__dirname, 'public')),
      cors(),
      (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log(req.method, req.url, req.query);
        next();
      }
    ]
  }
}

export = RouterRequestHandler;