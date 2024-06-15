import express from 'express';
import startServer from './connect/load';
import injectRoutes from './routes';
import injectMiddlewares from './connect/middlewares';

const server = express();

injectMiddlewares(server);
injectRoutes(server);
startServer(server);

export default server;
