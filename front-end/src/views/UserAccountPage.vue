<template>
  <div class="useraccountpage">
      <UserPage/>
      <h1>Hello, {{ user.prenom }} {{ user.nom }}</h1>
   </div>
</template>

<script>

import UserPage from "@/components/UserPage.vue"
export default {
  name: "UserAccount",
  
  components: { 
    UserPage, 
  },
  
  data(){
    return {
      user:""
    }
  },
  
  created() {
    this.displayProfile();
  },
  
  
  methods: {
    displayProfile() {
      const userId = localStorage.getItem('userId');
      fetch('http://localhost:3000/api/users/profile/' + userId, {
        method: 'GET',
        
        headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ` + localStorage.getItem('token')
                    }
      })
      .then(res => res.json())
      .then(res => {
        this.user = res.body[0];
      })
    }
  }
}
</script>

<style>
</style>