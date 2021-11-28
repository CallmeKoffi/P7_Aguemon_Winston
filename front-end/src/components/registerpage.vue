<template>
    
<div class="registerpage">

    <img alt="Groupomania Logo" src="../assets/icon-left-font-monochrome-black.png">
    <p>Bienvenue dans votre réseau d'entreprise</p>
      <nav>
        <router-link to="/">Connexion </router-link>|<router-link to="/Register"> S'inscrire</router-link>
      </nav>
      <form @submit.prevent = register()>
        <label for="registerpage-name">Nom :</label>
        <input id="registerpage-name" type='text' placeholder="Name" required>

        <label for="registerpage-firstname">Prénom :</label>
        <input id="registerpage-firstname" type='text' placeholder="First name" required>

        <label for="registerpage-mail">Email :</label>
        <input id="registerpage-mail" type='text' placeholder="Email" required>

        <label for="registerpage-password">Mot de passe :</label>
        <input id="registerpage-password" type='password' placeholder="Password" required>

        <label for="registerpage-passwordcheck">Vérification du mot de passe :</label>
        <input id="registerpage-passwordcheck" type='password' placeholder="Password check" required>

        <button id='registerpage-btn' type='submit'>Soumettre</button>
      </form>
  </div>
</template>

<script>
export default {
    name: 'registerPage',
 
    data() {
        return {
            message: "",
        };
    },

    methods: {
        register(){
            const nom = document.getElementById("registerpage-name").value;
            const prenom = document.getElementById("registerpage-firstname").value;
            const password = document.getElementById("registerpage-password").value;
            const passwordCheck = document.getElementById("registerpage-passwordcheck").value;
            const email = document.getElementById("registerpage-mail").value;
            if(password === passwordCheck){
                fetch("http://localhost:3000/api/users/register", {
                method: 'POST',
                body: JSON.stringify({nom, prenom, password, email}),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                
                .then(res => {
                    if(res.status === 201) {
                         location.href = '/';
                    }
                })
                .catch((error) => {
                    console.log(error)
                        this.message = "Email non disponible.";
                   
                });
            }
            else if( password != passwordCheck){
                this.message = "Vérifier le mot de passe";
            }
             
        }                 
    }
    }
</script>

<style scoped>
.register{
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
