const express = require('express');
const UsuarioController = require('../controllers/usuarioController.js');
const PedidoController = require('../controllers/pedidoController.js');
const CarrinhoController = require('../controllers/carrinhoController.js');
const router = express.Router();
 
router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SelectAll);
router.get('/usuarios/:id', UsuarioController.SelectDetail);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);
router.post('/pedidos', PedidoController.Insert);
router.get('/pedidos', PedidoController.SelectAll);
router.get('/pedidos/:id', PedidoController.SelectDetail);
router.put('/pedidos/:id', PedidoController.Update);
router.delete('pedidos/:id', PedidoController.Delete);
router.post('/carrinhos', CarrinhoController.Insert);
router.get('/carrinhos', CarrinhoController.SelectAll);
router.get('/carrinhos/:id', CarrinhoController.SelectDetail);
router.put('/carrinhos/:id', CarrinhoController.Update);
router.delete('carrinhos/:id', CarrinhoController.Delete);
 
module.exports = router;
