import '../style.css';
import Navigo from 'navigo'; // When using ES modules.
import Home from './pages/home.js'
import Product from './pages/product.js'
import NotFoundPage from './pages/notFound.js'
import data from './data.json';

export const app = document.querySelector('#app');

// const getUrl = function() {
// 	return window.location.href
// }

// const string = getUrl().slice(getUrl().lastIndexOf('/') + 1)


const router = new Navigo('/');
router.on('/', function() {
	app.innerHTML = Home();
})

router.on('/product', function() {
	app.innerHTML = Home();
})

// get url params = BOM location
// Location
router.on('/product/:id', function(params) {
	data.forEach(item => {
		if(item.id !== Number(params.data.id)) {
			app.innerHTML = NotFoundPage(); 
		}
	})

	app.innerHTML = Product(params);
})

router.on('/about', function() {
	app.innerHTML = NotFoundPage();
})

router.on('/:word', function() {
	app.innerHTML = NotFoundPage();
})

router.resolve();
// End router

const main_img = document.querySelector('.main-img');
const listImg = document.querySelectorAll('.imgClass')
const imgContainer = document.querySelector('.imgContainer');

// listImg.forEach(img => {
// 	img.addEventListener('mouseover', function(e) {
// 		main_img.src = img.src
// 	})
// })

// Better
imgContainer.addEventListener('mouseover', function(e) {
	const hover = e.target.closest('.imgClass');

	if(!hover) return;
	main_img.src = hover.src;
})


const section1 = document.querySelector('.section-1'); //section-1: header 
const btnGoTop = document.querySelector('.gotop');

btnGoTop.addEventListener('click', function() {
	section1.scrollIntoView({ behavior: 'smooth' })
})
