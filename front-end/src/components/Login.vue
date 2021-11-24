<template>
  <div class="Login">
   <img alt="Groupomania Logo" src="../assets/icon-left-font-monochrome-black.png">
   <p>Bienvenue dans votre réseau d'entreprise</p>
      <nav>
        <router-link to="/">Connexion </router-link>|<router-link to="/Register"> S'inscrire</router-link>
      </nav>
      <p>{{ message }}</p>
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

export default {
    name: 'Login',
    data() {
        return {
            message: "",
        };
    },
    methods: {
        login(){
            const email = document.getElementById("login-mail").value;
            const password = document.getElementById("login-password").value;
            
            fetch(`http://localhost:3000/api/users/login`,{
                method: 'POST',
                body: JSON.stringify({email,password}),
                headers: {
                    'Content-type': 'application/json'
                }
                    
                }
            ).then(res => res.json())
            .then(data =>{
             
                 // add to LS + redirection
                                                
                localStorage.setItem('prenom', data.prenom)
                localStorage.setItem('nom', data.nom)
                localStorage.setItem('userId', data.userId)
                localStorage.setItem('token', data.token)
                location.href = '/allpost'
            
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