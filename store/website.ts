import { defineStore } from "pinia";

export const useWebsiteStore = defineStore("website", {
  state: () => ({
    accessCode: null,
    token: null,
    loggedAuthority: null,
    venue: null,
    songsAdded: 0,
  }),
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
