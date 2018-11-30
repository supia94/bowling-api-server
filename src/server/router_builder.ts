import * as express from 'express';
import * as _ from 'lodash';

export default class RouterBuilder {

  private routers: express.Router[] = [];
  private path: string;
  private router: express.Router;

  constructor(path: string = '') {
    this.router = express.Router();
    this.path = path;
  }

  public addRouter(router: express.Router, path: string = '') {
    this.router.use(this.path + path, router);
    return this;
  }

  public get(path: string, handler: express.RequestHandler) {
    this.router.get(this.path + path, handler);
    return this;
  }

  public post(path: string, handler: express.RequestHandler) {
    this.router.post(this.path + path, handler);
    return this;
  }

  public put(path: string, handler: express.RequestHandler) {
    this.router.put(this.path + path, handler);
    return this;
  }

  public delete(path: string, handler: express.RequestHandler) {
    this.router.delete(this.path + path, handler);
    return this;
  }

  public build():express.Router {
    /*
    this.routers.forEach(elem => {
      if (this.path !== '/') {
        this.router.use(this.path, elem);
      } else {
        this.router.use(elem);
      }
    });
    */
    return this.router;
  }
}
