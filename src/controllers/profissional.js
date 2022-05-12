import ProfissionalRepository  from '../models/profissionalModel.js';

function findAll(req,res){
    ProfissionalRepository.findAll().then( (result) => res.json(result));
}

function findProfissional(req,res){
    ProfissionalRepository.findByPk(req.params.id)
    .then( (result) => res.json(result))
}

function addProfissional(req,res){
    ProfissionalRepository.create({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        data_nascimento:req.body.data_nascimento,
        telefone:req.body.telefone,
        sexo:req.body.sexo
    }).then( (result) => res.json(result))
};

async function updateProfissional(req,res){
    await ProfissionalRepository.update({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        data_nascimento:req.body.data_nascimento,
        telefone:req.body.telefone,
        sexo:req.body.sexo
    },
    {
        where: {
          id: req.params.id
    }
    });

    ProfissionalRepository.findByPk(req.params.id)
    .then( (result) => res.json(result))
};

async function deleteProfissional(req,res){
    await ProfissionalRepository.destroy({
        where: {
          id: req.params.id
        }
      });

      ProfissionalRepository.findAll().then((result) => res.json(result));
};

export default { findAll, addProfissional, findProfissional, updateProfissional, deleteProfissional } 

