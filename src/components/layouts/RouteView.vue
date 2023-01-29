<template>
  <div class="main">
    <keep-alive :include="includedComponents">
      <router-view v-if="keepAlive" />
    </keep-alive>
    <router-view v-if="!keepAlive" />
  </div>
  
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    includedComponents() {
      const includedRouters = []
      if (this.$route.meta.keepAlive && this.$route.meta.componentName) {
        let cacheRouterArray = []
        if(!cacheRouterArray.includes(this.$route.meta.componentName)) {
          cacheRouterArray.push(this.$route.meta.componentName)
        }
        return cacheRouterArray
      }
      return includedRouters
    },
    keepAlive () {
      return this.$route.meta.keepAlive
    }
  }
}
</script>