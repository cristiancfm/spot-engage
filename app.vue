<template>
  <v-app>
    <v-main>
      <NuxtNotifications
        position="top center"
        :speed="500"
        classes="notification"
      />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-main>
  </v-app>
</template>
<script></script>
