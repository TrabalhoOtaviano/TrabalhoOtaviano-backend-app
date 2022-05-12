import ServicoRepository  from '../models/servicoModel.js';

function findAll(req,res){
    ServicoRepository.findAll().then( (result) => res.json(result));
}

function findServico(req,res){
    ServicoRepository.findByPk(req.params.id)
    .then( (result) => res.json(result))
}

function addServico(req,res){
    ServicoRepository.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        disponibility: req.body.disponibility,
     
    }).then( (result) => res.json(result))
};

async function updateServico(req,res){
    await ServicoRepository.update({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        disponibility: req.body.disponibility,
        
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

