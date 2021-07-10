<template>
    <User :userName="userName" :userNick="userNick"/>
</template>

<script>
import User from './User/index.vue'

export default {
    name: 'Users',
    components: { User },
    props: {
        userName: {
            type: String,
            default: false,
            required: true
        },
        userNick: {
            type: String,
            default: false,
            required: true
        }
    }
}
</script>
