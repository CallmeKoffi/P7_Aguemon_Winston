<template >
<div class="comment">
<img alt="Groupomania Logo" src="../assets/icon-left-font-monochrome-black.png">
    <p>Bienvenue dans votre réseau d'entreprise</p>
    <nav>
        <router-link to="/allpost">Home</router-link>
    </nav>
<div>
 <Post :post="post" :displayBtnComment="false"/> 
 
 <button class="btn-post" v-if="isOwner(post.userID || userID== '13')" @click="deletePost">Supprimer le post</button>  
    
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
            type: "Object"
          },
      }
    },
  components: {
    Post,
    Comment,
  },
  computed: {
    /*isOwner(){
              console.log(this.post.userId,sessionStorage.getItem('userId'))
              return this.post.userId === sessionStorage.getItem('userId');
            }*/
  },
   
   //appel à l'api user

  beforeMount: function(){
       
      fetch(`http://localhost:3000/api/posts/${ this.$route.params.id }`,{
                method: 'GET'
                }
            )
            .then(res => res.json())
            .then(post => {
                this.post = post[0];

          //appel api comments users

                fetch(`http://localhost:3000/api/posts/${ this.$route.params.id }/comments`,{
                  method: 'GET'
                }).then(res => res.json())
                .then(comments =>
                this.comments = comments
                )
            })
          
  },
  methods:{
    //method envoie de commentaire

        sendComment(){
            const content = document.getElementById("commentcontent").value;
            const userId = sessionStorage.getItem('userId');
          fetch(`http://localhost:3000/api/posts/${ this.$route.params.id }/comment/`,{
                method: 'POST',
                body: JSON.stringify({content,userId}),
                headers: {
                    'Content-type': 'application/json'
                }
                    
                }
            ).then(res => res.json())
      },
      // method qui efface le post
      deletePost(){
        
        fetch(`http://localhost:3000/api/posts/${ this.$route.params.id }`,{

          method:'DELETE'
          

        })
        .then(res => res.json)
        .then(data => console.log(data))
         
      },
       isOwner(userID){
              console.log(userID,sessionStorage.getItem('userId'))
              return userID == sessionStorage.getItem('userId');
              
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
    background-color: rgb(231, 165, 165);
    color: white;
    
}
}

</style>