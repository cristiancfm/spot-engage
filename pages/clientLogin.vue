<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>{{ $t("clientLogin.title") }}</h1>
        <h2 class="font-weight-regular">
          {{ $t("clientLogin.description") }}
        </h2>
        <v-form v-model="formValid" class="form mt-4" @submit.prevent="submit">
          <v-text-field
            v-model="accessCode"
            :label="$t('clientLogin.accessCode')"
            outlined
            :rules="[(v) => !!v || $t('clientLogin.error.required')]"
          />
          <v-btn
            variant="flat"
            color="primary"
            class="ma-2"
            :disabled="!formValid"
            type="submit"
          >
            {{ $t("clientLogin.access") }}
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapStores } from "pinia";
import { useWebsiteStore } from "~/store/website.js";

export default {
  data() {
    return {
      formValid: false,
      accessCode: "",
    };
  },
  computed: {
    ...mapStores(useWebsiteStore),
  },
  methods: {
    submit() {
      if (this.formValid) {
        $fetch(`${this.$config.public.apiBase}/clientLogin`, {
          method: "POST",
          body: { accessCode: this.accessCode },
        })
          .then((response) => {
            this.websiteStore.accessCode = response.accessCode;
            this.websiteStore.loggedAuthority = "client";
            this.$router.push(`/venue/${response.id}`);
          })
          .catch((err) => {
            this.$notify({
              title: this.$t("error"),
              text: this.$t(err.data.message),
              type: "error",
            });
          });
      }
    },
  },
};
</script>

<style scoped>
.form {
  max-width: 500px;
  margin: auto;
}
</style>
