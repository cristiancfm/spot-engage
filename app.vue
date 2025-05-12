<template>
  <v-app>
    <v-main>
      <NuxtNotifications
        position="top center"
        :speed="500"
        :width="300"
        classes="notification"
      />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-main>
  </v-app>
</template>
<script></script>
