<template>
  <article
    v-for="(comment, index) in comments"
    :v-if="comments.length"
    :key="index"
    class="flex-columns flex-reverse"
    :class="[comment.id % 2 === 0 ? 'bg-dark' : 'bg-light']"
  >
    <Comment
      :commentId="comment.id"
      :commentName="comment.name"
      :commentEmail="comment.email"
      :commentBody="comment.body"
    />
  </article>
  <div v-if="!comments.length" class="loading">Loading...</div>
</template>

<script>
import Comment from "./Comment";
import { mapGetters } from "vuex";

export default {
  name: "Comments",
  components: { Comment },
  computed: {
    ...mapGetters("blog", ["listComments"]),
  },
  props: {
    postId: {
      type: Number,
      default: false,
      required: true,
    },
    showComments: {
      type: Boolean,
      default: false,
      required: false,
    },
    comments: {
      type: [Array, Boolean],
      default: false,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  line-height: 50px;
}
</style>