<template>
  <div>
    <nav>
        <ul class="list-inline">
            <li class="pull-right" v-if="!auth.authenticated">
              <router-link to="/register">Register</router-link>
            </li>
            <li class="pull-right" v-if="!auth.authenticated">
              <router-link to="/login">Login</router-link>
            </li>
            <li class="pull-right" v-if="auth.authenticated">
              <a href="#" @click.prevent="signout">Logout</a>
            </li>
            <li class="pull-right" v-if="auth.authenticated">
                Hi, {{ auth.user.name }}
            </li>

        </ul>
    </nav>

    <h3>Tasks List</h3>
    <ul class="list-group">
        <li v-for="task in tasks" class="list-group-item"><span>{{task.name}} <a href="#" class="pull-right" @click="deleteTask(task.id)">X</a></span></li>
    </ul>
    <router-link to="/create" v-if="auth.authenticated">Create a new task</router-link>
  </div>
</template>
<script>
export default {
    name: "task-list",
    data(){
      return {
        auth: {
          authenticated: false,
          user: {
            name: '',
            email: ''
          }
        },
        tasks : []
      };
    },
    mounted: function() {
      // console.log(localStorage.getItem("id_token"));
      if(localStorage.getItem("id_token") != null){
        this.getUser();
      }
      window.axios.get('tasks')
        .then(response => {
          console.log(response);
          this.tasks = response.data;
        })
        .catch(erro => {
          console.log(erro);
        });
    },
    methods: {
      getUser(){
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
        window.axios.get('auth/user')
          .then(response => {
            console.log(response);
            this.auth.authenticated = true;
            this.auth.user = response.data.data;
          })
          .catch( error => {
            console.log(error);
          });
      },
      signout() {
          localStorage.removeItem('id_token');
          this.auth.authenticated = false;
          this.auth.user = null;
      },
      deleteTask(id){
        window.axios.delete(`tasks/${id}`)
          .then(response => {
            console.log(response);
            let index = this.tasks.findIndex( task => task.id === id);
            this.tasks.splice(index, 1);
          })
          .catch(erro => {
            console.log(erro);
          });
      }
    }
}
</script>
