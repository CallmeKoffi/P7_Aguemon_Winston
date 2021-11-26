<template>
  <div class="card">
    <div class="card_user">
      <div class="card_profile">
        <img
          src="../assets/avatar.jpeg"
          alt="avatar de l'utilisateur"
          class="card_profile-picture"
        />
        <div class="card_profile-name">{{ post.nom }} {{ post.prenom }} |</div>
        <div class="card_profile-date">posté le :{{ post.date }}:</div>
      </div>
      <div class="card_sm">
        <div class="card_sm-content">{{ post.content }}</div>
        <img class="card_sm-postImg">{{ post.imgPost }}</div>
      </div>

    <button id="btn_comment" type="button" @click="goToPostPage()">
      Commentez
    </button>
  </div>
</template>