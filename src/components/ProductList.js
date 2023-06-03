// import { addDot } from '../pages/ProductDetail.js';
import { star, addDot, convertTitleCase } from './logo.js';


const ProductList = ({ book: { id, name, images, original_price, new_price, quantity_sold, rating_average, description } }) => {
	return /*html*/`
    <a href="/product/${id}" class="block group m-2 p-4 border rounded shadow hover:shadow-slate-600">
        <img
            src="${images[0]}"
            alt=""
            class="object-cover w-full rounded aspect-square hover:scale-[1.1] transition duration-300 opacity-75"
        />
        <div class="mt-3">
            <h3 class="font-medium h-[70px] text-gray-900 group-hover:underline group-hover:underline-offset-4"
            >
                ${name.length > 48 ? convertTitleCase(name.slice(0, 48)) + ' ...' : convertTitleCase(name)}
            </h3>
            <p class="mt-1 italic text-xl text-[#ef4444]">${addDot(`${original_price}`)} VND</p>
            <div class="mt-2">
            	<span class="flex items-center ">Đánh giá: ${rating_average} ${star}</span> 
            </div>
        </div>
    </a>      
    `
}

export default ProductList;