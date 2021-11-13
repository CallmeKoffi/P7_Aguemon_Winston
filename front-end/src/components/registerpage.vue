<template>
    
<div class="registerForm">

    <img alt="Groupomania Logo" src="../assets/icon-left-font-monochrome-black.png">
      <nav>
        <router-link to="/">Connexion </router-link>|<router-link to="/Register"> S'inscrire</router-link>
      </nav>
      <form @submit.prevent = register()>
        <label for="registerform-name">Nom :</label>
        <input id="registerform-name" type='text' placeholder="Name" required>

        <label for="registerform-firstname">Prénom :</label>
        <input id="registerform-firstname" type='text' placeholder="First name" required>

        <label for='registerform-mail'>Email :</label>
        <input id="registerform-mail" type='text' placeholder="Email" required>

        <label for="registerform-password">Mot de passe :</label>
        <input id="registerform-password" type='password' placeholder="Password" required>

        <label for="registerform-passwordcheck">Vérification du mot de passe :</label>
        <input id="registerform-passwordcheck" type='password' placeholder="Password check" required>

        <button id='registerform-btn' type='submit'>Soumettre</button>
      </form>
  </div>
</template>