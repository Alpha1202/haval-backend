import 'regenerator-runtime/runtime';
import express from 'express';

import { sequelize } from './db/models';
import middlewareConfig from './db/config/middlewares';
import config from './db/config/config';
import { UserRoutes } from './modules';

const { port } = config;

const app = express();
middlewareConfig(app);

app.all('/', (req, res) => res.status(200).send({
  message: 'welcome to home'
}));

app.use('/api/v1/users', UserRoutes);

app.listen(port, async () => {
  console.log(`Welcome, listening on ${port}`);
  await sequelize.authenticate();
  console.log('Database Connected!');
});
