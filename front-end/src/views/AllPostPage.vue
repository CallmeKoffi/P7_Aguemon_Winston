<template>
    <div id="postPage">
     <img alt="Groupomania Logo" src="../assets/icon-left-font-monochrome-black.png">
    <p>Bienvenue dans votre réseau d'entreprise</p>
    <nav>
        <router-link to="/useraccountpage">Mon Compte</router-link>|<router-link to="/homeuser"> Poster</router-link>
    </nav>
    <div class="card_post">
        <div class="profile">
             {{}}
        </div>
        <div class="content">
           <Post v-for="post in posts" :key="post.id" :post="post" />
           <p v-if="posts.length == 0">Aucun posts de disponible</p>
        </div>
    </div>
</div>
</template>


<script>
// @ is an alias to /src
import Post from "../components/Post.vue";

export default {
  name: "AllPostPage",
  data(){
      return {
          posts: [
              {
                  id: 1,
                  content: "content",
                  date : "2021-11-12"
              },
              {
                  id: 2,
                  content: "content",
                  date : "2021-11-12"
              }
          ]
          }
    },
  components: {
    Post,
  },
  beforeMount(){
       
      fetch(`http://localhost:3000/api/posts`,{
                method: 'GET',
                
                }
            ).then(res => res.json())
            .then(posts => {
                this.posts = posts
                })
  },
 
};
</script>