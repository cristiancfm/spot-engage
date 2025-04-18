<template>
  <v-container v-if="!loading">
    <v-row class="text-center">
      <v-col>
        <h1>{{ venueName }}</h1>
      </v-col>
    </v-row>
    <v-row justify="center" class="text-center">
      <v-col cols="auto">
        <div>
          <v-btn
            icon
            variant="flat"
            color="secondary"
            size="large"
            class="mb-2"
          >
            <v-icon>queue_music</v-icon>
          </v-btn>
          <p>{{ $t("venue.playingQueue") }}</p>
        </div>
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
        })
        .catch((err) => {
          this.$notify({
            title: this.$t("error"),
            text: this.$t(err.data.message),
            type: "error",
          });
          this.$router.push({ name: "clientLogin" });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
