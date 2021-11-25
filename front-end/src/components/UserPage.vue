<template>
    <div class='userpage'>
        <router-link to='/allpost'>
            <img class="logoHomeuser" alt='groupomania logo' src="../assets/icon-left-font-monochrome-black.png">
        </router-link> 
        <nav>
            <router-link to='/allpost'>
                <div class="account">Mon compte</div>
            </router-link>
            <div class="disconnect" @click = disconnect()>Se déconnecter</div>
        </nav>
       
        
    </div>
</template>

<script>
export default {
    name:'UserPage',

    methods: {
        disconnect() {
            localStorage.removeItem('user');
            location.href="/";
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