<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ $t("venuePlayingQueue.title") }}
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-list v-if="songs">
          <v-list-group>
            <v-list-item v-for="(song, index) in songs" :key="index">
              <v-list-item-title>{{ song.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ song.artist }}</v-list-item-subtitle>
            </v-list-item>
          </v-list-group>
        </v-list>
        <v-row v-else class="text-center">
          <v-col>
            <v-row>
              <v-col>
                <v-icon size="x-large" class="mb-2">error</v-icon>
                <p>{{ $t("venuePlayingQueue.error.noQueue") }}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapStores } from "pinia";
import { useSpotifyStore } from "~/store/spotify.js";
import { getAccessToken, redirectToAuthCodeFlow } from "~/utils/spotifyAuth.js";

const { fetchProfile } = useSpotify();

export default {
  data() {
    return {
      songs: null,
      profile: null,
    };
  },
  computed: {
    ...mapStores(useSpotifyStore),
  },
  created() {
    this.getPlayingQueue();
  },
  methods: {
    getPlayingQueue() {
      const storedToken = this.spotifyStore.token;

      if (storedToken) {
        fetchProfile(storedToken)
          .then((res) => {
            this.profile = res;
            console.log(this.profile);
          })
          .catch((err) => {
            if (err.status === 401) {
              // Token expired
              this.spotifyStore.token = null;
              this.$notify({
                title: this.$t("error"),
                text: this.$t(err.data.message),
                type: "error",
              });
            }
          });
      } else {
        // No token
        this.$notify({
          title: this.$t("error"),
          text: this.$t("venuePlayingQueue.error.noToken"),
          type: "error",
        });
      }
    },
    async spotifyLogin() {
      const clientId = this.spotifyStore.clientId;
      const redirectUri = `${import.meta.env.VITE_APP_URL}/venue/1`;

      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (!code) {
        await redirectToAuthCodeFlow(clientId, redirectUri);
      } else {
        const verifier = localStorage.getItem("verifier");
        this.spotifyStore.token = await getAccessToken({
          clientId,
          code,
          redirectUri,
          verifier,
        });
      }
    },
  },
};
</script>
