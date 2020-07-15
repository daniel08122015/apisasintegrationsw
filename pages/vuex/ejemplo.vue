<template>

<div>
      <b-container fluid="md">
        <ValidationObserver ref="form" v-slot="{ invalid }">
    <form @submit.prevent="onSubmit">
      <ValidationProvider name="E-mail" rules="required|email" v-slot="{ valid, errors }">
         <b-form-group class="form-group" label="Email:">
          <b-input v-model="email" type="email" :state="errors[0] ? false : (valid ? true : null)"></b-input>
          <span class="text-danger">{{ errors[0] }}</span>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider name="First Name" rules="required|alpha" v-slot="{ valid, errors }">
         <b-form-group class="form-group" label="firstName:">
           <b-input v-model="firstName" type="text" :state="errors[0] ? false : (valid ? true : null)"></b-input>
        <span class="text-danger">{{ errors[0] }}</span>
  </b-form-group>
      </ValidationProvider>

      <ValidationProvider name="Last Name" rules="required|alpha" v-slot="{ valid, errors }">
        <b-form-group class="form-group" label="lastName:">
          <b-input  v-model="lastName" type="text" :state="errors[0] ? false : (valid ? true : null)"></b-input>
        <span class="text-danger">{{ errors[0] }}</span>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider name="selected" rules="required" v-slot="{ valid, errors }">
          <b-form-group class="form-group" label="selected:">
            <b-form-select v-model="selected" :options="options"  :state="errors[0] ? false : (valid ? true : null)" ></b-form-select>
              <span class="text-danger">{{ errors[0] }}</span>
              </b-form-group>
        </ValidationProvider>

      <b-button variant="primary" type="submit" :disabled="invalid">Submit</b-button>
    </form>
  </ValidationObserver>
      </b-container>
</div>
  
</template>

<style scoped>
span {
  display: block;
}
</style>

<script>

import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email, alpha } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});

// Add the email rule
extend('email', {
    ...email,
    message: 'This field must be a valid email'
  });

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },

  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: 'e', text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled'}
        ]
  }),

  methods: {
    onSubmit () {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }

        alert('Form has been submitted!');

        // Resetting Values
        this.firstName = this.lastName = this.email = '';

        // Wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    }
  }

};
 

</script>