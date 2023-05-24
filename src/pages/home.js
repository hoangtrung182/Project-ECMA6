import Header from '../components/header.js';
import Footer from '../components/footer.js';
import data from '../data.json';
import { star } from '../components/logo.js';
import { addDot } from './product.js';

const convertTitleCase = function(title) {
	const capitalize = str => str[0].toUpperCase() + str.slice(1);
	    
	const newTitle = title
	    .toLowerCase()
	    .split(' ')
	    .map(word => capitalize(word))
	    .join(' ')
  
  return newTitle;
}

const Home = () => {
	return `
		<div>
			${Header()}
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
					<div class="basis-4/5 grid grid-cols-4 gap-3 bg-white m-4 rounded ">
		            ${ data.map(function (book) {
		                return /*html*/`
		                <a href="/product/${book.id}" class="block group m-2 p-4 border rounded shadow hover:shadow-slate-600">
		                    <img
		                        src="${book.images[0]}"
		                        alt=""
		                        class="object-cover w-full rounded aspect-square hover:scale-[1.1] transition duration-300 opacity-75"
		                    />
		                    <div class="mt-3">
			                    <h3 class="font-medium h-[70px] text-gray-900 group-hover:underline group-hover:underline-offset-4"
			                    >
			                        ${book.name.length > 48 ? convertTitleCase(book.name.slice(0, 48)) + ' ...' : convertTitleCase(book.name)}
			                    </h3>
			                    <p class="mt-1 italic text-xl text-[#ef4444]">${addDot(`${book.original_price}`)} VND</p>
			                    <div class="mt-2">
			                    	<span class="flex items-center ">Đánh giá: ${book.rating_average} ${star}</span> 
			                    </div>
		                    </div>
		                </a>      
		                `
		            	}).join("")}
	           		 </div>
           		 </div>
			</section>
			${Footer()}
		</div>
	`
}

export default Home;
