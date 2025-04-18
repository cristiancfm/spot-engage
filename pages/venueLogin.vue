<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>{{ $t("venueLogin.title") }}</h1>
        <h2 class="font-weight-regular">
          {{ $t("venueLogin.description") }}
        </h2>
        <v-form v-model="formValid" class="form mt-4">
          <v-text-field
            v-model="email"
            type="email"
            :label="$t('venueLogin.email')"
            outlined
            :rules="[(v) => !!v || $t('venueLogin.error.required')]"
          />
          <v-text-field
            v-model="password"
            type="password"
            :label="$t('venueLogin.password')"
            outlined
            :rules="[(v) => !!v || $t('venueLogin.error.required')]"
          />
          <v-btn
            variant="flat"
            color="primary"
            class="ma-2"
            :disabled="!formValid"
            @click="submit()"
          >
            {{ $t("venueLogin.access") }}
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
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapStores(useWebsiteStore),
  },
  methods: {
    submit() {
      if (this.formValid) {
        $fetch(`${this.$config.public.apiBase}/venueLogin`, {
          method: "POST",
          body: { email: this.email, password: this.password },
        })
          .then((response) => {
            this.websiteStore.token = this.token;
            this.$router.push(`/venue/${response.id}/admin`);
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
