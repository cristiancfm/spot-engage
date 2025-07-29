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
  },
  emits: ["update:dialog"],
  data() {
    return {};
  },
};
</script>
