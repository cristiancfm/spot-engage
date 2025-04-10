<template>
  <div class="text-center p-4">
    <h1>{{ $t("index.title") }}</h1>
    <h2>{{ $t("index.description", { appName: $t("appName") }) }}</h2>
    <v-icon>settings</v-icon>
    <v-btn>{{ $t("index.primaryButton") }}</v-btn>
    <v-btn>{{ $t("index.secondaryButton") }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
