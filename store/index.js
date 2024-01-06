export const useDataStore = defineStore("storeData", {
  state: () => ({
    token: "",
    apiToken: "",
  }),
  actions: {
    updateToken(val) {
      this.token = val;
      console.log("This Token -", this.token);
    },
    updateApiToken(val) {
      this.apiToken = val;
    },
  },
  persist: true,
});
