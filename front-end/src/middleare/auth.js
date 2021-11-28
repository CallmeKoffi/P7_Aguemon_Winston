export default function auth (to, from, next) {
    if (!sessionStorage.getItem('token')) {
      next({ name: 'Home' });
      return false
    }
}