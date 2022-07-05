/* eslint-disable no-undef */
export default {
  install(Vue) {
    Vue.prototype.$message = function (text) {
      this.$bvToast.toast(text, {
        variant: "primary",
        // solid: true,
      });
    };

    Vue.prototype.$error = function (text) {
      this.$bvToast.toast(text, {
        title: "[ERROR]:",
        variant: "danger",
        // solid: true,
      });
    };
  },
};
