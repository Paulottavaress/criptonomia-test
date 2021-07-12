<template>
    <main id="blog-post">
      <ul v-for="(post, index) in posts" :key="index">
        <Post :userId="post.userId" :postId="post.id" :postTitle="post.title" :postBody="post.body" :user="post.user"/>
      </ul>
    </main>
</template>

<script>
import Post from './Post'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Posts',
  components: { Post },
  computed: {
    ...mapGetters('blog', ['posts'])
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    ...mapActions('blog', ['getPosts'])
  }
}
</script>


<style lang="scss" scoped>
  @import './style.scss';
</style>