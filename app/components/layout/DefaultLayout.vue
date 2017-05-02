<template lang="html">
  <div class="">
    <top-header></top-header>
    <div class="container is-fluid">
      <div class="columns is-mobile">
        <div class="column is-2-tablet is-3-mobile">
          <side-menu></side-menu>
        </div>
        <div class="column">
            <slot name="content"></slot>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import SideMenu from './partials/side-menu.vue'
import TopHeader from './partials/top-header.vue'

export default {
  name: 'DefaultLayout',
  components: {
    'side-menu': SideMenu,
    'top-header': TopHeader
  }
}
</script>

<style lang="css">
</style>
