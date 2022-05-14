import ServicoRepository  from '../models/servicoModel.js';
import moment from 'moment'

function findAll(req,res){
    ServicoRepository.findAll().then( (result) => res.json(result));
}

function findServico(req,res){
    ServicoRepository.findByPk(req.params.id)
    .then( (result) => res.json(result))
}

function addServico(req,res){
var horaDisponibidade = moment().format('MMMM Do YYYY, h:mm:ss a') 
    ServicoRepository.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        disponibility: req.body.disponibility,
        dataDisponibilidade: req.body.dataDisponibilidade
            
    }).then( (result) => res.json(result))
};

async function updateServico(req,res){
    await ServicoRepository.update({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        disponibilidade: req.body.disponibilidade,
        dataDisponibilidade: req.body.dataDisponibilidade        
    },
    {
        where: {
          id: req.params.id
    }
    });

    ServicoRepository.findByPk(req.params.id)
    .then( (result) => res.json(result))
};

async function deleteServico(req,res){
    await ServicoRepository.destroy({
        where: {
          id: req.params.id
        }
      });

    ServicoRepository.findAll().then((result) => res.json(result));
};

export default { findAll, addServico, findServico, updateServico, deleteServico } 

