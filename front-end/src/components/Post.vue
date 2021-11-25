<template>
  <div class="card">
    <div class="card_user">
      <div class="card_profile">
        <img src="{{ post.imgURL }}" alt= "avatar de l'utilisateur" class="card_profile-picture" />
        <div>{{ post.nom }} {{ post.prenom }} |</div>
        <div>{{ post.date }}:</div>
      </div>
      <div>{{ post.content }}</div>
    </div>
    
      <button id="btn_comment" type="button" @click="sendNewComment()">
          Commentez
      </button>
      
      
    
  </div>
</template>

<script>
export default {
  data() {},
  props: ['post'],
};
</script>

<style lang="scss" scoped>
.card {
  background-color: rgb(226, 152, 152);
  border-radius: 40px;
  .card_user {
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }
  .card_profile {
    border-right: 1px solid black;
  }
  form{
      border-top: 1px solid black;
      }
}
</style>
