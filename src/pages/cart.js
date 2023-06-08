import { useState, useEffect } from '../lib';
import { Cart } from '../api/oop.js';

const CartOrder = () => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const listItem = JSON.parse(sessionStorage.getItem('products')) || [];
		setCart(listItem);		
	}, [])

	// if(cart.length <= 0) {
	// 	return `<h2>Nothing</h2>`
	// }

	useEffect(() => {
		const tableContainer = document.querySelector('.tableContainer');
		tableContainer.addEventListener('click', function(e) {
			e.preventDefault();
			if(e.target.classList.contains('btn-delete')) {
				const { id } = e.target.dataset;
				const newCart = cart.filter((item, index) => index !== +id);
				setCart(newCart);
				sessionStorage.setItem('products', JSON.stringify(newCart));
			}
		});
		const sum = () => {
			const total = cart.reduce((acc, num) => acc + +(num.new_price), 0);
			return total;
		};

		document.querySelector('#sumMoney').innerHTML = `Tổng thành tiền: ${sum()} VND`
	})

	return `

		<button class="btn-delete inline-block rounded bg-indigo-600 px-4 py-2 hover:bg-red-500 text-xs font-medium text-white hover:bg-indigo-700">
			<a href="/">Back</a>
		</button>
		<div>
			<h2 class="text-center font-bold text-purple-800 text-5xl my-10">Dashboard</h2>
		</div>
		<div class="bg-slate-200">
		  <table class="min-w-1000px divide-y-2 m-auto divide-gray-200 bg-white text-sm">
		    <thead class="ltr:text-left rtl:text-right">
		      <tr>
		        <th class="whitespace-nowrap px-4 py-2 font-bold text-purple-800">
		          Tên sản phẩm
		        </th>
		        <th class="whitespace-nowrap px-4 py-2 font-bold text-purple-800">
		          Giá gốc
		        </th>
		        <th class="whitespace-nowrap px-4 py-2 font-bold text-purple-800">
		          Giá khuyến mãi
		        </th>
		        <th class="whitespace-nowrap px-4 py-2 font-bold text-purple-800">
		          Đánh giá
		        </th>
		        <th class="whitespace-nowrap px-4 py-2 font-bold text-purple-800">
		        	Thao tác
		        	</th>
		      </tr>
		    </thead>
		    <tbody class="tableContainer divide-y divide-gray-200">
		    ${
		    	cart.map((item, index) => {
		    		return `
		    			 <tr class="odd:bg-gray-50">
					        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
					         ${item.name}
					        </td>
					        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${item.original_price}</td>
					        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${item.new_price}</td>
					        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
					        	<img src="${item.images}" width="100px"/>
					        </td>

							<td class="whitespace-nowrap px-4 py-2">
						      <button
						      	data-id="${index}"
						        class="btn-delete inline-block rounded bg-indigo-600 px-4 py-2 hover:bg-red-500 text-xs font-medium text-white hover:bg-indigo-700"
						      >
						        Delete
						      </button>
						    </td>
					      </tr>
		    		`
		    	}).join('')
		    }
		    </tbody>
		  </table>
		  <div id="sumMoney"></div>
		</div>
	`
}

export default CartOrder;