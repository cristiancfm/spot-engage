<template>
  <header>
    <Menubar :model="items">
      <template #start>
        <Image src="favicon.ico" alt="Logo" width="50" />
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <Button label="en" @click="setLocale('en')" />
          <Button label="es" @click="setLocale('es')" />
        </div>
      </template>
    </Menubar>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      items: [
        {
          label: this.$t("home"),
          icon: "pi pi-fw pi-home",
          command: () => {
            this.$router.push("/");
          },
        },
        {
          label: this.$t("about"),
          icon: "pi pi-fw pi-info",
          command: () => {
            this.$router.push("/about");
          },
        },
      ],
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
