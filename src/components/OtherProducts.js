// import { addDot } from './logo.js';
import { star, addDot } from './logo.js';

const OtherProducts = ({ id, images, rating_average, new_price}) => {
	return `
		<a href="/product/${id}" class="block border-2 rounded-md p-2 bg-white hover:bg-yellow-200 hover:scale-[1.1] transition duration-300">
			<img src="${images[0]}" class="w-[150px] mr-2 p-2" />
			<div class="mt-2">
            	<span class="flex items-center text-sm">Đánh giá: ${rating_average} ${star}</span> 
            </div>
			<p class="text-[#ef4444] text-center text-sm mx-2 font-semibold">${addDot(`${new_price}`)} VND</p>
		</a>`
}

export default OtherProducts;