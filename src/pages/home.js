import Header from '../components/header.js';
import Footer from '../components/footer.js';
import { books } from '../../data.json';
import ProductList from '../components/ProductList.js';
import { star, addDot } from '../components/logo.js';
import { useState, useEffect } from '../lib';

const Home = () => {
	const [data, setData] = useState([]);
	const [title, setTitle] = useState("");

	useEffect(() => {
		const getData = function() {
			fetch('http://localhost:3000/books')
				.then(res => res.json())
				.then(value => setData(value))
				.catch(err => console.log(err))
		}
		getData();

		const filterContainer = document.querySelector('.filter-container');
		const filterTitle = document.querySelector('#filter-title');

		filterContainer.addEventListener('click', function(e) {
			const { filter } = e.target.dataset;
			// filterTitle.innerHTML = title;

			switch(filter) {
				case "best": 
					const bestPrices = [...data].sort((a, b) => {
						return (b.quantity_sold?.value || 0) - (a.quantity_sold?.value || 0)
					})
					setData(bestPrices);
					setTitle(e.target.innerText);					
					// setActive(!active)
					break;
				case "maxPrice":
					const descending = [...data].sort((a, b) => {
						return b.new_price - a.new_price
					})

					setData(descending);
					setTitle(e.target.innerText);							
					break;
				case "minPrice" :
					const ascending = [...data].sort((a, b) => {
						return a.new_price - b.new_price
					})

					setData(ascending);
					setTitle(e.target.innerText);					
					break;
				case "rating": 
					const ratingStar = [...data].sort((a, b) => {
						return b.rating_average - a.rating_average
					})

					setData(ratingStar);
					setTitle(e.target.innerText);					
					break;
				case "popular":
					setData(products);
					setTitle(e.target.innerText);					
					break;
				default: 
					return;
			}
		})

		filterTitle.innerHTML = title && `
				<span class="font-bold font-md underline">
					Bạn đang lọc sản phảm theo: ${title || ""}
				</span>`;

		const searchInput = document.querySelector('#search__input');
		const searchBtn = document.querySelector('#search__btn');
		// console.log(searchInput);

		searchBtn.addEventListener('click', function(e) {
			e.preventDefault();
			const filterItems = data.filter(product => {
				if (
			          product.name
			            .toLowerCase()
			            .normalize("NFD")
			            .replace(/[\u0300-\u036f]/g, "")
			            .replace(/đ/g, "d")
			            .replace(/Đ/g, "D")
			            .indexOf(
			              	searchInput.value
			                .toLowerCase()
			                .normalize("NFD")
			                .replace(/[\u0300-\u036f]/g, "")
			                .replace(/đ/g, "d")
			                .replace(/Đ/g, "D")
			            ) > -1
			        ) return product
			})

			if(searchInput.value === '') {
				setData(products)
			} else {
				setData(filterItems);
			}

			setTitle(searchInput.value);
		})
	})

	return (`
		<div>
			${ Header([ title ]) }
			<section class="bg-slate-200">
				<div class="w-full h-8 leading-8 text-medium bg-yellow-500 text-white px-2">
					<span>Home ></span>
				</div>
				<div class="w-full flex flex-row my-2 mx-2 ">
					<nav class="basis-1/5 bg-white m-4 rounded">
						<h2 class="font-bold m-4">Nổi bật</h2>
						<ul>
							<li class="flex items-center mx-2 rounded px-4 py-2 hover:bg-slate-200">
								<img src="https://picsum.photos/30/31" class="rounded mr-2" alt="">
								<a href="/">Tiki ChatGPT</a>
							</li>
							<li class="flex items-center mx-2 rounded px-4 py-2 hover:bg-slate-200">
								<img src="https://picsum.photos/30/32" class="rounded mr-2" alt="">
								<a href="/">Tiki Exchange</a>
							</li>
							<li class="flex items-center mx-2 rounded px-4 py-2 hover:bg-slate-200">
								<img src="https://picsum.photos/30/29" class="rounded mr-2" alt="">
								<a href="/">Giá rẻ mỗi ngày</a>
							</li>
							<li class="flex items-center mx-2 rounded px-4 py-2 hover:bg-slate-200">
								<img src="https://picsum.photos/30/28" class="rounded mr-2" alt="">
								<a href="/">Xả kho</a>
							</li>
							<li class="flex items-center mx-2 rounded px-4 py-2 hover:bg-slate-200">
								<img src="https://picsum.photos/29/30" class="rounded mr-2" alt="">
								<a href="/">Mã giảm giá</a>
							</li>
							<li class="flex items-center mx-2 rounded px-4 py-2 hover:bg-slate-200">
								<img src="https://picsum.photos/28/30" class="rounded mr-2" alt="">
								<a href="/">Đóng tiền, nạp thẻ</a>
							</li>
							<li class="flex items-center mx-2 rounded px-4 py-2 hover:bg-slate-200">
								<img src="https://picsum.photos/31/30" class="rounded mr-2" alt="">
								<a href="/">Mua trước trả sau</a>
							</li>
							<li class="flex items-center mx-2 rounded px-4 py-2 hover:bg-slate-200">
								<img src="https://picsum.photos/32/30" class="rounded mr-2" alt="">
								<a href="/">Bảo hiểm Tiki360</a>
							</li>
						</ul>
					</nav>
					<div class="basis-4/5 bg-slate-200 m-4">
						<div class="filter-container flex items-center bg-white h-10 mb-2 rounded text-center">
							<p class="h-8 w-[100px] bg-black text-white rounded mx-4 px-2 cursor-pointer border hover:bg-white hover:text-black" data-filter="popular">Phổ biến</p>
							<p class="h-8 w-[100px] bg-black text-white rounded mx-4 px-2 cursor-pointer border hover:bg-white hover:text-black" data-filter="best">Bán chạy</p>
							<p class="h-8 w-[100px] bg-black text-white rounded mx-4 px-2 cursor-pointer border hover:bg-white hover:text-black" data-filter="maxPrice">Giá cao</p>
							<p class="h-8 w-[100px] bg-black text-white rounded mx-4 px-2 cursor-pointer border hover:bg-white hover:text-black" data-filter="minPrice">Giá Thấp</p>
							<p class="h-8 w-[100px] bg-black text-white rounded mx-4 px-2 cursor-pointer border hover:bg-white hover:text-black" data-filter="rating">Đánh giá</p>
						</div>
						<div class="bg-white rounded">
							<span id="filter-title" class="p-4"></span>
							<div class="grid grid-cols-4 gap-3">
					            ${ 
					            	data.map((book) => {
					            		return ProductList({ book })
					            	}).join("")
					            }
				            </div>
			            </div>
	           		 </div>
           		 </div>
			</section>
			${Footer()}
		</div>`
	)
}

export default Home;
