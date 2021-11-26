<template >
    <PostPage/>
</template>

<script>
// @ is an alias to /src
import PostPage from "../components/PostPage.vue";

export default {
  name: "AllPostPage",
  data(){
      return {
          post: [
              {
                  id: 1,
                  content: "content",
                  date : "2021-11-12"
              },
             
              
          ]
          }
    },
  components: {
    PostPage,
  },
  beforeMount(){
       
      fetch(`http://localhost:3000/api/postpage`,{
                method: 'GET',
                
                }
            ).then(res => res.json())
            .then(posts => {
                this.posts = posts
                })
  },
 
};
</script>