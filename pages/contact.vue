<template>
  <div class="main-container">
    <v-container>
      <v-row class="text-center pt-8">
        <v-col>
          <h1>{{ $t("contact.title") }}</h1>
          <h2 class="font-weight-regular">
            {{ $t("contact.description", { appName: $t("appName") }) }}
          </h2>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6" xl="4">
          <v-form v-model="valid">
            <v-text-field
              v-model="name"
              :label="$t('contact.name')"
              :rules="[requiredRule]"
              clearable
              required
            />
            <v-text-field
              v-model="email"
              :label="$t('contact.email')"
              :rules="[requiredRule, emailRule]"
              type="email"
              clearable
              required
            />
            <v-textarea
              v-model="message"
              :label="$t('contact.message')"
              :rules="[requiredRule]"
              required
            />
            <v-row justify="center">
              <v-col cols="auto">
                <v-btn
                  color="primary"
                  variant="flat"
                  type="submit"
                  :disabled="!valid"
                  @click.prevent="submitForm"
                >
                  {{ $t("contact.submit") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      name: "",
      email: "",
      message: "",
      requiredRule: (value) => {
        if (value) return true;

        return this.$t("requiredField");
      },
      emailRule: (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return this.$t("invalidField");
      },
    };
  },
  methods: {
    submitForm() {
      if (this.valid) {
        this.$notify({
          title: this.$t("success"),
          text: this.$t("contact.successMessage"),
          type: "success",
        });
      }
    },
  },
};
</script>

<style scoped>
.main-container {
  background: radial-gradient(75% 25% at 50% 0%, #e8f2ff, #fff);
}
</style>
