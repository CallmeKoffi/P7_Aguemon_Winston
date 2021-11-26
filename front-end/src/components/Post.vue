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

<script>
export default {
  data() {},
  props: ['post'],
  methods: {
    goToPostPage() {
      window.location.href = '/postpage';
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: rgb(227, 233, 245);
  border-radius: 20px;
  margin: 10px;
  .card_profile {
    display: flex;
    border-bottom: 1px solid whitesmoke;
    align-items: center;
  }
  .card_profile-name {
    font: 1em sans-serif;
    font-weight: bold;
  }
  .card_profile-date {
    font: 1em sans-serif;
    font-style: italic;
  }
  .card_sm{
      width: 100%;
      background-color: whitesmoke;
      margin: 30px;
  }
  .card_sm-content {
    font: 2em sans-serif;
    font-weight: bold;
  }

  form {
    border-top: 1px solid black;
  }
  img {
    //background-image: url('../assets/icon-above-font.png');
    width: 40px;
    height: 40px;
    border-radius: 80%;
  }
}
</style>
