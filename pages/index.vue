<template>
  <div class="main-container">
    <v-container>
      <v-row class="text-center mt-8">
        <v-col>
          <h1 class="display">{{ $t("index.title") }}</h1>
          <h2 class="font-weight-regular">
            {{ $t("index.description", { appName: $t("appName") }) }}
          </h2>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-btn
            variant="flat"
            color="primary"
            class="ma-2"
            :to="{ name: 'clientLogin' }"
            >{{ $t("index.primaryButton") }}</v-btn
          >
          <v-btn
            variant="flat"
            color="secondary"
            class="ma-2"
            :to="{ name: 'venues' }"
          >{{ $t("index.secondaryButton") }}</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-img
            src="/images/macbook-mockup.png"
            alt="Macbook Mockup"
            max-width="1000"
            style="margin: auto"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
