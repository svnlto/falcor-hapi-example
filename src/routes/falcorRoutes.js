import FalcorServer from 'falcor-hapi';
import Router from 'falcor-router';

export default [
  {
    method: ['GET', 'POST'],
    path: '/model.json',
    handler: FalcorServer.dataSourceRoute((req, res) => {
      console.log('Request to /model.json');
      return new Router([{
        route: 'greeting',
        get: () => {
          return {
            path: ['greeting'],
            value: 'Hello World from the Falcor Server'
          };
        }
      }]);
    })
  }
];
