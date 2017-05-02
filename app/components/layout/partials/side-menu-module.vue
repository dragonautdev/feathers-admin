<template lang="html">
  <p class="menu-label">{{ module.label }}</p>
  <ul class="menu-list">
    <side-menu-service v-for="service in module.services" :service="service">
    </side-menu-service>
  </ul>
</template>

<script>
import SideMenuService from './side-menu-service.vue'

export default {
  props: {
    module: {
      type: Object,
      required: true
    }
  },
  components: {
    'side-menu-service': SideMenuService
  }
}
</script>

<style lang="css">
</style>
