<template lang="html">
  <li >
    <router-link :to="{ name: service.routes.list }">
      <span class="icon" v-if="service.icon">
        <i class="fa" :class="service.icon"></i>
      </span>&nbsp;
      {{ service.labelPlural }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    service {
      type: Object,
      required: true
    }
  }
}

</script>

<style lang="css">
</style>
