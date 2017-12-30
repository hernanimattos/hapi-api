const Hapi = require('hapi');
const Routes = require('./routes');
const Config = require('./config/config.js').get('dev');

const server = Hapi.server({
  host: Config.host,
  port: Config.port,
});
server.route(Routes());

// Start the server
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
}

start();
