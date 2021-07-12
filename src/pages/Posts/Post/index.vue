<template>
  <li>
    <article
      class="flex-columns"
      :class="{ 'flex-reverse': this.postId % 2 === 0 }"
    >
      <div class="row">
        <div class="column">
          <div class="column-1">
            <img src="../../../assets/blog/blog1.jpg" />
          </div>
        </div>
        <div class="column">
          <div
            class="column-2"
            :class="[this.postId % 2 === 0 ? 'bg-dark' : 'bg-light']"
          >
            <h2>{{ postTitle }}</h2>
            <p class="meta">
              <i class="fas fa-user"></i> Posted by
              <strong class="user" @click="toggleUsers">{{
                user.name
              }}</strong>
              | {{ user.email }}
            </p>
            <p>
              {{ postBody }}
            </p>
            <div class="flex-columns">
              <a
                href="#"
                class="btn"
                :class="[this.postId % 2 === 0 ? 'btn-light' : 'btn-dark']"
              >
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
    <Comments 
      :postId="postId" 
      :showComments="showComments"
      v-if="showComments"
    />
    <!-- <router-link to="/author/:id"></router-link> -->
    <User
      @close="toggleUsers"
      :userName="user.name"
      :userNick="user.username"
      :userEmail="user.email"
      :userPhone="user.phone"
      :userCity="user.address.city"
      :userWebsite="user.website"
      :userCompanyName="user.company.name"
      v-if="showUsers"
    />
  </li>
</template>

<script>
import Comments from "./Comments";
import User from "./User";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Post",
  components: { Comments, User },
  data() {
    return {
      showComments: false,
      showUsers: false,
    };
  },
  props: {
    userId: {
      type: Number,
      default: false,
      required: true,
    },
    postId: {
      type: Number,
      default: false,
      required: true,
    },
    postTitle: {
      type: String,
      default: false,
      required: true,
    },
    postBody: {
      type: String,
      default: false,
      required: true,
    },
    user: {
      type: Object,
      default: false,
      required: false,
    },
  },
  methods: {
    ...mapActions("blog", ["getComments"]),
    toggleComments() {
      this.getComments(this.postId);
      this.showComments = !this.showComments;
    },
    toggleUsers() {
      this.showUsers = !this.showUsers;
    },
  },
};
</script>

