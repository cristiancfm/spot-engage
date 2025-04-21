import { defineStore } from "pinia";

export const useSpotifyStore = defineStore("spotify", {
  state: () => ({
    clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID || "",
    token: null,
    profile: null,
  }),
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  }
});
