import config from 'config';
import express from 'express';
import router from './router/index.js';

const app = express();

app.use('/printMeAt', router);

app.listen(config.service.port, () => {
  console.log('App is running', config.service.port);
})

process.on('uncaughtException', err => {
  console.error(err);
});