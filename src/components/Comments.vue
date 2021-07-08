<template>
    <article class="flex-columns flex-reverse">
        <div class="column-2 bg-medium comment-area">
            <p class="meta">
                <i class="fas fa-user text-dark"></i> Posted by
                <strong class="text-dark">Jane Doe</strong> | email@sample.com
            </p>
            <p class="comment">
                {{ postId }}
            </p>
            <div class="margin bg-primary"></div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'comments',
    props: {
        postId: {
            type: String,
            default: false,
            required: true
        }
    }
}
</script>

<style scoped>
    .meta {
        margin: 10px 0px;
    }

    .comment {
        padding: 5px;
        text-align: center;
        margin: 10px 0px;
    }
    .comment-area {
        margin-left: 2%;
    }
    .margin {
        margin: auto;
        width: 50px;
        height: 2px;
    }
</style>