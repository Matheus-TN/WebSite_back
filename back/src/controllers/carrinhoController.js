// Define a utilização do model usuario e a dependência http-status
const Carrinho = require('../models/carrinho');
const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nomePedido = req.body.nomePedido;
    const nomeCliente = req.body.nomeCliente;
    const qtde = req.body.qtde;

 
    // Popula cada um dos campos do model com os campos recebido na request
    Carrinho.create({
        nomePedido: nomePedido,
        nomeCliente : nomeCliente,
        qtde: qtde,

    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(carrinho => {
            if (carrinho) {
                res.status(status.OK).send(carrinho);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};
 
exports.SelectAll = (req, res, next) => {
    Carrinho.findAll()
        .then(carrinho => {
            if (carrinho) {
                res.status(status.OK).send(carrinho);
            }
        })
        .catch(error => next(error));
}
 
exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;
 
    Carrinho.findByPk(id)
        .then(carrinho => {
            if (carrinho) {
                res.status(status.OK).send(carrinho);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
 
exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nomePedido = req.body.nomePedido;
    const nomeCliente = req.body.nomeCliente;
    const qtde = req.body.qtde;

 
    Carrinho.findByPk(id)
        .then(carrinho => {
            if (carrinho) {
                carrinho.update({
                    nomePedido: nomePedido,
                    nomeCliente: nomeCliente,
                    qtde: qtde,

                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
 
exports.Delete = (req, res, next) => {
    const id = req.params.id;
 
    Carrinho.findByPk(id)
        .then(carrinho => {
            if (carrinho) {
                carrinho.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
