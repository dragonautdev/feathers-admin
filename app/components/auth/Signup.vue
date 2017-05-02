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
                    Registrate
                  </p>
                </div>

              </div>
              <div class="card-content">
                <form class="content" novalidate @submit.stop.prevent="signup">
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
                    <label for="firstName" class="label">Nombres</label>
                    <p class="control has-icon has-icon-right">
                      <input class="input" name="firstName" v-validate:firstName.initial="'required'"
                        type="text" placeholder="Julio" v-model="firstName"
                        :class="{'is-danger': errors.has('firstName')}">
                      <span class="icon is-small" v-show="errors.has('firstName')">
                        <i class="fa fa-warning is-danger"></i>
                      </span>
                    </p>
                    <p class="help is-danger" v-show="errors.has('firstName')">Este campo es requerido.</p>
                  </div>
                  <div class="field">
                    <label for="lastName" class="label">Apellidos</label>
                    <p class="control has-icon has-icon-right">
                      <input class="input" name="lastName" v-validate:lastName.initial="'required'"
                        type="text" placeholder="Rios" v-model="lastName"
                        :class="{'is-danger': errors.has('lastName')}">
                      <span class="icon is-small" v-show="errors.has('lastName')">
                        <i class="fa fa-warning is-danger"></i>
                      </span>
                    </p>
                    <p class="help is-danger" v-show="errors.has('lastName')">Este campo es requerido.</p>
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
                    <label for="confirm" class="label">Confirmar Password</label>
                    <p class="control has-icon has-icon-right">
                      <input class="input" name="confirm" v-validate:confirm.initial="'required|confirmed:password'"
                        type="password" placeholder="password1" v-model="confirm"
                        :class="{'is-danger': errors.has('confirm')}">
                      <span class="icon is-small" v-show="errors.has('confirm')">
                        <i class="fa fa-warning "></i>
                      </span>
                    </p>
                    <p class="help is-danger" v-show="errors.has('confirm')">Debe coincidir con tu password.</p>
                  </div>
                  <div class="field is-clearfix">
                    <p class="control is-pulled-right">
                      <button class="button is-primary" type="submit">Registrarme</button>
                    </p>
                  </div>
                </form>
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
import api from '../../api'

export default {
  data: () => {
    return {
      email: '',
      password: '',
      confirm: '',
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    ...mapActions([
      'addMessage' //lets us use the global "addMessage" action
    ]),
    /**
     * This method validates the form and signs the user up, then redirects
     * the user to the login page, or shows errors if appropriate.
     * @param {Object} event the event which originated this method's execution, if any. It's not currently being used
     * @returns {undefined} this method does not return
     */
    signup (event) {
      // validate this form
      this.$validator.validateAll().then((success) => {
        // call users api to create a new user
        api.users.create({
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName
        }).then((success) => {
          this.addMessage({
            text: 'Tu registro fue exitoso!',
            type: 'success'
          })
          this.$router.push({name: 'admin.login'})
        }).catch((error) => { /* Do nothing. errors are handled globally */})
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
