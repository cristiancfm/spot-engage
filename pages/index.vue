<template>
  <div class="main-container">
    <v-container class="pt-0 pb-10">
      <div class="vinyl-wrapper">
        <img class="spinning vinyl-img" src="/images/vinyl.png" alt="" />
      </div>
      <v-row class="text-center mt-8">
        <v-col>
          <h1>{{ $t("index.title") }}</h1>
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
.main-container {
  background: radial-gradient(75% 25% at 50% 0%, #e8f2ff, #fff);
}
.vinyl-wrapper {
  height: 150px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: flex-end;
  padding-top: 20px;
  margin-bottom: 20px;
}
.vinyl-img {
  width: 80vw;
  max-width: 350px;
  height: auto;
}
.spinning {
  animation: spin 5s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
