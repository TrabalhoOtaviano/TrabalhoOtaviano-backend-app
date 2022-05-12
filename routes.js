import express from 'express';
import clients from './src/controllers/clients.js';
import profissional from './src/controllers/profissional.js';

const routes = express.Router();

routes.get('/clients',clients.findAll);
routes.get('/clients/:id',clients.findClient);
routes.put('/clients/:id',clients.updateClient);
routes.delete('/clients/:id',clients.deleteClient);
routes.post('/clients', clients.addClient);

routes.get('/profissional',profissional.findAll);
routes.get('/profissional/:id',profissional.findProfissional);
routes.put('/profissional/:id',profissional.updateProfissional);
routes.delete('/profissional/:id',profissional.deleteProfissional);
routes.post('/profissional', profissional.addProfissional);



export { routes as default };