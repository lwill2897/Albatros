const express = require('express');
const router = express.Router();
const { createProducto, getProducto, getProductos, updateProducto, deleteProducto } = require('./producto.repository');

router.post('/productos', async (req, res) => {
  try {
    const producto = await createProducto(req.body);
    res.status(201).send(producto);
  } catch (error) {
    res.status(500).send({ message: 'Error al crear producto' });
  }
});

router.get('/productos', async (req, res) => {
  try {
    const productos = await getProductos();
    res.send(productos);
  } catch (error) {
    res.status(500).send({ message: 'Error al obtener productos' });
  }
});

router.get('/productos/:id', async (req, res) => {
  try {
    const producto = await getProducto(req.params.id);
    if (!producto) {
      res.status(404).send({ message: 'Producto no encontrado' });
    } else {
      res.send(producto);
    }
  } catch (error) {
    res.status(500).send({ message: 'Error al obtener producto' });
  }
});

router.put('/productos/:id', async (req, res) => {
  try {
    const producto = await updateProducto(req.params.id, req.body);
    res.send(producto);
  } catch (error) {
    res.status(500).send({ message: 'Error al actualizar producto' });
  }
});

router.delete('/productos/:id', async (req, res) => {
  try {
    await deleteProducto(req.params.id);
    res.status(204).send({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).send({ message: 'Error al eliminar producto' });
  }
});

module.exports = router;