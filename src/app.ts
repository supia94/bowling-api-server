import AppBuilder from "./server/app_builder";
import { Router } from "express";

export default class App {
  private builder: AppBuilder;
  private routers: Router[] = [];

  private router;

  constructor() {
    this.builder = new AppBuilder();
  }

  public addRouter(router: Router): App {
    this.routers.push(router);
    return this;
  }

  public addRouters(routers: Router[]): App {
    this.router = [...this.routers, ...routers];
    return this;
  }

  public build() {
    this.routers.forEach(elem => {
      this.builder.addRequestHandler(elem);
    });
    return this.builder.build();
  }
}
