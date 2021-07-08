<template>
  <Header />
  <Posts />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Posts from './components/Posts.vue'

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
/* basic styling*/

  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap");
* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  background: #fff;
  color: #333;
  line-height: 1.6;
}

ul {
  list-style: none;
}

a {
  color: #333;
  text-decoration: none;
}

h1, h2 {
  font-weight: 300;
  line-height: 1.2;
}

p {
  margin: 10px 0;
}

img {
  width: 100%;
}

/* Utilities */

/* Text colors */
.text-primary {
    color: #28a745;
}

.text-secondary {
    color: #0284d0;
}

.text-dark {
    color: #333;
}

/* Button */
.btn {
    cursor: pointer;
    display: inline-block;
    padding: 10px 30px;
    color: #fff;
    background-color: #28a745;
    border: none;
    border-radius: 5px;
}

.btn:hover {
    opacity: 0.9;
}

.btn-primary, .bg-primary {
   background: #28a745;
   color: #fff;
}
.btn-secondary, .bg-secondary {
   background: #0284d0;
   color: #fff;
}
.btn-dark, .bg-dark {
   background: #333;
   color: #fff;
}
.btn-light, .bg-light {
   background: #f4f4f4;
   color: #333;
}
.btn-medium, .bg-medium {
   background: #a5a5a5;
   color: #fff;
   margin-left: 5px;
}

.btn-outline {
    background: transparent;
    border: 1px solid #fff;
}

/* Flex items */
.flex-items {
    display: flex;
    text-align: center;
    justify-content: center;
    text-align: center;
    height: 100%;
}

.flex-items > div {
    padding: 20px;
}

/* Flex columns */
.flex-columns.flex-reverse .row {
    flex-direction: row-reverse;
}

.flex-columns .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}

.flex-columns .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
}

.flex-columns .column .column-1,
.flex-columns .column .column-2 {
    height: 100%;
}

.flex-columns img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.flex-columns .column-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 30px;
}

.flex-columns h2 {
    font-size: 40px;
    font-weight: 100;
}

.flex-columns h4 {
    margin-bottom: 10px;
}

.flex-columns p {
    margin: 20px 0;
}

/* Section header */
.section-header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.section-header h2 {
    font-size: 40px;
    margin: 20px 0;
}

.section-padding {
    padding: 20px 20px 40px;
}

/* Flex grid */
.flex-grid .row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
}

.flex-grid .column {
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
}

/* Mobile responsiveness */

@media (max-width: 768px) {
  .navbar {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    height: 120px;
    padding: 20px;
  }
  .navbar a {
    padding: 10px 10px;
    margin: 0 3px;
  }
  .flex-columns .column {
    -webkit-box-flex: 100%;
        -ms-flex: 100%;
            flex: 100%;
    max-width: 100%;
  }
}

</style>
