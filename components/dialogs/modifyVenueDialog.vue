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
            <span>{{ $t("venueModify.title") }}</span>
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
          <v-col>
            <v-text-field
              v-model="localVenue.name"
              :label="$t('venueModify.name')"
              hide-details="auto"
              clearable
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              v-model="localVenue.description"
              :label="$t('venueModify.description')"
              hide-details="auto"
              clearable
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="localVenue.imageURL"
              :label="$t('venueModify.imageURL')"
              hide-details="auto"
              clearable
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>Redes sociales</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="localVenue.socialURLs.instagram"
              label="Instagram"
              hide-details="auto"
              clearable
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="localVenue.socialURLs.facebook"
              label="Facebook"
              hide-details="auto"
              clearable
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="localVenue.socialURLs.twitter"
              label="Twitter"
              hide-details="auto"
              clearable
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="localVenue.socialURLs.tiktok"
              label="Tiktok"
              hide-details="auto"
              clearable
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
        <v-btn
          color="black"
          variant="flat"
          @click="$emit('update:dialog', false)"
        >
          {{ $t("cancel") }}
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
    venue: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["update:dialog"],
  data() {
    return {
      loading: false,
      localVenue: { ...this.venue },
    };
  },
  watch: {
    venue: {
      handler(newVal) {
        this.localVenue = { ...newVal };
      },
      deep: true,
    },
  },
};
</script>
