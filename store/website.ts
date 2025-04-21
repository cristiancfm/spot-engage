import { defineStore } from 'pinia';

export const useWebsiteStore = defineStore('website', {
  state: () => ({
    accessCode: "ABC-DEF",
    token: "",
    spotifyClientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID || "",
    spotifyToken: "",
  }),
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
