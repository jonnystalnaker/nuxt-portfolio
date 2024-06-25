<template>
	<div :class="{ dark: isDark }">
		<Header @toggle-theme="toggleTheme" />
		<div id="content">
			<Intro />
		</div>
	</div>
</template>

<script setup>
	useHead({
		htmlAttrs: {
			lang: 'en',
		},
	});
	useSeoMeta({
		title: 'Jonny Stalnaker',
		ogTitle: 'Jonny Stalnaker',
		description: 'This is my amazing site, let me tell you all about it.',
		ogDescription: 'This is my amazing site, let me tell you all about it.',
		ogImage: 'https://example.com/image.png',
		twitterCard: 'summary_large_image',
	});
	const isDark = ref(true); // Default to dark mode

	function toggleTheme() {
		isDark.value = !isDark.value;
		if (isDark.value) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	provide('isDark', isDark);
	provide('toggleTheme', toggleTheme);

	onMounted(() => {
		document.documentElement.classList.add('dark');
	});
</script>
