<template>
  <div>
    <p>Dashboard</p>
    <p>Color: {{$store.getters.color}}</p>
    <p>Counter: {{this.$store.state.counter}}</p>
    <button @click="increment" class="btn btn-primary" type="button">Inc counter</button>
  </div>
</template>

<script>
  import { UserService } from '../services/UserService'
  const userService = new UserService()
  export default {
    name: 'Dashboard',
    data() {
      return {
        users: null
      }
    },
    mounted() {
      return userService
        .getUsers()
        .then(res => {
          this.users = res.data
        })
        .catch(e => console.log(e))
    },
    methods: {
      increment () {
        this.$store.commit('counterIncrement')
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>