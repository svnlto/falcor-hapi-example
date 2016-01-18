import Hapi from 'hapi';
import falcorRoutes from './routes/falcorRoutes';
import restRoutes from './routes/restRoutes';

const server = new Hapi.Server({
  connections: {
    routes: {
      cors: {
        origin: ['*'],
        credentials: true,
        additionalHeaders: ['X-Requested-With']
      }
    }
  }
});

const routes = Array.prototype.concat.apply([], [
  restRoutes, falcorRoutes
]);

const portnumber = 8088;

server.register(require('inert'), (err) => {

  server.connection({ port: portnumber });
  server.path('.');
  server.route(routes);

  if (!err && !module.parent) {
    if (!err) {
      server.start(() => {
        console.log('[node.js] API proxy server running at:', server.info.uri);
      });
    }
  }
});

export default server;
