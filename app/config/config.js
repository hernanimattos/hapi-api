const config = {
  dev: {
    host: 'localhost',
    port: 8000,

  },
  prod: {
    host: 'production',
    port: 8080,
  },
};

exports.get = env => config[env];
