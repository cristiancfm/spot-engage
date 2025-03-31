<template>
	<div>
		<Button icon="pi pi-home" label="en" @click="setLocale('en')"></Button>
		<Button label="es" @click="setLocale('es')"></Button>
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
