import 'source-map-support/register'; // source-map을 사용하기 위해 추가함.
import App from './app';
import * as express from 'express';
import { router_api} from './routers'

const port: number = Number(process.env.PORT) || 8080;
const app: express.Application = new App().addRouter(router_api()).build();

app.listen(port, () => console.log(`Express server listening at ${port}`))
  .on('error', err => console.error(err));