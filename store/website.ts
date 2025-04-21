import { defineStore } from 'pinia';

export const useWebsiteStore = defineStore("website", {
  state: () => ({
    accessCode: "ABC-DEF",
    token: "",
  }),
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
