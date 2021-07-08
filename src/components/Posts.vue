<template>
    <main>
      <ul id="blog-post">
        <li v-for="(post, index) in posts" :key="index">
          <article class="flex-columns" :class="{ 'flex-reverse' : post.id % 2 === 0 }">
            <div class="row">
              <div class="column">
                <div class="column-1">
                  <img src="../assets/blog/blog2.jpg" />
                </div>
              </div>
              <div class="column">
                <div class="column-2" :class="[post.id % 2 === 0 ? 'bg-dark' : 'bg-light']">
                  <h2>{{ post.title }}</h2>
                  <p class="meta">
                    <i class="fas fa-user"></i> Posted by
                    <strong>Jane Doe</strong> | email@sample.com
                  </p>
                  <p>
                    {{ post.body }}
                  </p>
                  <div class="flex-columns">
                    <a href="post.html" class="btn" :class="[post.id % 2 === 0 ? 'btn-light' : 'btn-dark']">
                      <i class="fas fa-chevron"></i>
                      Read More
                    </a>
                    <a @click="toggleComments" class="btn btn-medium">
                      <i class="fas fa-chevron"></i>
                      Comments
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <Comments :postId="post.id" v-if="showComments" />
        </li>
      </ul>
    </main>
</template>

<script>
import Comments from './Comments.vue'

export default {
  name: 'Posts',
  components: { Comments },
  data() {
    return {
      posts: [],
      postComments: [],
      showComments: false
    }
  },
  methods: {
    toggleComments() {
      this.showComments = !this.showComments
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

</style>