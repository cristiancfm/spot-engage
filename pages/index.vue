<template>
  <div class="text-center p-4">
    <h1>{{ $t("index.title") }}</h1>
    <h2>{{ $t("index.description", { appName: $t("appName") }) }}</h2>
    <Button :label="$t('index.primaryButton')" />
    <Button :label="$t('index.secondaryButton')" class="p-button-secondary" />
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
