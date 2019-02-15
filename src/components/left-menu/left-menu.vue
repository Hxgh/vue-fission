<template>
  <div class="h-left">
    <Menu :theme="theme2" active-name="首页" @on-select="menu_change">
      <MenuGroup title="内容管理">
        <MenuItem name="首页" to="/">
          <Icon type="md-document"/>首页
        </MenuItem>
        <MenuItem name="页面2" to="/about">
          <Icon type="md-chatbubbles"/>页面2
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="统计分析">
        <MenuItem name="3" to="/html">
          <Icon type="md-heart"/>统计分析
        </MenuItem>
      </MenuGroup>
    </Menu>
  </div>
</template>
<script>
export default {
  name: "SideMenu",
  data() {
    return {
      aaa: "aaa的值"
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    menu_change(name) {
      this.$Message.info(name);
    }
  },
  watch: {}
};
</script>
<style>
</style>
