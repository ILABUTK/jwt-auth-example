<template>
  <div>
    <div class="form-group">
        <div class="col-sm-10">
            <input @focus="hideAlert" v-model="name" type="text" class="form-control" placeholder="task name">
        </div>
        <div class="col-sm-2">
        <button class="btn btn-primary" @click="createTask(name)">Submit</button>
        </div>
        <div class="col-sm-12 alert alert-success" role="alert" id="success-alert" style="display:none;">
            <strong>Success! </strong>
            Task added.
        </div>
    </div>
  </div>

</template>
<script>
export default {
    name: "create_task",
    data(){
      return {
        name : ''
      };
    },
    methods: {
      hideAlert(){
        $("#success-alert").hide();
      },
      createTask(task){
        window.axios.post('tasks', {name: task})
          .then( response => {
            console.log(response);
            this.name = '';
            this.$router.push('/'); //go back
          })
          .catch( error => {
            console.log(error);
          });
      }
    }
}
</script>
