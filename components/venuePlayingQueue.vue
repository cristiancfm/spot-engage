<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ $t("venuePlayingQueue.title") }}
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-list v-if="queue && queue.queue.length > 0">
          <v-list-item v-for="(song, index) in queue.queue" :key="index">
            <v-list-item-title>{{ song.name }}</v-list-item-title>
            <v-list-item-subtitle>{{
              song.artists[0].name
            }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <v-row v-if="queue && queue.queue.length === 0" class="text-center">
          <v-col>
            <v-row>
              <v-col>
                <v-icon size="x-large" class="mb-2">info</v-icon>
                <p>{{ $t("venuePlayingQueue.error.noSongs") }}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row v-if="!queue" class="text-center">
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

const { fetchQueue } = useSpotify();

export default {
  data() {
    return {
      queue: null,
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
        fetchQueue(storedToken)
          .then((res) => {
            this.queue = res;
            console.log(this.queue);
          })
          .catch((err) => {
            if (err.status === 401) {
              // Token expired
              this.spotifyStore.token = null;
              this.$notify({
                title: this.$t("error"),
                text: this.$t("venuePlayingQueue.error.tokenExpired"),
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
