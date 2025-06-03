<template>
  <v-app>
    <v-main>
      <NuxtNotifications
        position="top center"
        :speed="1000"
        :width="350"
        classes="notification"
      />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-main>
  </v-app>
</template>
<script></script>
