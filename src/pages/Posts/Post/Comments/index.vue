<template>
  <article
    v-for="(comment, index) in comments"
    :key="index"
    class="flex-columns flex-reverse"
    :class="[
      comment.id % 2 === 0 ? 'bg-dark' : 'bg-light',
      showComments ? 'expanded' : '',
    ]"
  >
    <Comment
      :commentId="comment.id"
      :commentName="comment.name"
      :commentEmail="comment.email"
      :commentBody="comment.body"
      :comment="setComments(comment.id)"
    />
  </article>
</template>

<script>
import Comment from "./Comment";
import {mapGetters} from 'vuex';

export default {
  name: "Comments",
  components: { Comment },
  computed: {
      ...mapGetters('blog', ['getComments']),
      setComments(id) {
          return this.getComments(id)
      }
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
  },
  data() {
    return {
      comments: [],
    };
  }
};
</script>

<style lang="scss" scoped>

</style>