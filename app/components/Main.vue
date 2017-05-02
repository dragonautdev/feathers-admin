<template lang="html">
  <div class="">
    <default-layout v-if="isLoggedIn">
      <div class="" slot="content">
        <fade-in-transition>
          <router-view></router-view>
        </fade-in-transition>
      </div>
    </default-layout>
    <anonymous-layout v-else>
      <div class="" slot="content">
        <fade-in-transition>
          <router-view></router-view>
        </fade-in-transition>
      </div>
    </anonymous-layout>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import layout from './layout'
import fadeInTransition from './common/transitions/fade-in-transition'

export default {
  name: 'AdminMain',
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ])
  },
  components: {
    'anonymous-layout': layout.AnonymousLayout,
    'default-layout': layout.DefaultLayout,
    'fade-in-transition': fadeInTransition

  }
}
</script>

<style lang="css">
</style>
