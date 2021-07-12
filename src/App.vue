<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Posts from './pages/Posts'

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

<style lang='scss'>
  @import './style.scss';
</style>
