<template>
	<header class="sticky top-0 z-10 bg-white dark:bg-gray-900">
		<nav class="container mx-auto">
			<div
				class="relative flex flex-wrap items-center justify-between p-4 mx-auto"
			>
				<NuxtLink
					to="/"
					class="flex items-center text-xl font-bold gap-x-2"
				>
					<img
						src="https://github.com/jonnystalnaker.png"
						alt="User Image"
						class="duration-500 rounded-full transition-size"
						:class="[sticky ? 'w-16 h-16' : 'w-20 h-20']"
					/>
					<span>Jonny Stalnaker</span>
				</NuxtLink>
				<button
					type="button"
					class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					@click="toggleMenu"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					:class="[
						'absolute top-full left-0 lg:relative items-center justify-between font-medium w-full lg:flex lg:w-auto lg:order-1',
						{ hidden: !menuOpen },
					]"
				>
					<ul
						class="left-0 flex flex-col p-4 border border-gray-100 rounded-b-lg lg:items-center lg:p-0 lg:rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
					>
						<li>
							<NuxtLink
								to="/"
								class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700"
								aria-current="page"
							>
								Home
							</NuxtLink>
						</li>
						<li>
							<button
								class="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded lg:w-auto hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700"
								@click="toggleMegaMenu"
							>
								Company
								<svg
									class="w-2.5 h-2.5 ml-2.5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 1 4 4 4-4"
									/>
								</svg>
							</button>
							<transition
								enter-active-class="transition duration-200 ease-out"
								enter-from-class="transform scale-95 opacity-0"
								enter-to-class="transform scale-100 opacity-100"
								leave-active-class="transition duration-75 ease-in"
								leave-from-class="transform scale-100 opacity-100"
								leave-to-class="transform scale-95 opacity-0"
							>
								<div
									v-if="megaMenuOpen"
									ref="dropdownRef"
									class="left-0 z-20 w-full rounded-lg lg:absolute lg:mt-4 bg-gray-50 dark:bg-gray-800 lg:shadow-lg"
								>
									<div
										class="grid max-w-screen-xl pl-4 pr-4 mx-auto text-gray-900 lg:p-4 dark:text-white sm:grid-cols-2 lg:px-6"
									>
										<ul>
											<li>
												<NuxtLink
													to="/online-stores"
													class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
												>
													<div class="font-semibold">Online Stores</div>
													<span
														class="text-sm text-gray-500 dark:text-gray-400"
													>
														Connect with third-party tools that you're already
														using.
													</span>
												</NuxtLink>
											</li>
											<li>
												<NuxtLink
													to="/segmentation"
													class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
												>
													<div class="font-semibold">Segmentation</div>
													<span
														class="text-sm text-gray-500 dark:text-gray-400"
													>
														Connect with third-party tools that you're already
														using.
													</span>
												</NuxtLink>
											</li>
											<li>
												<NuxtLink
													to="/crm"
													class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
												>
													<div class="font-semibold">Marketing CRM</div>
													<span
														class="text-sm text-gray-500 dark:text-gray-400"
													>
														Connect with third-party tools that you're already
														using.
													</span>
												</NuxtLink>
											</li>
										</ul>
										<ul>
											<li>
												<NuxtLink
													to="/online-stores"
													class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
												>
													<div class="font-semibold">Online Stores</div>
													<span
														class="text-sm text-gray-500 dark:text-gray-400"
													>
														Connect with third-party tools that you're already
														using.
													</span>
												</NuxtLink>
											</li>
											<li>
												<NuxtLink
													to="/segmentation"
													class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
												>
													<div class="font-semibold">Segmentation</div>
													<span
														class="text-sm text-gray-500 dark:text-gray-400"
													>
														Connect with third-party tools that you're already
														using.
													</span>
												</NuxtLink>
											</li>
											<li>
												<NuxtLink
													to="/crm"
													class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
												>
													<div class="font-semibold">Marketing CRM</div>
													<span
														class="text-sm text-gray-500 dark:text-gray-400"
													>
														Connect with third-party tools that you're already
														using.
													</span>
												</NuxtLink>
											</li>
										</ul>
									</div>
								</div>
							</transition>
						</li>
						<li>
							<NuxtLink
								to="/marketplace"
								class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Marketplace
							</NuxtLink>
						</li>
						<li>
							<NuxtLink
								to="/resources"
								class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Resources
							</NuxtLink>
						</li>
						<li>
							<NuxtLink
								to="/contact"
								class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Contact
							</NuxtLink>
						</li>
						<li class="text-center">
							<button
								@click="toggleTheme"
								class="relative inline-flex items-center h-full p-1 mx-auto bg-gray-600 rounded-full w-14 focus:outline-none"
							>
								<span class="sr-only">Toggle theme</span>
								<span
									class="inline-block w-6 h-6 p-1 transition duration-200 ease-in-out transform rounded-full"
									:class="
										isDark
											? 'translate-x-6 bg-white text-gray-50'
											: 'translate-x-1 bg-gray-900 color-zinc-900'
									"
								>
									<template v-if="isDark">
										<SunIcon class="w-full h-full text-black" />
									</template>
									<template v-else>
										<MoonIcon class="w-full h-full text-white" />
									</template>
								</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
	import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
	import { inject, onBeforeUnmount, onMounted, ref } from 'vue';

	const sticky = ref(false);
	const menuOpen = ref(false);
	const megaMenuOpen = ref(false);
	const dropdownRef = ref(null);
	const isDark = inject('isDark');
	const toggleTheme = inject('toggleTheme');

	const handleScroll = () => {
		sticky.value = window.scrollY > 0;
	};

	const toggleMenu = () => {
		menuOpen.value = !menuOpen.value;
	};

	const toggleMegaMenu = event => {
		if (event) event.stopPropagation();
		megaMenuOpen.value = !megaMenuOpen.value;
	};
	let clickOutsideListener;
	function handleClickOutside(event) {
		if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
			setTimeout(() => {
				megaMenuOpen.value = false;
			}, 200);
		}
	}

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
		clickOutsideListener = document.addEventListener(
			'mousedown',
			handleClickOutside
		);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', handleScroll);
		if (clickOutsideListener)
			document.removeEventListener('mousedown', handleClickOutside); // Clean up listener
	});
</script>

<style scoped>
	/* TailwindCSS classes are generally sufficient, but you can add custom styles here if needed */
</style>
