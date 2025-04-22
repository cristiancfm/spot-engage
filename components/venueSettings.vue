<template>
  <v-list lines="two">
    <v-list-item>
      <v-row align="center">
        <v-col>
          <v-list-item-title>{{
            $t("venueSettings.spotifyLogin.title")
          }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ $t("venueSettings.spotifyLogin.description") }}
          </v-list-item-subtitle>
        </v-col>
        <v-col cols="auto">
          <v-btn color="primary" variant="flat" @click="spotifyLogin">{{
            $t("login")
          }}</v-btn>
        </v-col>
      </v-row>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapStores } from "pinia";
import { useSpotifyStore } from "~/store/spotify.js";
import { redirectToAuthCodeFlow } from "~/utils/spotifyAuth.js";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapStores(useSpotifyStore),
  },
  methods: {
    async spotifyLogin() {
      const clientId = this.spotifyStore.clientId;
      const redirectUri = `${import.meta.env.VITE_APP_URL}/venue/1`;
      await redirectToAuthCodeFlow(clientId, redirectUri);
    },
  },
};
</script>
