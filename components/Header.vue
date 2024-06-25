<template>
	<header class="sticky top-0 z-10 bg-white dark:bg-gray-900">
		<div
			class="p-4 flex items-center justify-between transition-padding duration-500"
			:class="[sticky ? 'pr-4 pl-4 pt-2 pb-2' : 'p-4']"
		>
			<NuxtLink
				to="/"
				class="text-xl font-bold flex items-center gap-x-2"
			>
				<img
					src="https://github.com/jonnystalnaker.png"
					alt="User Image"
					class="rounded-full transition-size duration-500"
					:class="[sticky ? 'w-16 h-16' : 'w-20 h-20']"
				/>
				<span>Jonny Stalnaker</span>
			</NuxtLink>
			<div class="flex-grow flex items-center justify-end gap-x-4 relative">
				<NuxtLink
					to="/about"
					class="flex items-center"
				>
					<span>About</span>
				</NuxtLink>
				<button
					@click="toggleTheme"
					class="ml-4 p-2 bg-gray-200 dark:bg-gray-800 rounded"
				>
					{{ isDark ? 'Light Mode' : 'Dark Mode' }}
				</button>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { inject, onBeforeUnmount, onMounted, ref } from 'vue';

	const sticky = ref(false);
	const isDark = inject('isDark');
	const toggleTheme = inject('toggleTheme');

	function handleScroll() {
		sticky.value = window.scrollY > 0;
	}

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', handleScroll);
	});
</script>
