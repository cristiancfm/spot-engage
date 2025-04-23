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
      <v-col v-if="removable" cols="auto">
        <v-btn variant="flat" density="comfortable" icon="close" />
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
export default {
  props: {
    track: {
      type: Object,
      default: () => ({}),
    },
    removable: {
      type: Boolean,
      default: false,
    },
    addToQueue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:add-to-queue"],
};
</script>
