<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="7">
        <h2>{{ $t("venues.title1") }}</h2>
        <h3 class="font-weight-regular">
          {{ $t("venues.description1", { appName: $t("appName") }) }}
        </h3>
      </v-col>
      <v-col cols="12" md="5">
        <v-img src="/images/iphone-mockup.png" alt="Phone Mockup" />
      </v-col>
    </v-row>
    <v-row class="text-right">
      <v-col>
        <p>a</p>
      </v-col>
      <v-col cols="12" md="8">
        <h2>{{ $t("venues.title2") }}</h2>
        <h3 class="font-weight-regular">
          {{ $t("venues.description2") }}
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <h2>{{ $t("venues.title3") }}</h2>
        <h3 class="font-weight-regular">
          {{ $t("venues.description3") }}
        </h3>
      </v-col>
      <v-col>
        <p>a</p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <h2>{{ $t("venues.actionTitle") }}</h2>
        <h3 class="font-weight-regular">
          {{ $t("venues.actionDescription", { appName: $t("appName") }) }}
        </h3>
        <v-btn variant="flat" color="primary" class="ma-2">{{
          $t("menu.contact")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
