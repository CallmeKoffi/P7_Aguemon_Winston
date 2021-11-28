<template>
    <div class='userpage'>
        <router-link to='/allpost'>
            <img class="logoHomeuser" alt='groupomania logo' src="../assets/icon-left-font-monochrome-black.png">
        </router-link> 
        <nav>
            <router-link to='/allpost'>
                <div class="account">Home</div>
            </router-link>
            <div>
               <div class="disconnect" @click = disconnect()>Se déconnecter</div>
               <div class="disconnect" @click = deleteAccount()>Supprimer son compte</div>
            </div>
            
        </nav>
       
        
    </div>
</template>

<script>
export default {
    name:'UserPage',
    data(){
        return{

        }
    },

    methods: {
        disconnect() {
            localStorage.removeItem('user');
            location.href="/";
        },
         deleteAccount() {
    

    const userId = JSON.parse(localStorage.getItem("user")).userId;
    fetch(`http://localhost:3000/api/profile/:id/${userId}`,{
        method: "GET",
        body: JSON.stringify({userId}),
        headers: {
                    'Content-type': 'application/json'
                } 
    })
    localStorage.clear();
    //location.href="/Register";
    
  }
            
        }
    }




</script>

<style>
.userpage{
    width: 100%;
}


.header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.logoHeader {
    width: 200px;
    display: block;
    margin: auto;
    
}
nav {
    font-size: 1.4rem;
    cursor: pointer;
    margin: 30px 20px 0px 0px;
}
.account {
    margin-bottom: 3px;
    text-decoration: none;
}
.disconnect:hover, .account:hover {
    font-weight: bold;
}
img{
    width: 30%;
}

</style>