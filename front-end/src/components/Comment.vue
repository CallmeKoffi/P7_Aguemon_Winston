<template>
    <div class="card">
    <div class="card_user">
      <div class="card_profile">
        <img
          src="../assets/avatar.jpeg"
          alt="avatar de l'utilisateur"
          class="card_profile-picture"
        />
        <div class="card_profile-name"> {{ comment.prenom }} |</div>
        <div class="card_profile-date">posté le :{{ comment.date }}</div>
      </div>
      <div class="card_sm">
        <div class="card_sm-content">{{ comment.content }}</div>
       
      </div>
    </div>
    </div>
</template>
