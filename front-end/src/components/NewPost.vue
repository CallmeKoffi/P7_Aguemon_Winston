<template>
<div>
    

    <form @submit= "e=> e.preventDefault()" class='newpost'>
      <label class="titlePost">Postez ici ==></label>
      <input  v-model="postContent" id="postcontent" type="text" placeholder="Que voulez vous partager?">
      <button id="btnSend" type="submit" @click= "sendNewPost()" >Envoyer</button>
  </form>
</div>
  

</template>

<script>

export default {
    name: 'NewPost',
    data() {
        return{
            postContent: '',
        }
    },
    methods: {
        sendNewPost() {
            
            console.log(this.postContent);
            const userId = localStorage.getItem('userId');
            const token = localStorage.getItem('token');
            const content = this.postContent
            fetch(`http://localhost:3000/api/posts/`,{
                
                    method: "POST",
                    body: JSON.stringify({ content,userId})
                    
                ,
                
                    headers: {
                        'content-type' : 'application/json',
                        'Authorization': `Bearer `+ token,
                    },
                
                })
                .then(res => {
                    if(res.status === 201)
                    console.log(res);
                    location.href= '/allpost';
                })
            
        }
    }
}
</script>

<style>
    .newpost {
        display: flex;
        flex-flow: row;
        align-items: center;
        margin-top: 20px;
    }
    #postcontent {
        width: 70%;
        height: 60px;
        font-size: 20px;
        border: none;
        margin-left: 30px;
    }
    #btnSend {
        width: 10%;
        padding: 20px;
        border-radius: 50px;
        font-size: 20px;
        margin-left: 5px;
    }
    .titlePost {
        font-size: 2rem;
        width: 20%;
    }
</style>*/