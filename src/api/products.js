import instance from './config.js';

// instance = 'http://localhost:3000/products'
const getProducts = () => {
	return instance.get('/books')
}

const getProduct = (id) => {
	return instance.get(`/books/${id}`)
}
const deleteProduct = (id) => {
	return instance.delete(`/books/${id}`);
}
const addProduct = (book) => {
	return instance.post('/books', book);
}
const updateProduct = (book) => {
	return instance.put(`/books/${book.id}`, book);
}

export  { getProducts, deleteProduct, addProduct, updateProduct, getProduct};