<template>
  <header>
    <!-- Desktop Menu -->
    <v-toolbar app border class="d-none d-sm-flex">
      <v-toolbar-title>
        <router-link to="/" class="mx-2">
          <v-img src="/favicon.ico" alt="Logo" max-height="50" max-width="50" />
        </router-link>
      </v-toolbar-title>
      <v-spacer />

      <v-toolbar-items>
        <v-btn>{{ $t("menu.venues") }}</v-btn>
        <v-btn :to="{ name: 'about' }">{{ $t("menu.about") }}</v-btn>
        <v-btn :to="{ name: 'venueLogin' }">{{ $t("menu.venueLogin") }}</v-btn>
        <v-btn :to="{ name: 'clientLogin' }">{{
          $t("menu.clientLogin")
        }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Mobile Menu -->
    <v-toolbar app border class="d-flex d-sm-none">
      <v-toolbar-title>
        <router-link to="/" class="mx-2">
          <v-img src="/favicon.ico" alt="Logo" max-height="50" max-width="50" />
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
            <v-list-item @click="dialog = false">
              <v-list-item-title>{{ $t("menu.venues") }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'about' }" @click="dialog = false">
              <v-list-item-title>{{ $t("menu.about") }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'clientLogin' }" @click="dialog = false">
              <v-list-item-title>{{
                $t("menu.clientLogin")
              }}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'venueLogin' }" @click="dialog = false">
              <v-list-item-title>{{ $t("menu.venueLogin") }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
