<template>
  <v-row justify="center" align="center">
    <v-col cols="auto">
      <v-card
        variant="outlined"
        class="text-center"
        min-width="300"
        max-width="400"
      >
        <v-container class="pa-5">
          <v-row>
            <v-col>
              <v-row>
                <v-col>
                  <h3>{{ $t("venues.pricing.smallBusiness.title") }}</h3>
                  <p>{{ $t("venues.pricing.smallBusiness.description") }}</p>
                  <h2 class="font-weight-regular">
                    {{ $t("venues.pricing.smallBusiness.price") }}
                  </h2>
                </v-col>
              </v-row>
              <v-divider class="my-4" />
              <v-row class="text-start" justify="center">
                <v-col cols="auto" style="max-width: calc(100% - 50px)">
                  <ul>
                    <li>{{ $t("venues.pricing.smallBusiness.benefit1") }}</li>
                    <li>{{ $t("venues.pricing.smallBusiness.benefit2") }}</li>
                    <li>{{ $t("venues.pricing.smallBusiness.benefit3") }}</li>
                    <li>{{ $t("venues.pricing.smallBusiness.benefit4") }}</li>
                  </ul>
                </v-col>
              </v-row>
              <v-btn
                :to="{ name: 'contact' }"
                variant="flat"
                color="primary"
                class="my-4 px-10"
                >{{ $t("menu.contact") }}</v-btn
              >
              <p class="text-caption">
                {{ $t("venues.pricing.spotifyPremiumRequired") }}
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
    <v-col cols="auto">
      <v-card
        variant="outlined"
        class="text-center"
        min-width="300"
        max-width="400"
      >
        <v-container class="pa-5">
          <v-row>
            <v-col>
              <v-row>
                <v-col>
                  <h3>{{ $t("venues.pricing.bigBusiness.title") }}</h3>
                  <p>{{ $t("venues.pricing.bigBusiness.description") }}</p>
                  <h2 class="font-weight-regular">
                    {{ $t("venues.pricing.bigBusiness.price") }}
                  </h2>
                </v-col>
              </v-row>
              <v-divider class="my-4" />
              <v-row class="text-start" justify="center">
                <v-col cols="auto" style="max-width: calc(100% - 50px)">
                  <ul>
                    <li>{{ $t("venues.pricing.bigBusiness.benefit1") }}</li>
                    <li>{{ $t("venues.pricing.bigBusiness.benefit2") }}</li>
                  </ul>
                </v-col>
              </v-row>
              <v-btn
                :to="{ name: 'contact' }"
                variant="flat"
                color="primary"
                class="my-4 px-10"
                >{{ $t("menu.contact") }}</v-btn
              >
              <p class="text-caption">
                {{ $t("venues.pricing.spotifyPremiumRequired") }}
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>
