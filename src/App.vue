<template>
  <div id="app" class="flex h-con">
    <left-menu></left-menu>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import leftMenu from "./components/left-menu";

export default {
  data() {
    return {};
  },
  methods: {
    menu_change(name) {
      this.$Message.info(name);
    }
  },
  components: {
    leftMenu
  },
  watch: {
    $route: (to, from) => {
      document.title = to.meta.title;
      console.log("我来自", form);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.h-con {
  height: 100%;
}
.h-left {
  position: relative;
  width: 100;
  margin-right: 20px;
  background: #ffffff;
  text-align: left;
}
.h-left > ul {
  height: 100%;
}
.h-right {
  flex: 1;
}
</style>
