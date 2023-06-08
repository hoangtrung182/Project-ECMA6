import '../style.css';
import Home from './pages/home.js'
import CartOrder from './pages/cart.js'
import ProductDetail from './pages/ProductDetail.js'
import NotFoundPage from './pages/notFound.js'
import { render, router } from './lib';
import Dashboard from './pages/admin/Products.js';
import AdminProductPageAdd from './pages/admin/ProductsAdd.js';
import AdminProductPageUpdate from './pages/admin/Products-Edit.js';

export const app = document.querySelector('#app');


router.on('/', () => render(Home, app));
router.on('/product', () => render(Home, app));
router.on('/cart', () => render(CartOrder, app));
router.on('/product/:id', ({ data }) => render(() => ProductDetail(data), app))


router.on('/admin/products', () => render(Dashboard, app));
router.on('/admin/products/add', () => render(AdminProductPageAdd, app));
router.on('/admin/products/edit/:id', ({ data }) => render(() => AdminProductPageUpdate(data), app))

router.notFound(() => render(NotFoundPage, app));
router.resolve();

