<template>
    <main id="blog-post">
      <ul v-for="(post, index) in posts" :key="index">
        <Post :userId="post.userId" :postId="post.id" :postTitle="post.title" :postBody="post.body"/>
      </ul>
    </main>
</template>

<script>
import Post from './Post/index.vue'

export default {
  name: 'Posts',
  components: { Post },
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.posts = data)
    .catch(err => console.log(err.message))
  }
}
</script>


<style scoped>
  @import './style.scss';
</style>