import instance from './config.js';

const getProductsCart = () => {
	return instance.get('/cart')
}

const getProductCart = (id) => {
	return instance.get(`/cart/${id}`)
}
const deleteProductCart = (id) => {
	return instance.delete(`/cart/${id}`);
}
const addProductCart = (book) => {
	return instance.post('/cart', book);
}
const updateProductCart = (book) => {
	return instance.put(`/cart/${book.id}`, book);
}

export  { getProductsCart, deleteProductCart, addProductCart, updateProductCart, getProductCart};