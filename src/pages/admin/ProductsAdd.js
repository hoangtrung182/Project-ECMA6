import { useState, useEffect, router } from "../../lib";
import axios from 'axios';
import { addProduct } from '../../api/products.js';


const AdminProductPageAdd = () => {
	useEffect(() => {
		const form = document.querySelector('#form-add');
		const productName = document.querySelector('#product-name');
		const productPrice1 = document.querySelector('#product-oldPrice');
		const productPrice2 = document.querySelector('#product-newPrice');
		const productDesc = document.querySelector('#product-desc');
		const productRate = document.querySelector('#product-rate');
		const productImage = document.querySelector('#product-image');


		form.addEventListener('submit', async function(e) {
			e.preventDefault();			
			// const newProduct = {
			// 	name: productName.value,
			// 	original_price: productPrice1.value,
			// 	new_price: productPrice2.value,
			// 	rating_average: productRate.value,
			// 	description: productDesc.value,
			// 	images: productImage.value
			// };

			// console.log(newProduct)

			const data = new FormData(form);
			const newProduct = {
				name: data.get("name"),
				original_price: data.get("originalPrice"),
				new_price: data.get("newPrice"),
				rating_average: data.get("rating"),
				description: data.get("description"),
				images: data.get("image")
			}
			
			try {
				await addProduct(newProduct);
				router.navigate('/admin/products')
			} catch(err) {
				console.log(err)
			}
		})
		
	})

	return `
	<div class="bg-slate-200"> 
		<h1 class="text-center font-bold text-5xl text-purple-800 pt-4">Thêm sản phẩm</h1>
		<section class="bg-slate-200">
		  <div class="mx-auto max-w-800px px-5 py-10">
		    <div class=" gap-y-8 lg:grid-cols-5">

		      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
		        <form class="space-y-4" id="form-add">
		          <div>
		            <label class="sr-only">Tên sản phẩm</label>
		            <input
		              class="border border-black w-full rounded-lg border-gray-200 p-3 text-sm"
		              placeholder="Tên sản phẩm"
		              type="text"
		              id="product-name"
		              name="name"
		            />
		          </div>
		          <div>
		            <label class="sr-only">Giá gốc</label>
		            <input
		              class="border border-black w-full rounded-lg border-gray-200 p-3 text-sm"
		              placeholder="Giá gốc"
		              type="number"
		              id="product-oldPrice"
		              name="originalPrice"
		            />
		          </div>
		          <div>
		            <label class="sr-only">Giá khuyến mại</label>
		            <input
		              class="border border-black w-full rounded-lg border-gray-200 p-3 text-sm"
		              placeholder="Giá khuyển mại"
		              type="number"
		              id="product-newPrice"
		              name="newPrice"
		            />
		          </div>
		          <div>
		            <label class="sr-only">Đánh giá</label>
		            <input
		              class="border border-black w-full rounded-lg border-gray-200 p-3 text-sm"
		              placeholder="Đánh giá"
		              type="text"
		              id="product-rate"
		              name="rating"
		            />
		          </div>

		          <div>
		            <label class="sr-only">Hình ảnh</label>
		            <input
		              class="border border-black w-full rounded-lg border-gray-200 p-3 text-sm"
		              placeholder="Ảnh"
		              type="text"
		              id="product-image"
		              name="image"
		            />
		          </div>

		          <div>
		            <label class="sr-only">Mô tả</label>
		            <textarea
		              class="border border-black w-full rounded-lg border-gray-200 p-3 text-sm"
		              placeholder="Mô tả sản phẩm"
		              rows="8"
		              id="product-desc"
		              name="description"
		            ></textarea>
		          </div>

		          <div class="mt-4">
		            <button
		              class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
		            >
		              ADD
		            </button>
		          </div>
		        </form>
		      </div>
		    </div>
		  </div>
		</section>
	</div>
	`
}

export default AdminProductPageAdd;



// <form action="" id="form-add">
	    //   <div class="form-group mb-3">
	    //     <label>Tên sản phẩm</label>
	    //     <input type="text" placeholder="Tên sản phẩm" id="product-name" class="block h-10 w-[80%] px-2 rounded-lg bg-transparent border hover:bg-neutral-700 hover:text-white">
	    //   </div>

	    //   <div class="form-group mb-3">
	    //     <label>Giá sản phẩm gốc</label>
	    //     <input type="text" placeholder="Giá sản phẩm" id="product-oldPrice" class="block h-10 w-[80%] px-2 rounded-lg bg-transparent border hover:bg-neutral-700 hover:text-white">
	    //   </div>

	    //   <div class="form-group mb-3">
	    //     <label>Giá sản phẩm mới</label>
	    //     <input type="text" placeholder="Giá sản phẩm" id="product-newPrice" class="block h-10 w-[80%] px-2 rounded-lg bg-transparent border hover:bg-neutral-700 hover:text-white">
	    //   </div>

	    //   <div class="form-group mb-3">
	    //     <label>Mo ta</label>
	    //     <input type="text" placeholder="Mo ta sản phẩm" id="product-desc" class="block h-10 w-[80%] px-2 rounded-lg bg-transparent border hover:bg-neutral-700 hover:text-white">
	    //   </div>

	    //   <div class="form-group mb-3">
	    //     <label>Đánh giá sản phẩm</label>
	    //     <input type="text" placeholder="Đánh giá sản phẩm" id="product-rate" class="block h-10 w-[80%] px-2 rounded-lg bg-transparent border hover:bg-neutral-700 hover:text-white">
	    //   </div>

	    //   <div class="form-group mb-3">
	    //     <label>Ảnh</label>
	    //     <input type="text" placeholder="Ảnh sản phẩm" id="product-image" class="block h-10 w-[80%] px-2 rounded-lg bg-transparent border hover:bg-neutral-700 hover:text-white">
	    //   </div>
	    //   <button class="inline-block rounded bg-indigo-600 px-4 py-2 hover:bg-red-500 text-xs font-medium text-white hover:bg-indigo-700">
	    //   	ADD
	    //   </button>
    	// </form>
