<template>
  <v-dialog
    :model-value="dialog"
    max-width="500"
    @update:model-value="$emit('update:dialog', $event)"
  >
    <v-card>
      <v-card-title>
        <v-row align="center">
          <v-col>
            <span>{{ $t("limitTracks.title") }}</span>
          </v-col>
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
      <v-divider />
      <v-card-text style="overflow-y: auto">
        <v-row>
          <v-col cols="auto">
            <v-icon>info</v-icon>
          </v-col>
          <v-col>
            <p class="text-body-2">
              {{ $t("limitTracks.description") }}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="localTracksLimit"
              :label="$t('limitTracks.limit')"
              hide-details="auto"
              type="number"
              clearable
              :min="0"
              @update:model-value="onLimitChange"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          variant="flat"
          @click="$emit('update:dialog', false)"
        >
          {{ $t("save") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    tracksLimit: {
      type: Number,
      default: null,
    },
  },
  emits: ["update:dialog"],
  data() {
    return {
      loading: false,
      localTracksLimit: this.tracksLimit,
    };
  },
  methods: {
    onLimitChange(value) {
      this.localTracksLimit = value < 0 ? 0 : value;
    },
  },
};
</script>
