const Producto = require('./producto.model');

const createProducto = async (producto) => {
  const newProducto = new Producto(producto);
  return await newProducto.save();
};

const getProducto = async (id) => {
  return await Producto.findById(id);
};

const getProductos = async () => {
  return await Producto.find();
};

const updateProducto = async (id, producto) => {
  return await Producto.findByIdAndUpdate(id, producto, { new: true });
};

const deleteProducto = async (id) => {
  return await Producto.findByIdAndRemove(id);
};

module.exports = { createProducto, getProducto, getProductos, updateProducto, deleteProducto };