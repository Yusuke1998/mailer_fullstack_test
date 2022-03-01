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
              class="btn btn-primary mt-3"
              @click.prevent="onSubmit"
              :disabled="loading"
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
        loading: false,
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.loading = true;
        axios.post('http://localhost:8000/api/login', this.form)
          .then(response => {
            console.log('onSubmit response: ', response);
            this.$router.push({
              path: '/correos'
            })
          })
          .catch(error => {
            console.log('error', error);
          })
          .finally(() => {
            this.loading = false;
          })
      }
    }
  }
</script>