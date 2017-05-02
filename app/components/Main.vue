<template lang="html">
  <div class="">
    <default-layout v-if="isLoggedIn">
      <div class="" slot="content">

          <router-view></router-view>

      </div>
    </default-layout>
    <anonymous-layout v-else>
      <div class="" slot="content">
          <router-view></router-view>
      </div>
    </anonymous-layout>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import layout from './layout'

export default {
  name: 'AdminMain',
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ])
  },
  components: {
    'anonymous-layout': layout.AnonymousLayout,
    'default-layout': layout.DefaultLayout
  }
}
</script>

<style lang="css">
</style>
