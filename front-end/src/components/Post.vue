<template>
    <div>
        
        <span>{{post.id}} | </span>
        <span>{{post.date}}: </span>
        <span>{{post.content}}</span>
    </div>
    
</template>

<script>


export default ({
    data() {
        
    },
    props: ["post"]
})
</script>
