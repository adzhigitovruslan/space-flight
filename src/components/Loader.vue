<template>
  <div class="loader-wrapper">
    <div class="loader">
      <div class="loader loader-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loader",
};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  width: 35px;
  height: 35px;
  margin: 15px auto 15px auto;
}
.loader-wrapper-small {
  width: 30px;
  height: 30px;
  margin: 0.5rem auto;
}
.loader {
  width: 100%;
  height: 100%;
  border: 5px solid transparent;
  border-top-color: #fff;
  border-bottom-color: #ffff;
  border-radius: 50%;
  animation: rotate 5s linear infinite;
}
.loader-inner {
  border-top-color: #fff;
  border-bottom-color: #ffff;
}
@keyframes rotate {
  0% {
    transform: scale(1) rotate(360deg);
  }
  50% {
    transform: scale(0.8) rotate(-360deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}
</style>
