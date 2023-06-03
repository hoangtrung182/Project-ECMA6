import Navigo from 'navigo'; // When using ES modules.

const router = new Navigo('/', { linksSelector: "a", hash: true});
const render = (content, target) => {
	target.innerHTML = content();
}

export { render, router };