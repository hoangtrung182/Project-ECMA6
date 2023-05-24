import { home, list, about, search } from './logo.js';

const Header = function() {
	return (
	`
		<header class="flex items-center justify-around h-16 w-full bg-slate-50">
			<div class="px-4">
				<a href="/">
					<img class="w-14" src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png" alt="">
				</a>
			</div>
			<form class="flex items-center w-[600px] h-10 pl-2 bg-transparent rounded-lg border-2">
				<span>${search}</span>
				<input type="text" placeholder="Nhập thứ bạn muốn tìm kiếm ..." class="w-[500px] h-8 px-2 rounded-lg outline-none">
				<button class="h-10 w-[100px] px-2 rounded-lg bg-transparent border-2 hover:bg-cyan-400">
					Tìm kiếm
				</button>
			</form>
			<div class="btn-container flex justify-between items-center">
				<button class="h-10 w-[130px] px-2 rounded-lg bg-transparent border-2 hover:bg-cyan-400">
					<a href="/" class="flex mx-2 text-center" data-navigo>${home}Trang chủ</a>
				</button>
				<button class="h-10 w-[125px] text-center mx-2 px-2 rounded-lg bg-transparent border-2 hover:bg-cyan-400">
					<a href="/product" class="flex justify-center" data-navigo>${list}Product</a>
				</button>
				<button class="h-10 w-[125px] text-center px-2 rounded-lg bg-transparent border-2 hover:bg-cyan-400">
					<a href="/about" class="flex justify-center">${about}About</a>
				</button>
			</div>
		</header>
	`
	)
}

export default Header;