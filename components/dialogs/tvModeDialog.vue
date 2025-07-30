<template>
  <v-dialog :model-value="dialog" fullscreen>
    <v-card>
      <v-card-title>
        <v-row justify="end">
          <v-col cols="auto">
            <v-btn
              variant="flat"
              density="comfortable"
              icon="close"
              @click="$emit('update:dialog', false)"
            />
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row v-if="venue" justify="center">
            <v-col cols="auto" class="text-center">
              <h1>{{ venue.name }}</h1>
            </v-col>
          </v-row>
          <v-row v-if="playingQueue">
            <v-col>
              <h4>{{ $t("venuePlayingQueue.title") }}</h4>
              <p>
                {{ $t("venuePlayingQueue.currentlyPlaying") }}
              </p>
              <v-img
                :src="playingQueue.currently_playing.album.images[1].url"
                class="my-4"
                height="300"
                width="300"
              />
              <h2>{{ playingQueue.currently_playing.name }}</h2>
              <h4>{{ playingQueue.currently_playing.artists[0].name }}</h4>
            </v-col>
            <v-col>
              <p>{{ $t("venuePlayingQueue.nextUp") }}</p>
              <v-list>
                <track-item
                  v-for="(track, index) in playingQueue.queue.slice(0, 5)"
                  :key="index"
                  :track="track"
                />
              </v-list>
            </v-col>
          </v-row>
          <template v-if="venue">
            <v-row justify="center">
              <v-col cols="auto" class="text-center">
                <h4 style="font-weight: normal">
                  {{
                    $t("venuePlayingQueue.addSongsCTA", {
                      appURL: appURL,
                    })
                  }}
                </h4>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="auto">
                <h1 class="code" style="margin: 0">{{ venue.accessCode }}</h1>
              </v-col>
            </v-row>
          </template>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import TrackItem from "~/components/venues/trackItem.vue";

export default {
  components: { TrackItem },
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    playingQueue: {
      type: Object,
      default: null,
    },
    venue: {
      type: Object,
      default: null,
    },
  },
  emits: ["update:dialog"],
  computed: {
    appURL() {
      return import.meta.env.VITE_APP_URL;
    },
  },
};
</script>

<style>
.code {
  padding: 20px;
  background: gainsboro;
  border-radius: 10px;
}
</style>
