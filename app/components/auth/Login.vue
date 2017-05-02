<template lang="html">
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container is-half-desktop">
        <div class="columns">
          <div class="column is-4-tablet is-offset-4-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="/img/altimetrik-logo.png" alt="Altimetrik Logo">
                </figure>
              </div>
              <div class="card-header">
                <div class="container has-text-centered">
                  <p class="title is-3">
                    Inicia Sesión
                  </p>
                </div>

              </div>
              <div class="card-content">
                <form class="content" novalidate @submit.stop.prevent="doLogin">
                  <div class="field">
                    <label for="email" class="label">Email</label>
                    <p class="control has-icon has-icon-right">
                      <input class="input" name="email" v-validate:email.initial="'required|email'"
                        type="text" placeholder="someone@altimetrik.com" v-model="email"
                        :class="{'is-danger': errors.has('email')}">
                      <span class="icon is-small" v-show="errors.has('email')">
                        <i class="fa fa-warning is-danger"></i>
                      </span>
                    </p>
                    <p class="help is-danger" v-show="errors.has('email')">No es un email valido.</p>
                  </div>
                  <div class="field">
                    <label for="password" class="label">Password</label>
                    <p class="control has-icon has-icon-right">
                      <input class="input" name="password" v-validate:password.initial="'required'"
                        type="password" placeholder="password1" v-model="password"
                        :class="{'is-danger': errors.has('password')}">
                      <span class="icon is-small" v-show="errors.has('password')">
                        <i class="fa fa-warning "></i>
                      </span>
                    </p>
                    <p class="help is-danger" v-show="errors.has('password')">Este campo es requerido.</p>
                  </div>
                  <div class="field">
                    <p class="control">
                        <label class="checkbox">
                          <input type="checkbox" v-model="rememberMe">
                          Recordarme
                        </label>
                    </p>
                  </div>
                  <div class="field is-clearfix">
                    <p class="control is-pulled-right">
                      <button class="button is-primary" type="submit">Entrar</button>
                    </p>
                  </div>
                </form>
              </div>
              <div class="card-footer">
                <div class="container">
                  <div class="content">
                    <p class="is-help">¿No tenés cuenta? <router-link :to="{ name: 'admin.signup'}">Registrate</router-link></p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      email: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    ...mapActions([
      'login',
      'addMessage'
    ]),
    /**
     * This method validates the form and logs the user in, then redirects
     * the admin's home page, or shows errors if appropriate.
     * @param {Object} event the event which originated this method's execution, if any. It's not currently being used
     * @returns {undefined} this method does not return
     */
    doLogin: function (event) {
      // validate all fileds are correct
      this.$validator.validateAll().then(success => {
        // log the user in with api and store the data if needed
        this.login({
          email: this.email,
          password: this.password,
          rememberMe: this.rememberMe
        }).then((result) => {
          // Everything worked fine, show a message
          this.addMessage({
            text: 'Bienvenido/a ' + result.data.user.firstName,
            type: 'success'
          })
          // redirect to the next page (if available through params) or admin
          // panel's home
          if (this.$route.query.next) {
            this.$router.push(this.$route.query.next)
          } else {
            this.$router.push({name: 'admin.home'})
          }
        }).catch((error) => {
        })
      }).catch((error) => {
        // there was a validation error
        this.addMessage({
          text: 'Debes corregir los errores en el formulario',
          type: 'error'
        })
      })

    }
  }
}
</script>

<style lang="css">
</style>
