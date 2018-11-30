import * as _ from "lodash";
import * as express from "express";

import { default_request_handler } from "./handler_request";
import { default_error_handler, unknown_error_handler} from "./handler_error";

class AppBuilder {

  private app: express.Application;
  private default_request_handlers: express.RequestHandler[] = default_request_handler();
  private default_error_handlers: express.ErrorRequestHandler[] = default_error_handler();
  private request_handlers: express.RequestHandler[] = [];
  private error_handlers: express.ErrorRequestHandler[] = [];

  public static bootstrap(): AppBuilder {
    return new AppBuilder();
  }

  constructor() {
    this.app = express();   
    this.config()
  }

  public addRequestHandler(handler: express.RequestHandler): AppBuilder {
    this.request_handlers.push(handler);
    return this;
  }

  public addErrorHandler(handler: express.ErrorRequestHandler): AppBuilder {
    this.error_handlers.push(handler);
    return this;
  }

  public build(): express.Application {
    this.default_request_handlers.forEach(elem => {
      this.app.use(elem);
    });
    this.request_handlers.forEach(elem => {
      this.app.use(elem);
    });
    this.error_handlers.forEach(elem => {
      this.app.use(elem);
    });
    this.default_error_handlers.forEach(elem => {
      this.app.use(elem);
    });
    this.app.use(unknown_error_handler());

    return this.app;
  }

  config(): void {

    // view engine setup
    /*
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'ejs');
    */
    this.app.set('json spaces', 1);
    /*
    this.app.use('/api/swagger', swagger_ui.serve, swagger_ui.setup(
      require('yamljs').load(process.env.EXTERNAL ? './swagger-external.yaml' : './swagger.yaml')
    ));
    */
  }
}

export default AppBuilder;