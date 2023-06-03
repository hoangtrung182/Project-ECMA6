import '../style.css';
import Home from './pages/home.js'
import ProductDetail from './pages/ProductDetail.js'
import NotFoundPage from './pages/notFound.js'
import { books } from '../data.json';
import { render, router } from './lib';


export const app = document.querySelector('#app');


router.on('/', () => render(Home, app));
router.on('/product', () => render(Home, app));
router.on('/about', () => render(NotFoundPage, app));
router.on('/product/:id', ({ data }) => render(() => ProductDetail(data), app))
router.notFound(() => render(NotFoundPage, app));


router.resolve();

// router.on('/product', function() {
// 	app.innerHTML = Home();
// })

// get url params = BOM location
// Location
// router.on('/product/:id', function({ data }) {
// 	products.forEach(item => {
// 		if(item.id !== data.id) {
// 			render(NotFoundPage, app); 
// 		}
// 	})
// 	render(() => Product(data), app)
// })

// router.on('/about', function() {
// 	app.innerHTML = NotFoundPage();
// })

// router.on('/:word', function() {
// 	app.innerHTML = NotFoundPage();
// })

// End router


