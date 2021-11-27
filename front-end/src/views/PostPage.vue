<template >
<div class="comment">
<Post :post="post" :displayBtnComment="false"/>``
<div>
    
    
</div>

<form @submit="(e) => e.preventDefault()">
    <input
        
        id="commentcontent"
        type="text"
        placeholder="Commentez ici..."
        
      />
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
  beforeMount(){
       
      fetch(`http://localhost:3000/api/posts/${ this.$route.params.id }`,{
                method: 'GET'
                }
            )
            .then(res => res.json())
            .then(post => {
                this.post = post[0]
                })
            .then(comment =>{
              this.comment = comment[0]
            })
  },
  method:{
      deletePost(){
          
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