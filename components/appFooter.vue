<template>
  <footer>
    <v-row class="pa-8" no-gutters>
      <v-col cols="4">
        <router-link to="/">
          <v-img
            src="/images/spot-engage-logo-small.png"
            alt="Logo"
            max-height="100%"
            max-width="175"
          />
        </router-link>
      </v-col>
      <v-col cols="4">
        <h4 class="mb-2">{{ $t("footer.navigation") }}</h4>
        <p>
          <router-link :to="{ name: 'index' }">{{
            $t("menu.home")
          }}</router-link>
        </p>
        <p>
          <router-link :to="{ name: 'venues' }">{{
            $t("menu.venues")
          }}</router-link>
        </p>
        <p>
          <router-link :to="{ name: 'contact' }">{{
            $t("menu.contact")
          }}</router-link>
        </p>
      </v-col>
      <v-col cols="4">
        <h4 class="mb-2">Todos los derechos reservados</h4>
        <p class="mb-2">
          Aplicación web desarrollada como parte del Trabajo de Fin de Máster
          para el Máster Universitario en Diseño y Desarrollo de Interfaz de
          Usuario Web de la UNIR.
        </p>
        <p>Creado por Cristian Ferreiro Montoiro.</p>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
export default {};
</script>
