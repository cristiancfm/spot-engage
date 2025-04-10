<template>
  <header></header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
