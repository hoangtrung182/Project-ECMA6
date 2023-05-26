import Header from '../components/header.js';
import Footer from '../components/footer.js';
import data from '../data.json';
import NotFoundPage from './notFound.js';

export const addDot = str => {
	const newStr = str.split('')
					.slice(0, -3)
					.join('') + '.' + str.slice(-3)
	return newStr;
}

let showMore = true;

const Product = (param) => {
	const currentBook = data.find(book => book.id === Number(param.data.id));
	const {name, images, original_price: original, new_price, quantity_sold, rating_average, description, short_description} = currentBook;

	return `
		<div>
			${Header()}
			<section class="bg-slate-200">
				<div class="w-full h-8 leading-8 text-medium bg-yellow-500 text-white px-2">
					<span>Home > Product > ${name}</span>
				</div>
				<div class="flex p-2 m-2">
					<div class="basis-2/5 bg-white m-2 rounded">
						<div class="text-center items-centers">
			                <img
			                    src="${images[0]}"
			                    alt=""
			                    class="main-img object-cover w-[450px] h-[400px] rounded hover:scale-[1.1] transition duration-300"
			                />
						</div>
		                <div class="imgContainer flex mt-2 justify-around">
		                ${images.map(image => {
		                	return `
		                		<img class="imgClass w-[150px] mr-2" src=${image} />
		                	`
		                }).join(' ')}
		                </div>
		            </div>
		            <div class="basis-3/5 bg-white m-2 rounded">
		            	<p class="px-4 py-2">Tác giả: </p>
		            	<h3 class="text-3xl font-thin py-2 px-4 ">${name}</h3>
		            	<span class="px-4 font-thin">
		            		Đánh giá: ${rating_average} ${quantity_sold ? '| ' + quantity_sold?.text : ''}
		            	</span>
		            	<div class="h-[80px] border rounded px-4 m-4 bg-[#fee2e2]">
		            		<p class="text-3xl text-[#ef4444] leading-[80px]">
		            			${addDot(`${new_price}`)} ₫
		            			<span class="line-through text-sm text-[#525252] ml-1">
		            				${addDot(`${original}`)} ₫
		            			</span>
		            			<span class="text-[#ef4444] text-sm mx-2 font-semibold">
		            				${`- ${Math.floor((1 - new_price / original) * 100)}%`}
		            			</span>
		            		</p>
		            	</div>
		            	<div class="mx-4 py-2">
		            		<h4 class="text-lg font-bold mx-2">Mô tả sản phẩm</h4>
		            		<p id="para" class="py-2">
		            			${showMore ? description : description.slice(0, 300) + ' ...'}
		            			<button class="inline-block">${showMore ? 'Hide' : 'More'}</button>
		            		</p>

		            	</div>
		            	<div class="border p-2">
		            		<h4 class="font-bold p-2">Số lượng</h4>
		            		<div class="flex items-center">
			            		<button class="h-10 w-[40px] border hover:bg-orange-200"> - </button>
			            		<span class="inline-block leading-[40px] text-center h-10 w-[40px] border">1</span>
			            		<button class="h-10 w-[40px] border hover:bg-orange-200"> + </button>
		            		</div>
		            	</div>
		            	<div class="p-4 flex justify-around items-center">
		            		<button class="border rounded bg-red-500 text-white font-bold h-[50px] w-[300px] mr-2 hover:opacity-70">Chọn mua</button>
		            		<button class="border border-cyan-600 rounded font-bold bg-transparent text-cyan-600 h-[50px] w-[300px] hover:opacity-70">Mua trước trả sau<p>Lãi suất 0%</p></button>
		            	</div>
		            </div>
	            </div>
            </section>
			${Footer()}
		</div>
	`
}

export default Product;

