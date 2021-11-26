<template>
  <div>
    <form @submit="(e) => e.preventDefault()" class="newpost">
      <label class="titlePost">Postez ici ==></label>
      <input
        v-model="postContent"
        id="postcontent"
        type="text"
        placeholder="Que voulez vous partager?"
      />
      <label> </label>
      <input
        
        type="file"
        id="file"
        @click="handleFileUpload()"
      />
    </form>
    <button id="btnSend" type="submit" @click="sendNewPost()">Envoyer</button>
  </div>
</template>

<script>


export default {
  name: 'NewPost',
  data() {
    return {
      postContent: '',
      file:''

    };
  },
  methods: {
    

    sendNewPost() {
      console.log(this.postContent);
      let formData = new FormData();
      formData.append('file', this.file);
      console.log(formData);

      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const content = this.postContent;
      const imgPost = this.postContent;
      
      fetch(`http://localhost:3000/api/posts/`,formData, {
        method: 'POST',
        body: JSON.stringify({ content, userId, imgPost }),

        headers: {
          'content-type': 'application/json, multipart/form-data',
          Authorization: `Bearer ` + token,
        },
      }).then((res) => {
        if (res.status === 201) console.log(res);
        //location.href = '/allpost';
      });
    },
  },
  handleFileUpload(event){
         this.file = event.target.files[0];
      },
  disconnect() {
            localStorage.removeItem('user');
            location.href="/";
        }

};
</script>

<style scoped>
.newpost {
  width: 80%;
  display: flex;
  flex-direction: column;
  
}
#postcontent {
  width: 50%;
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
</style>
