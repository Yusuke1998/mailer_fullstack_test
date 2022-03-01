<template>
  <div>
    <h1>Login Component</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form ref="form">
            <div class="form-group">
              <label 
                for="InputEmail"
              >
                Correo Electronico
              </label>
              <input 
                type="email" 
                class="form-control" 
                id="InputEmail" 
                placeholder="Enter email"
                v-model="form.email"
              >
            </div>
            <div class="form-group">
              <label 
                for="InputPassword"
              >
                Contraseña
              </label>
              <input 
                type="password" 
                class="form-control" 
                id="InputPassword" 
                placeholder="Password"
                v-model="form.password"
              >
            </div>
            <button 
              type="submit" 
              class="btn btn-primary"
              @click.prevent="onSubmit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('this.$refs.form validate: ', this.$refs.form.validate());
        console.log('this.$refs.form checkValidity: ', this.$refs.form.checkValidity());
        this.$router.push('/home')
        console.log('submit', this.form);
      }
    }
  }
</script>