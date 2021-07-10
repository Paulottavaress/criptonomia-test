<template>
    <li>
        <article class="flex-columns" :class="{ 'flex-reverse' : this.postId % 2 === 0 }">
            <div class="row">
                <div class="column">
                <div class="column-1">
                    <img src="../../../assets/blog/blog1.jpg" />
                </div>
                </div>
                <div class="column">
                <div class="column-2" :class="[this.postId % 2 === 0 ? 'bg-dark' : 'bg-light']">
                    <h2>{{ postTitle }}</h2>
                    <p class="meta">
                    <i class="fas fa-user"></i> Posted by
                    <strong class='user' @click="toggleUsers">{{ users.name }}</strong> | {{ users.email }}
                    </p>
                    <p>
                    {{ postBody }}
                    </p>
                    <div class="flex-columns">
                    <a href="#" class="btn" :class="[this.postId % 2 === 0 ? 'btn-light' : 'btn-dark']">
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
        <Comments :postId="postId" v-if="showComments" />
        <Users @close="toggleUsers" :userName="users.name" :userNick="users.username" v-if="showUsers"/>
    </li>
</template>

<script>
import Comments from '../Comments'
import Users from './Users'

export default {
  name: 'Post',
  components: { Comments, Users },
  data() {
    return {
      showComments: false,
      showUsers: false,
      users: []
    }
  },
  props: {
      userId: {
          type: Number,
          default: false,
          required: true
      },
      postId: {
          type: Number,
          default: false,
          required: true
      },
      postTitle: {
          type: String,
          default: false,
          required: true
      },
      postBody: {
          type: String,
          default: false,
          required: true
      }
  },
  methods: {
    toggleComments() {
      this.showComments = !this.showComments
    },
    toggleUsers() {
      this.showUsers = !this.showUsers
    }
  },
  mounted() {
    fetch ('https://jsonplaceholder.typicode.com/users/'+ this.userId)
    .then(res => res.json())
    .then(data => this.users = data)
    .catch(err => console.log(err.message))
  }
}
</script>

