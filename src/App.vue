<template>
  <Header />
  <Posts />
  <Footer />
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
import Posts from './components/Posts/index.vue'

export default {
  name: 'App',
  components: { Header, Footer, Posts },
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>

<style>
  @import './style.scss';
</style>
