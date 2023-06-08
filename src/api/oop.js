function Cart() {
	this.cart = [];
}

Cart.prototype.addProduct = function(products, id) {
	const selectedProduct = products.find(product => {
		return product.id == id
	})
	this.cart.push(selectedProduct);
	this.sum();
}

Cart.prototype.deleteProduct = function(cart, id) {
	this.cart.splice(id, 1);  //(start, delele, replace);
	this.sum();
};


Cart.prototype.sum = function() {
	const total = this.cart.reduce((acc, next) => acc + +(next.new_price), 0);
	return total;
	// document.querySelector('#sumMoney').innerHTML = `Tổng thành tiền: ${total}`
}

Cart.prototype.render = function() {
	let content = '';
	this.cart.forEach((item, index) => {
		content += `
			<tr>
				<td><h2>${item.name}</h2></td>
				<td><img src="${item.image}" /></td>
				<td><p>${item.new_price}</p></td>
				<td><button class="btn-delete" data-id="${index}">Delete</button></td>
			</tr>
		`
	})
	document.querySelector('#tbody').innerHTML = content;
}

export { Cart };