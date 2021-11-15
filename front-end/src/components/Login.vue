<template>
  <div class="Login">
   <img alt="Groupomania Logo" src="../assets/icon-left-font-monochrome-black.png">
   <p>Bienvenue dans votre réseau d'entreprise</p>
      <nav>
        <router-link to="/">Connexion </router-link>|<router-link to="/Register"> S'inscrire</router-link>
      </nav>
      <form @submit.prevent = login()>
        <label for='login-mail'> Email : </label>
        <input id='login-mail' type='text' placeholder='Email' required>
        <label for='login-password'> Mot de passe : </label>
        <input id='login-password' type='password' placeholder='password' required>
        <button id='login-btn' type='submit'>Connexion</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    methods: {
        login(){
            const email = document.getElementById("login-mail").value;
            const password = document.getElementById("login-password").value;
            
            axios.post(`http://localhost:4000/api/auth/login`,
                {
                    email,
                    password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(res => {
              if(res.status === 200) {
                localStorage.setItem('prenom', res.data.prenom);
                localStorage.setItem('nom', res.data.nom);
                localStorage.setItem('userId', res.data.userId);
                localStorage.setItem('token', res.data.token);
                location.href = '/HomeUser';
              }
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    this.message = "Utilisateur inconnu.";
                }
                if (error.response.status === 401) {
                    this.message = "Email ou mot de passe invalide.";
                }
                if (error.response.status === 500) {
                    this.message = "Erreur serveur.";
                }
            });
        }
    }
}
</script>

<style scoped>
.login {
  width: 60%;
  margin: 230px auto;
  display: flex;
  flex-direction: column;
}
img {
  width: 30%;
}
p{
  font-size: 1rem;
}
nav {
  font-size: 1.4rem;
  margin: 0 30px 10px 0;
}
form {
  display: flex;
  flex-direction: column;
}
form input {
  margin: 10px;
  height: 30px;
  border-radius: 40px;
  font-size: 1.4rem;
}
form label {
  font-size: 1.2rem;
}
button {
  width: 40%;
  margin : auto;
  height: 35px;
  border-radius: 40px;
  font-size: 1.2rem;
  background-color: rgb(red, green, blue);
  cursor: pointer;
}
button:hover {
  background-color: rgb(224, 75, 75);
  color: white;
}
</style>