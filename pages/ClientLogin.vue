<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>{{ $t("clientLogin.title") }}</h1>
        <h2 class="font-weight-regular">
          {{ $t("clientLogin.description") }}
        </h2>
        <v-form v-model="formValid" class="form mt-4">
          <v-text-field
            v-model="accessCode"
            :label="$t('clientLogin.accessCode')"
            outlined
            clearable
            :rules="[(v) => !!v || $t('clientLogin.error.required')]"
          />
          <v-btn
            color="primary"
            class="ma-2"
            :disabled="!formValid"
            @click="submit()"
          >
            {{ $t("clientLogin.access") }}
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ClientLogin",
  data() {
    return {
      formValid: false,
      accessCode: "",
    };
  },
  methods: {
    submit() {
      if (this.formValid) {
        $fetch(`${this.$config.public.apiBase}/clientLogin`, {
          method: "POST",
          body: { accessCode: this.accessCode },
        })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            this.$notify({
              title: err.response.status,
              text: this.$t("clientLogin.error.invalid"),
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
