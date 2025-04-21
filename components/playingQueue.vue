<template>
  <v-card>
    <v-card-title>
      {{ $t("playingQueue.title") }}
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-group>
          <v-list-item v-for="(song, index) in songs" :key="index">
            <v-list-item-title>{{ song.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ song.artist }}</v-list-item-subtitle>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapStores } from "pinia";
import { useWebsiteStore } from "~/store/website.js";
import { useSpotifyStore } from "~/store/spotify.js";
import { getAccessToken } from "~/utils/spotifyAuth.js";
const { fetchProfile, redirectToAuthCodeFlow } = useSpotify();

export default {
  data() {
    return {
      songs: [],
      profile: null,
    };
  },
  computed: {
    ...mapStores(useWebsiteStore, useSpotifyStore),
  },
  created() {
    this.getPlayingQueue();
  },
  methods: {
    async getPlayingQueue() {
      const clientId = this.spotifyStore.clientId;
      const storedToken = this.spotifyStore.token;
      const redirectUri = "http://127.0.0.1:3000/venue/1";

      if (storedToken) {
        this.spotifyStore.profile = await fetchProfile(storedToken);
        console.log(this.spotifyStore.profile);
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (!code) {
        await redirectToAuthCodeFlow(clientId, redirectUri);
      } else {
        const verifier = localStorage.getItem("verifier");
        const token = await getAccessToken({
          clientId,
          code,
          redirectUri,
          verifier,
        });
        this.spotifyStore.token = token;
        this.spotifyStore.profile = await fetchProfile(token);
      }


    },
  },
};
</script>
