// import { addDot } from '../pages/ProductDetail.js';
import { star, addDot, convertTitleCase } from './logo.js';
import { useState, useEffect} from '../lib';

const ProductList = ({ book: { id, name, images, original_price, new_price, quantity_sold, rating_average, description } }) => {

	return /*html*/`
    <div class="productsContainer block group m-2 p-4 border rounded shadow hover:shadow-slate-600">
        <a href="/product/${id}" >
            <img
                src="${images}"
                alt=""
                class="object-cover w-full rounded aspect-square hover:scale-[1.1] transition duration-300 opacity-75"
            />
        </a>
        <div class="mt-3">
            <a href="/product/${id}">
                <h3 class="font-medium h-[70px] text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                    ${name.length > 48 ? convertTitleCase(name.slice(0, 48)) + ' ...' : convertTitleCase(name)}
                </h3>
            </a>
            <p class="mt-1 italic text-xl text-[#ef4444]">${addDot(`${new_price}`)} VND</p>
            <div class="mt-2">
            	<span class="flex items-center ">Đánh giá: ${rating_average} ${star}</span> 
            </div>
            <button class="btn-orederOut inline-block rounded bg-indigo-600 px-4 py-2 hover:bg-red-500 text-xs font-medium text-white hover:bg-indigo-700" data-id="${id}">Add to card</button>
        </div>
    </div>     
    `
}

export default ProductList;