import { useState, useEffect, router } from "../../lib";
import axios from 'axios';
import { updateProduct, getProduct } from '../../api/products.js';

const AdminProductPageUpdate = ({ id }) => {
	const [currentBook, setCurrentBook] = useState({});
	
	useEffect(() => {
		const getData = async () => {
			try {
				const res = await getProduct(id);
				setCurrentBook(res.data);	
			} catch(err) {
				console.log(err)
			} 
		}	
		getData() 
	}, []);

	useEffect(() => {
		const form = document.querySelector('#form-add');
		const productName = document.querySelector('#product-name');
		const productPrice1 = document.querySelector('#product-oldPrice');
		const productPrice2 = document.querySelector('#product-newPrice');
		const productDesc = document.querySelector('#product-desc');
		const productRate = document.querySelector('#product-rate');
		const productImage = document.querySelector('#product-image');

		form.addEventListener('submit',async function(e) {
			e.preventDefault();

			const formData = {
				id,
				name: productName.value,
				original_price: productPrice1.value,
				new_price: productPrice2.value,
				rating_average: productRate.value,
				description: productDesc.value,
				images: productImage.value
			};

			try {
				await updateProduct(formData);
				router.navigate('/admin/products');
			} catch(err) {
				console.log(err);
			}
		})
	});

	return `
		<h1 class="text-center font-bold text-5xl text-purple-800 pt-4">Cập nhật sản phẩm</h1>
	    <section class="bg-slate-200">
		  <div class="mx-auto max-w-screen-xl px-4 py-10">
		    <div class="gap-y-8 lg:grid-cols-5">

		      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
		        <form class="space-y-4" id="form-add">
		          <div>
		            <label class="p-2">Tên sản phẩm</label>
		            <input
		              class="border border-black w-full rounded-lg border-gray-200 p-3 text-sm"
		              placeholder="Tên sản phẩm"
		              type="text"
		              id="product-name"
		              name="name"
		              value="${currentBook.name ?? ""}"
		            />
		          </div>
		          <div>
		            <label class="p-2">Giá gốc</label>
		            <input
		              class="border border-black w-full rounded-lg border-gray-200 p-3 text-sm"
		              placeholder="Giá gốc"
		              type="text"
		              id="product-oldPrice"
		              name="originalPrice"
		              value="${currentBook.original_price ?? ""}"
		            />
		          </div>
		          <div>
		            <label class="p-2">Giá khuyến mại</label>
		            <input
		              class="border border-black w-full rounded-lg border-gray-200 p-3 text-sm"
		              placeholder="Giá khuyển mại"
		              type="text"
		              id="product-newPrice"
		              name="newPrice"
		              value="${currentBook.new_price ?? ""}"
		            />
		          </div>
		          <div>
		            <label class="p-2">Đánh giá</label>
		            <input
		              class="border border-black w-full rounded-lg border-gray-200 p-3 text-sm"
		              placeholder="Đánh giá"
		              type="text"
		              id="product-rate"
		              name="rating"
		              value="${currentBook.rating_average ?? ""}"
		            />
		          </div>

		          <div>
		            <label class="p-2">Hình ảnh</label>
		            <input
		              class="border border-black w-full rounded-lg border-gray-200 p-3 text-sm"
		              placeholder="Ảnh"
		              type="text"
		              id="product-image"
		              name="image"
		              value="${currentBook.images ?? ""}"
		            />
		          </div>

		          <div>
		            <label class="p-2">Mô tả</label>
		            <textarea
		              class="border border-black w-full rounded-lg border-gray-200 p-3 text-sm"
		              placeholder="Mô tả sản phẩm"
		              rows="8"
		              id="product-desc"
		              name="description"
		            >${currentBook.description}</textarea>
		          </div>

		          <div class="mt-4">
		            <button
		              class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
		            >
		              Update
		            </button>
		          </div>
		        </form>
		      </div>
		    </div>
		  </div>
		</section>

	`
}

export default AdminProductPageUpdate;

