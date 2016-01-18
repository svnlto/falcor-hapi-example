export default [
  {
    method: 'GET',
    path: '/test',
    handler: (req, reply) => {
      const resp = reply('GET Hello, world!!!');
      return resp;
    }
  }
];
