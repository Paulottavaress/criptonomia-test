<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <div class="close">
                <i class="fas fa-times" @click="closeModal"></i>
            </div>
            <h3><i class="fas fa-user"></i> About the author</h3>
            <div class="info">
                <div class="left-info ">
                    <div class="picture">
                        <img src="../../../../assets/user/default-user.png">
                    </div>
                    <div class="bottom-info">
                        <p><strong>Name: </strong>{{ userName }}</p>
                        <p><strong>Username: </strong>{{ userNick }}</p>
                    </div>
                </div>
                <div class="right-info">
                    <p><strong>Email: </strong>{{ userEmail }}</p>
                    <p><strong>Phone: </strong>{{ userPhone }}</p>
                    <p><strong>City: </strong>{{ userCity }}</p>
                    <p><strong>Website: </strong>{{ userWebsite }}</p>
                    <p><strong>Company: </strong>{{ userCompanyName }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'User',
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
        },
        userEmail: {
            type: String,
            default: false,
            required: true
        },
        userPhone: {
            type: String,
            default: false,
            required: true
        },
        userCity: {
            type: String,
            default: false,
            required: true
        },
        userWebsite: {
            type: String,
            default: false,
            required: true
        },
        userCompanyName: {
            type: String,
            default: false,
            required: true
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style lang='scss' scoped>
    @import './style.scss';
</style>