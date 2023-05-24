import '../style.css';
import Navigo from 'navigo'; // When using ES modules.
import Home from './pages/home.js'
import Product from './pages/product.js'
import NotFoundPage from './pages/notFound.js'



const app = document.querySelector('#app');

const getUrl = function() {
	return window.location.href
}

const string = getUrl().slice(getUrl().lastIndexOf('/') + 1)

const router = new Navigo('/');
router.on('/', function() {
	app.innerHTML = Home();
})


router.on('/product', function() {
	app.innerHTML = Home();
})

router.on(`/product/${string}`, function() {
	app.innerHTML = Product(Number(string));
})


router.on('/about', function() {
	app.innerHTML = NotFoundPage();
})

router.resolve();
