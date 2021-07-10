<template>
    <article v-for="(comment, index) in comments" :key="index" class="flex-columns flex-reverse" :class="[comment.id % 2 === 0 ? 'bg-dark' : 'bg-light']">
        <Comment :commentId="comment.id" :commentName="comment.name" :commentEmail="comment.email" :commentBody="comment.body"/>
    </article>
</template>

<script>
import Comment from './Comment/index.vue'

export default {
    name: 'Comments',
    components: { Comment },
    props: {
        postId: {
            type: Number,
            default: false,
            required: true
        }
    },
    data() {
        return {
            comments: []
        }
    },
    methods: {
      
    },
    mounted() {
        fetch ('https://jsonplaceholder.typicode.com/posts/' + this.postId + '/comments')
        .then(res => res.json())
        .then(data => this.comments = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>

</style>