<template>
  <v-container v-if="!loading">
    <v-row class="text-center">
      <v-col>
        <h1>{{ venueName }}</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-img :src="venueImageURL" width="100%" max-height="300" contain />
        <br />
        <p>{{ venueDescription }}</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-tabs v-model="tab">
          <v-tab value="playingQueue">{{ $t("venue.playingQueue") }}</v-tab>
          <v-tab value="settings">{{ $t("venue.settings") }}</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="playingQueue">
            <playing-queue />
          </v-tabs-window-item>
          <v-tabs-window-item value="settings">
            <venue-settings />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-col>
    </v-row>
  </v-container>
  <loading-page v-else />
</template>

<script>
import { mapStores } from "pinia";
import { useWebsiteStore } from "~/store/website.js";

export default {
  data() {
    return {
      loading: false,
      venueName: "",
      venueDescription: "",
      venueImageURL: "",
      tab: null,
    };
  },
  computed: {
    ...mapStores(useWebsiteStore),
  },
  created() {
    this.fetchVenue();
  },
  methods: {
    fetchVenue() {
      this.loading = true;
      const id = this.$route.params.id;
      $fetch(`${this.$config.public.apiBase}/venue/${id}`, {
        headers: {
          AccessCode: this.websiteStore.accessCode,
        },
      })
        .then((response) => {
          this.venueName = response.name;
          this.venueDescription = response.description;
          this.venueImageURL = response.imageURL;
        })
        .catch((err) => {
          this.$notify({
            title: this.$t("error"),
            text: this.$t(err.data.message),
            type: "error",
          });
          this.$router.push("/");
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
