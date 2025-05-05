<template>
  <div>
    <div>
      <v-container>
        <v-row align="center" class="my-10">
          <v-col cols="12" sm="8">
            <h2>{{ $t("venues.title1") }}</h2>
            <h3 class="font-weight-regular">
              {{ $t("venues.description1", { appName: $t("appName") }) }}
            </h3>
          </v-col>
          <v-col cols="12" sm="4">
            <v-img src="/images/iphone-mockup.png" alt="Phone Mockup" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="dark-section">
      <v-container>
        <v-row align="center" class="my-10">
          <v-col cols="12" sm="7">
            <v-carousel hide-delimiter-background :show-arrows="false">
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                :alt="item.alt"
                cover
              >
                <div class="carousel-overlay" />

                <v-row align="end" class="h-100 pb-6 carousel-text">
                  <v-col class="text-center">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.text }}</p>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="12" sm="5">
            <h2>{{ $t("venues.title2") }}</h2>
            <br />
            <h3 class="font-weight-regular">
              {{ $t("venues.description2", { appName: $t("appName") }) }}
            </h3>
            <br />
            <h3 class="font-weight-regular">
              {{ $t("venues.description2_2") }}
            </h3>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row class="text-center my-10">
          <v-col>
            <h2>{{ $t("venues.title3") }}</h2>
            <h3 class="font-weight-regular">
              {{ $t("venues.description3") }}
            </h3>
            <v-img
              src="/images/macbook-mockup.png"
              alt="Macbook Mockup"
              max-width="800"
              style="margin: auto"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row class="my-10">
          <v-col cols="12" sm="8">
            <h2>{{ $t("venues.title4") }}</h2>
            <h3 class="font-weight-regular">
              {{ $t("venues.description4") }}
            </h3>
          </v-col>
          <v-col>
            <p>a</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row class="text-center my-10">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/images/venues/el-cafe-de-macondo.jpg",
          alt: "El Café de Macondo",
          title: "El Café de Macondo",
          text: "A Coruña",
        },
        {
          src: "/images/venues/la-urbana.jpg",
          alt: "La Urbana",
          title: "La Urbana",
          text: "A Coruña",
        },
        {
          src: "/images/venues/cafe-hispano.jpg",
          alt: "Café Hispano",
          title: "Café Hispano",
          text: "A Coruña",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-carousel {
  border-radius: 10px;
}
.v-carousel-item {
  position: relative;
}

.carousel-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  z-index: 1;
}

.carousel-text {
  position: relative;
  z-index: 2;
  color: #d9d9d9;
}

.dark-section {
  background: black;
  color: white;
}
</style>
