import { useState, useEffect } from '../../lib';
import axios from 'axios';
import { getProducts, deleteProduct } from '../../api/products.js';

const Dashboard = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await getProducts(); // return obj
				setBooks(res.data)
			} catch(error) {
				console.log(error)
			}
		}
		getData();
	}, []);

	useEffect(() => {
		// Delete product
		const tableContainer = document.querySelector('.tableContainer');
		tableContainer.addEventListener('click',async  function(e) {
			if(e.target.classList.contains('btn-delete')) {
				const { id } = e.target.dataset; 
				
				const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
				if(confirm) {
					try {
						await deleteProduct(id);
						const newBooks = books.filter(book => book.id !== +id);
						setBooks(newBooks);
					} catch(error) {
						console.log(error)
					}
				}
			}
			return ;
		});
	})

	return `
		<div class="overflow-y-auto bg-slate-200">
		<div>
			<h2 class="text-center font-bold text-purple-800 text-5xl my-10">Dashboard</h2>
		</div>
		<div class="text-center">
			<button class="absolute top-10 right-[190px]">
				<a href="./products/add" class="inline-block rounded bg-indigo-600 px-4 py-2 hover:bg-red-500 text-xs font-medium text-white hover:bg-indigo-700">
					Add Book
				</a>
			</button>
		</div class="bg-slate-200">
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
		    ${ books.map(book => {
		    		return `
		      <tr class="odd:bg-gray-50">
		        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
		          ${book.name.length > 50 ? book.name.slice(0, 40) : book.name}
		        </td>
		        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${book.original_price}</td>
		        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${book.new_price}</td>
		        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${book.rating_average}</td>

				<td class="whitespace-nowrap px-4 py-2">
			      <a href="./products/edit/${book.id}"
			        class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
			      >
			        Update
			      </a>
			      <button
			      	data-id="${book.id}"
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
		</div>
	`
}

export default Dashboard;

