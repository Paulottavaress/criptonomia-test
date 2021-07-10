<template>
    <div class="column-2">
        <p class="meta">
            <i class="fas fa-user" :class="[commentId % 2 === 0 ? 'text-light' : 'text-dark']"></i> Posted by 
            <strong :class="[commentId % 2 === 0 ? 'text-light' : 'text-dark']">{{ commentName }}</strong> | {{ commentEmail }}
        </p>
        <p class="comment">
            {{ commentBody }}
        </p>
        <div class="margin bg-primary"></div>
    </div>
</template>

<script>

export default {
    name: 'Comment',
    props: {
        commentId: {
            type: Number,
            default: false,
            required: true
        },
        commentName: {
            type: String,
            default: false,
            required: true
        },
        commentEmail: {
            type: String,
            default: false,
            required: true
        },
        commentBody: {
            type: String,
            default: false,
            required: true
        }
    }
}
</script>

<style scoped>
    @import './style.scss';
</style>
