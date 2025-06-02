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
            <span>{{ $t("accessCode.title") }}</span>
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
              {{ $t("accessCode.description") }}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <pre class="preformatted-block">{{ localAccessCode }}</pre>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          variant="flat"
          @click="copyToClipboard(localAccessCode)"
        >
          {{ $t("copy") }}
        </v-btn>
        <v-btn
          color="black"
          variant="flat"
          @click="$emit('update:dialog', false)"
        >
          {{ $t("close") }}
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
    accessCode: {
      type: String,
      default: null,
    },
  },
  emits: ["update:dialog"],
  data() {
    return {
      loading: false,
      localAccessCode: this.accessCode,
    };
  },
  methods: {
    copyToClipboard(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          this.$notify({
            title: this.$t("success"),
            text: this.$t("accessCode.messages.copied"),
            type: "success",
          });
        })
        .catch(() => {
          this.$notify({
            title: this.$t("error"),
            text: this.$t("accessCode.messages.copyError"),
            type: "error",
          });
        });
    },
  },
};
</script>

<style scoped>
.preformatted-block {
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  text-align: center;
}
</style>
