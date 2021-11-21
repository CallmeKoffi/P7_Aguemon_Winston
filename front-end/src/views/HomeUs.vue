<template>
  <div class="homeus">
      <UserPage />
      <NewPost />

      
  </div>
</template>

<script>
import UserPage from '@/components/UserPage.vue';
import NewPost from '../components/NewPost.vue';

export default {
  name: 'HomeUs',
  components: {
    UserPage,
    NewPost,
  }
}
</script>

<style>
</style>