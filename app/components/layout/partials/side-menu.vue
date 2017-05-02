<template lang="html">
  <aside class="menu aside">
    <p></p>
    <p class="menu-label">
      {{ $t('sidebar.users')}}
    </p>
    <ul class="menu-list">
      <li><router-link :to="{ name: 'admin.users' }"><span class="icon"><i class="fa fa-users"></i></span>&nbsp;{{ $t('sidebar.users') }}</router-link></li>

    </ul>
    <p class="menu-label">{{ $t("sidebar.events") }}</p>
    <ul class="menu-list">
      <li><router-link :to="{ name: 'admin.contacts' }"><span class="icon"><i class="fa fa-phone"></i></span>&nbsp;{{ $t('sidebar.contacts') }}</router-link></li>
      <li><router-link :to="{name: 'admin.events'}"><span class="icon"><i class="fa fa-calendar"></i></span>&nbsp;{{ $t('sidebar.events') }}</router-link></li>
      <li><router-link :to="{ name: 'admin.registrations' }"><span class="icon"><i class="fa fa-id-card"></i></span>&nbsp;{{ $t('sidebar.registrations') }}</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'adminSideMenu'
}
</script>

<style lang="css">
</style>
