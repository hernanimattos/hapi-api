
module.exports = () => [
  {
    method: 'GET',
    path: '/',
    handler() {
      return 'home';
    },
  },
  {
    method: 'GET',
    path: '/{name}',
    handler(request, h) { // eslint-disable-line no-unused-vars
      return `Hello ${encodeURIComponent(request.params.name)}`;
    },

  },
];
