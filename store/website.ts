import { defineStore } from "pinia";

export const useWebsiteStore = defineStore("website", {
  state: () => ({
    accessCode: null,
    token: null,
    loggedAuthority: null,
    venue: null,
  }),
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
