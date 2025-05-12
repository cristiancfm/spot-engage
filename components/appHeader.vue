<template>
  <header>
    <!-- Desktop Menu -->
    <v-toolbar app border class="d-none d-sm-flex app-header">
      <v-toolbar-title>
        <router-link to="/" class="mx-2">
          <v-img
            src="/images/spot-engage-logo-small.png"
            alt="Logo"
            max-height="100%"
            max-width="175"
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer />

      <v-toolbar-items class="mr-2">
        <v-btn :to="{ name: 'venues' }">{{ $t("menu.venues") }}</v-btn>
        <v-btn :to="{ name: 'about' }">{{ $t("menu.about") }}</v-btn>
        <v-btn :to="{ name: 'contact' }">{{ $t("menu.contact") }}</v-btn>
        <v-btn v-if="!isLogged" :to="{ name: 'clientLogin' }">
          <v-icon class="mr-1">person</v-icon>
          {{ $t("menu.clientLogin") }}
        </v-btn>
        <v-btn v-if="!isLogged" :to="{ name: 'venueLogin' }">
          <v-icon class="mr-1">store</v-icon>
          {{ $t("menu.venueLogin") }}</v-btn
        >
        <v-btn v-if="isLogged" @click="logout">
          <v-icon class="mr-1">logout</v-icon>
          {{ $t("logout") }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Mobile Menu -->
    <v-toolbar app border class="d-flex d-sm-none">
      <v-toolbar-title>
        <router-link to="/" class="mx-2">
          <v-img
            src="/images/spot-engage-logo-small.png"
            alt="Logo"
            max-height="100%"
            max-width="175"
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <template #append>
        <v-btn icon="menu" @click="dialog = !dialog" />
      </template>

      <v-dialog
        v-model="dialog"
        light
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
      >
        <v-card light>
          <v-toolbar border>
            <v-toolbar-title>Menu</v-toolbar-title>
            <v-spacer />
            <v-btn icon="close" @click="dialog = false" />
          </v-toolbar>

          <v-list>
            <v-list-item to="/" @click="dialog = false">
              <v-list-item-title>{{ $t("menu.home") }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'venues' }" @click="dialog = false">
              <v-list-item-title>{{ $t("menu.venues") }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'about' }" @click="dialog = false">
              <v-list-item-title>{{ $t("menu.about") }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'contact' }" @click="dialog = false">
              <v-list-item-title>{{ $t("menu.contact") }}</v-list-item-title>
            </v-list-item>
            <v-list-item
              v-if="!isLogged"
              :to="{ name: 'clientLogin' }"
              @click="dialog = false"
            >
              <v-list-item-title>
                <v-icon>person</v-icon>
                {{ $t("menu.clientLogin") }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              v-if="!isLogged"
              :to="{ name: 'venueLogin' }"
              @click="dialog = false"
            >
              <v-list-item-title>
                <v-icon>store</v-icon>
                {{ $t("menu.venueLogin") }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              v-if="isLogged"
              @click="
                () => {
                  logout();
                  dialog = false;
                }
              "
            >
              <v-list-item-title>
                <v-icon>logout</v-icon>
                {{ $t("logout") }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-toolbar>
  </header>
</template>

<script>
import { mapStores } from "pinia";
import { useWebsiteStore } from "~/store/website.js";

export default {
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapStores(useWebsiteStore),
    isLogged() {
      return (
        this.websiteStore.accessCode !== null ||
        this.websiteStore.token !== null
      );
    },
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    logout() {
      this.websiteStore.accessCode = null;
      this.websiteStore.token = null;
      this.websiteStore.loggedAuthority = null;
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.app-header {
  background: radial-gradient(
    50% 75% at 50% 100%,
    rgb(245, 250, 255) 0%,
    rgb(255, 255, 255) 100%
  );
}
</style>
