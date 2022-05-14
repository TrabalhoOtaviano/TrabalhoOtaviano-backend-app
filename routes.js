import express from 'express';
import clients from './src/controllers/clients.js';
import profissional from './src/controllers/profissional.js';
import servico from './src/controllers/servico.js';

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

routes.get('/servico',servico.findAll);
routes.get('/servico/:id',servico.findServico);
routes.put('/servico/:id',servico.updateServico);
routes.delete('/servico/:id',servico.deleteServico);
routes.post('/servico', servico.addServico);

export { routes as default };