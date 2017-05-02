<template lang="html">
  <aside class="menu aside">
    <p></p>
    <div class="" v-for="module in $site.modules">
      <side-menu-module v-if="module.services" :module="module"></side-menu-module>
      <ul class="menu-list" v-else>
        <side-menu-service :service="module"></side-menu-service>
      </ul>
    </div>
  </aside>
</template>

<script>
import SideMenuModule from './side-menu-module.vue'
import SideMenuService from './side-menu-service.vue'

export default {
  name: 'adminSideMenu',
  components: {
    'side-menu-module': SideMenuModule,
    'side-menu-service': SideMenuService
  }
}
</script>

<style lang="css">
</style>
