import { defineStore } from 'pinia';

export const useWebsiteStore = defineStore("website", {
  state: () => ({
    accessCode: null,
    token: null,
  }),
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
