<template >
<div class="comment">
<img alt="Groupomania Logo" src="../assets/icon-left-font-monochrome-black.png">
    <p>Bienvenue dans votre réseau d'entreprise</p>
    <nav>
        <router-link to="/allpost">Home</router-link>
    </nav>
<div>
 <Post :post="post" :displayBtnComment="false"/>   
    
</div>

<form @submit.prevent = "sendComment">
    <input
        name="content"
        id="commentcontent"
        type="text"
        placeholder="Commentez ici..."
        
      />
      <button class="btn_send" type="submit" >envoyer commentaire</button>
</form>

<Comment v-for="comment in comments" :key="comment.id" :comment="comment"/>
<p v-if="comments.length == 0">Aucun commentaire de disponible</p>
<button class="btn-post" @click="deletePost()">Supprimer</button>
</div>


    
    
</template>

<script>
// import des components
import Post from "../components/Post.vue";
import Comment from "../components/Comment.vue";

export default {
  name: "PostPage",
  data(){
      return {
          post: {
              type: "Object"
          },
         comments:{
            type: "Object",
            default: [
                {id:'id1',content: "contenu 1",date: "2021-12-25 00:00:00", userId: 'idUser1', prenom: "prenom1"},
                 {id:'id2',content: "contenu 1",date: "2021-12-25 00:00:00", userId: 'idUser1', prenom: 'prenom1'},
                  {id:'id3',content: "contenu 1",date: "2021-12-25 00:00:00", userId: 'idUser1', prenom: 'prenom1'}
            ]
          }
          }
    },
  components: {
    Post,
    Comment,
  },
  beforeMount: function(){
       
      fetch(`http://localhost:3000/api/posts/${ this.$route.params.id }`,{
                method: 'GET'
                }
            )
            .then(res => res.json())
            .then(post => {
                this.post = post[0];
                fetch(`http://localhost:3000/api/posts/${ this.$route.params.id }/comments`,{
                  method: 'GET'
                }).then(res => res.json())
                .then(comments =>
                this.comments = comments
                )
            })
          
  },
  method:{
        sendComment(){
            const content = document.getElementById("commentcontent");
            const userId = document.getElementById("userId").value;
          fetch(`http://localhost:3000/api/posts/${ this.$route.params.id }/comments`,{
                method: 'POST',
                body: JSON.stringify({content,userId}),
                headers: {
                    'Content-type': 'application/json'
                }
                    
                }
            ).then(res => res.json())
      }
  }
 
};
</script>

<style lang="scss">
.comment{
     position: relative;
     .btn-post{
    border-radius: 25%;
    width: 100px;
    height: 30px;
    background-color: red;
    color: white;
    
}
}

</style>