<template>
  <div class="useraccountpage">
      <Header />
      <h1>Hello, {{ user.prenom }} {{ user.nom }}</h1>
    
  </div>
</template>

<script>
import axios from 'axios';
import UserPage from '@/components/UserPage.vue'
export default {
  Name: 'UserAccount',
  
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
      axios.get('http://localhost:4000/api/auth/profile/' + userId, {
        
        headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ` + localStorage.getItem('token')
                    }
      })
      .then(res => {
        this.user = res.data[0];
      })
    }
  }
}
</script>

<style>
</style>