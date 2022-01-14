module.exports = {
    apps : [{
      script: './src/server.js',
      exec_mode: 'cluster',
      name: 'console-notifier-app',
      instances: 4
    }]
  };
