<template>
  <div class="">
    <div class="alert alert-danger" v-if="error">
        <p>There was an error, unable to register.</p>
    </div>
    <form autocomplete="off" v-on:submit.prevent="register">
      <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" class="form-control" placeholder="name" v-model="name" required>
      </div>
        <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" class="form-control" placeholder="email" v-model="email" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-default">Register</button>
    </form>
  </div>
</template>

<script>

export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
            error: false
        }
    },
    methods: {
        register() {
          let crediential = {
            name: this.name,
            email: this.email,
            password: this.password
          }

          window.axios.post('/auth/register', crediential)
            .then( response => {
              console.log("START::" + response);
              //localStorage.setItem('id_token', response.headers.authorization);
              localStorage.setItem('id_token', response.data.id_token); //
              this.$router.push('/');
            })
            .catch( error => {
              console.log(error);
              this.error = true;
            });
        }
    }
}
</script>
