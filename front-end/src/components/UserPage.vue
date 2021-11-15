<template>
    <div class='userpage'>
        <router-link to='/HomeUs'>
            <img class="logoHomeuser" alt='groupomania logo' src='../assets/icon.png'>
        </router-link>
        <nav>
            <router-link to='/UserAccountPage'>
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
.header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.logoHeader {
    width: 60%;
    position: relative;
    right: 220px;
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
</style>