

const Hapi = require('hapi');
const hapiJwt = require('hapi-auth-jwt');


 const server = Hapi.server({
  host: 'localhost',
  port: 8000,
});

server.register(require('hapi-auth-jwt'), (err) => {
	server.auth.strategy('token', 'jwt', {

		key: 'vZiYpmTzqXMp8PpYXKwqc9ShQ1UhyAfy',

		verifyOptions: {
			algorithms: ['HS256'],
		}

	});

});

server.route({
  method: 'GET',
  path: '/games',
  handler(request, h) {
	return `Hello ${encodeURIComponent(request.params.name)}`;
	//   const getOperation = Knex('games').where({

	// 	  isPublic: true

	//   }).select('name').then((results) => {
	// 	  console.log('foi, sim viu')

	// 	  if (!results || results.length === 0) {

	// 		  reply({

	// 			  error: true,
	// 			  errMessage: 'no public bird found',

	// 		  });

	// 	  }
	// 		  reply({

	// 			  dataCount: results.length,
	// 			  data: results,

	// 		  });

	// 	  }).catch((err) => {

	// 		  reply('server-side error');

	// 	  });


  },
});


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
