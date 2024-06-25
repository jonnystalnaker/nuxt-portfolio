<template>
	<div :class="{ dark: isDark }">
		<Header @toggle-theme="toggleTheme" />
		<NuxtWelcome />
	</div>
</template>

<script setup>
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
