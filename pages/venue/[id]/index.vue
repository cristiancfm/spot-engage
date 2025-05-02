<template>
  <v-container v-if="!loading">
    <v-row class="text-center">
      <v-col>
        <h1>{{ venueName }}</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <p class="mb-4">
          <v-img :src="venueImageURL" width="100%" max-height="300" contain />
        </p>
        <p class="mb-4">{{ venueDescription }}</p>
        <p class="mb-4">
          <v-row>
            <v-col v-for="item in venueSocialURLs" :key="item" cols="auto">
              <a
                v-if="item.instagram"
                :href="item.instagram"
                target="_blank"
                title="Instagram"
              >
                <v-img
                  src="/icons/socials/instagram.svg"
                  height="30px"
                  width="30px"
                />
              </a>
              <a
                v-if="item.facebook"
                :href="item.facebook"
                target="_blank"
                title="Facebook"
              >
                <v-img
                  src="/icons/socials/facebook.svg"
                  height="30px"
                  width="30px"
                />
              </a>
              <a
                v-if="item.twitter"
                :href="item.twitter"
                target="_blank"
                title="Twitter"
              >
                <v-img
                  src="/icons/socials/facebook.svg"
                  height="30px"
                  width="30px"
                />
              </a>
              <a
                v-if="item.tiktok"
                :href="item.tiktok"
                target="_blank"
                title="TikTok"
              >
                <v-img
                  src="/icons/socials/facebook.svg"
                  height="30px"
                  width="30px"
                />
              </a>
            </v-col>
          </v-row>
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <v-tabs v-model="tab">
          <v-tab value="playingQueue">{{ $t("venue.playingQueue") }}</v-tab>
          <v-tab value="settings">{{ $t("venue.settings") }}</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="playingQueue">
            <venue-playing-queue />
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
import { useSpotifyStore } from "~/store/spotify.js";
import { getAccessToken } from "~/utils/spotifyAuth.js";

export default {
  data() {
    return {
      loading: false,
      venueName: "",
      venueDescription: "",
      venueImageURL: "",
      venueSocialURLs: [],
      tab: null,
    };
  },
  computed: {
    ...mapStores(useWebsiteStore, useSpotifyStore),
  },
  created() {
    this.checkSpotifyCode();
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
          this.venueSocialURLs = response.socialURLs;
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
    async checkSpotifyCode() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      const clientId = this.spotifyStore.clientId;
      const redirectUri = `${import.meta.env.VITE_APP_URL}/venue/1`;
      const verifier = localStorage.getItem("verifier");

      if (code && verifier) {
        this.spotifyStore.token = await getAccessToken({
          clientId,
          code,
          redirectUri,
          verifier,
        });

        // Remove code from URL
        const newUrl = window.location.href.split("?")[0];
        window.history.replaceState({}, document.title, newUrl);
      }
    },
  },
};
</script>
