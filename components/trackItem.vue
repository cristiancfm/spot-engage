<template>
  <v-list-item>
    <v-row align="center" class="flex-nowrap">
      <v-col cols="2">
        <v-img :src="track.album.images[2].url" />
      </v-col>
      <v-col class="flex-grow-1" style="min-width: 0">
        <v-list-item-title class="text-truncate">
          {{ track.name }}
        </v-list-item-title>
        <v-list-item-subtitle class="text-truncate">
          {{ track.artists[0].name }}
        </v-list-item-subtitle>
      </v-col>
      <v-col v-if="playback" cols="auto">
        <v-progress-circular v-if="loading" indeterminate color="primary" />
        <div v-else>
          <v-btn
            v-if="!isCurrentlyPlaying"
            variant="flat"
            density="comfortable"
            icon="play_arrow"
            @click="playTrack"
          />
          <v-btn
            v-else-if="isCurrentlyPlaying"
            variant="flat"
            density="comfortable"
            icon="pause"
            @click="pauseTrack"
          />
          <v-btn
            variant="flat"
            density="comfortable"
            icon="skip_next"
            @click="skipTrack"
          />
        </div>
      </v-col>
      <v-col v-if="addToQueue" cols="auto">
        <v-btn
          variant="flat"
          density="comfortable"
          icon="add"
          @click="$emit('update:add-to-queue', track)"
        />
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script>
import { mapStores } from "pinia";
import { useSpotifyStore } from "~/store/spotify.js";

const {
  fetchCurrentlyPlayingTrack,
  startPlayback,
  pausePlayback,
  skipToNextTrack,
} = useSpotify();

export default {
  props: {
    track: {
      type: Object,
      default: () => ({}),
    },
    playback: {
      type: Boolean,
      default: false,
    },
    addToQueue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:add-to-queue", "update:playback"],
  data() {
    return {
      loading: false,
      isCurrentlyPlaying: false,
    };
  },
  computed: {
    ...mapStores(useSpotifyStore),
  },
  mounted() {
    if (this.playback) {
      this.checkCurrentlyPlayingTrack();
    }
  },
  methods: {
    checkCurrentlyPlayingTrack() {
      const storedToken = this.spotifyStore.token;

      if (storedToken) {
        this.loading = true;
        fetchCurrentlyPlayingTrack(storedToken)
          .then((response) => {
            this.isCurrentlyPlaying = response.is_playing;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    playTrack() {
      const storedToken = this.spotifyStore.token;

      if (storedToken) {
        startPlayback(storedToken)
          .then(() => {
            this.isCurrentlyPlaying = true;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    pauseTrack() {
      const storedToken = this.spotifyStore.token;

      if (storedToken) {
        pausePlayback(storedToken)
          .then(() => {
            this.isCurrentlyPlaying = false;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    skipTrack() {
      const storedToken = this.spotifyStore.token;

      if (storedToken) {
        skipToNextTrack(storedToken)
          .then(() => {
            setTimeout(() => {
              this.isCurrentlyPlaying = true;
              this.$emit("update:playback");
            }, 300);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>
