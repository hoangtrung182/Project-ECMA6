import Header from '../components/header.js';
import Footer from '../components/footer.js';
import OtherProducts from '../components/OtherProducts.js';
import NotFoundPage from './notFound.js';
import { star, up, convertTitleCase, addDot } from '../components/logo.js';
import { useEffect, useState, router } from '../lib';
import { getProduct, getProducts } from '../api/products.js';
import { addProductCart } from '../api/cart.js';

const ProductDetail = ({ id }) => {
	const [product, setProduct] = useState({});
	const [allBooks, setAllBooks] = useState([]);
	const [showMore, setShowmore] = useState(true);
	const [count, setCount] = useState(1);

	const displayMore = (state) => {
		setShowmore(!state)
	};
	
	useEffect(() => {
		const getData = async () => {
			try {
				const res = await getProducts()
				setAllBooks(res.data)
			} catch(err) {
				console.log(err)
			}
		}
		getData();
	}, [])

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await getProduct(id)
				setProduct(res.data)
			} catch(err) {
				console.log(err)
			}
		}
		getData();
	}, [])

	useEffect(() => {
		const main_img = document.querySelector('.main-img');
		const listImg = document.querySelectorAll('.imgClass')
		const imgContainer = document.querySelector('.imgContainer');

		// Better
		// imgContainer.addEventListener('mouseover', function(e) {
		// 	const hover = e.target.closest('.imgClass');

		// 	if(!hover) return;
		// 	main_img.src = hover.src;
		// })
		const section1 = document.querySelector('.section-1'); //section-1: header 
		const btnGoTop = document.querySelector('.gotop');
		const showBtn = document.querySelector('#btn-show');
		const btnDecrease = document.querySelector('.btn-decrease');
		const btnIncrease = document.querySelector('.btn-increase');

		btnGoTop.addEventListener('click', function() {
			section1.scrollIntoView({ behavior: 'smooth' })
		})

		// Show more description
		// showBtn.addEventListener('click', () => displayMore(showMore)));
		showBtn.addEventListener('click', displayMore.bind(null, showMore));

		// Count products
		btnDecrease.addEventListener('click', () => {
			if(count <= 0) {
				return 0
			};
			setCount(count - 1);
		})

		btnIncrease.addEventListener('click', () => {
			setCount(count + 1);
		})


		// Add product to cart
		const btnOrder = document.querySelector('.btn-order');
		btnOrder.addEventListener('click',async function() {
			const newProduct = allBooks.find(item => item.id === +id)
			const packProduct = {...newProduct, quantity: count};

			try {
				await addProductCart(packProduct);
				alert("Add product seccesfully");
				router.navigate(`/product/${id}`);
				// console.log('Thanh cong sp')
			} catch (err) {
				console.log(err)
			}
		})

	})

	return `
	<div>
		${Header(product.name)}
		<section class="section-2 bg-slate-200">	
			<div class="w-full h-8 leading-8 text-medium bg-yellow-500 text-white px-2">
				<span>
					<a href="/" class="hover:underline">
						Home</a> > <a href="/product" class="hover:underline">Product</a> > ${product.name ?? ""}
				</span>
			</div>
			<div class="flex p-2 m-2">
				<div class="basis-2/5 bg-white m-2 rounded">
					<div class="text-center items-centers">
		                <img
		                    src="${product.images ?? ""}"
		                    alt=""
		                    class="main-img object-cover w-[300px] h-[400px] p-4 m-auto cursor-pointer rounded hover:scale-[1.1] transition duration-300"
		                />
					</div>
	               
	            </div>
	            <div class="basis-3/5 bg-white m-2 rounded">
	            	<p class="px-4 py-2">Tác giả: </p>
	            	<h3 class="text-3xl font-thin py-2 px-4 ">${product.name ?? ""}</h3>
	            	<span class="px-4 font-thin">
	            		Đánh giá: ${product.rating_average ?? ""} ${product?.quantity_sold ? '| ' + product?.quantity_sold?.text : ''}
	            	</span>
	            	<div class="h-[80px] border rounded px-4 m-4 bg-[#fee2e2]">
	            		<p class="text-3xl text-[#ef4444] leading-[80px]">
	            			${addDot(`${product.new_price ?? ""}`)} vnđ
	            			<span class="line-through text-sm text-[#525252] ml-1">
	            				${addDot(`${product?.original_price || ""} vnđ`)}
	            			</span>
	            			<span class="text-[#ef4444] text-sm mx-2 font-semibold">
	            				${`- ${Math.floor((1 - product.new_price / product.original_price) * 100) || ""}%`}
	            			</span>
	            		</p>
	            	</div>
	            	<div class="mx-4 py-2">
	            		<h4 class="text-lg font-bold mx-2">Mô tả sản phẩm</h4>
	            		<p id="para" class="py-2">
	            			${showMore ? product.description : "..."}
	            			<div class="p-2 bg-slate-200 w-[60px] rounded hover:bg-slate-100">
	            				<button id="btn-show" class=""">${showMore ? 'Hide' : 'More'}</button>
	            			</div>
	            		</p>
	            	</div>
	            	<div class="border p-2">
	            		<h4 class="font-bold p-2">Số lượng</h4>
	            		<div class="flex items-center">
		            		<button class="btn-decrease h-10 w-[40px] border hover:bg-orange-200"> - </button>
		            		<span class="inline-block leading-[40px] text-center h-10 w-[40px] border">${count}</span>
		            		<button class="btn-increase h-10 w-[40px] border hover:bg-orange-200"> + </button>
	            		</div>
	            	</div>
	            	<div class="p-4 flex justify-around items-center">
	            		<button class="btn-order border rounded bg-red-500 text-white font-bold h-[50px] w-[300px] mr-2 hover:opacity-70" data-id="${product.id}">Chọn mua</button>
	            		<button class="border border-cyan-600 rounded font-bold bg-transparent text-cyan-600 h-[50px] w-[300px] hover:opacity-70">Mua trước trả sau<p>Lãi suất 0%</p></button>
	            	</div>
	            </div>
            </div>
        </section>
         <section class="bg-slate-200 p-4 my-6">
        	<h2 class="text-3xl font-thin py-2 px-4">Sản phẩm khác</h2>
        	<div class="flex items-center justify-between m-auto">
        		${
        			allBooks.filter(item => item.id !== product.id).map(item => {
        				return OtherProducts(item)
        			}).join('')
        		}
        	</div>	
        </section>
        
        <button class="gotop flex justify-left text-sm h-8 fixed bottom-10 right-5 w-[120px] px-2 rounded-lg border-2 outline-none opacity-60 hover:bg-neutral-700 hover:text-white">
        	<p>Back to Top</p>
        	${up}
        </button>
		${Footer()}
	</div>
	`
}

export default ProductDetail;

