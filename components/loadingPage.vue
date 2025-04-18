<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-progress-linear color="primary" indeterminate rounded />
        <h2>{{ $t("loadingPage.title") }}</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
