<template>
	<div>
		<button @click="setLocale('en')">en</button>
		<button @click="setLocale('es')">es</button>
		<h1>{{ $t('welcome') }}</h1>
	</div>
</template>

<script>
	export default {
		name: 'Index',
		methods: {
			setLocale(locale) {
				this.$i18n.locale = locale;
			},
		},
	};
</script>
