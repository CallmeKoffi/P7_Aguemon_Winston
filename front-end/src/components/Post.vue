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
        <div class="card_profile-date">posté le : {{ post.date }}</div>
      </div>
      <div class="card_sm">
        <div class="card_sm-content">{{ post.content }}</div>
        <img class="card_sm-postImg" :src="post.imgPost"></div>
      </div>

    
    <router-link v-if="displayBtnComment" :to="{ name: 'PostPage', params: { id: post.id } }">Commentez</router-link>
  </div>
</template>

<script>
export default {
  data() {},
  props: {
    post : {
      type: Object
    },
    displayBtnComment: {
      type : Boolean,
      default : true
    }
  },
  
};
</script>

<style lang="scss" >
.card {
  background-color: rgb(240, 209, 213);
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
      
      background-color: whitesmoke;
      margin: 30px;
  }
  .card_sm-content {
    font: 2em sans-serif;
    font-weight: bold;
  }
  .card_sm-postImg {
    width: 50%;
    height: 50%;
    
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
