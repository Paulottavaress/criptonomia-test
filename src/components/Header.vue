<template>
    <header class="header blog">
      <div id="navbar" class="navbar top">
        <h1 class="logo">
          <span class="text-primary"><i class="fas fa-book-open"></i> Cripto</span
          >Nomia
        </h1>
        <nav>
          <ul>
          </ul>
        </nav>
      </div>

      <div class="content">
        <h1>Criptonomia Blog</h1>
      </div>
    </header>
</template>

<style scoped>
  .navbar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  background-color: #333;
  color: #fff;
  opacity: 0.8;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  padding: 0 30px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  }

  .navbar .top {
  background: transparent;
  }

.navbar .top .logo {
  font-weight: 400;
  }

.navbar ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  }

.navbar ul a {
  color: #fff;
  padding: 10px 20px;
  margin: 0 5px;
  }

.navbar ul a:hover {
  border-bottom: #28a745 2px solid;
  }

/* Header */
.header {
  height: 100vh;
  position: relative;
  color: #fff;
}

.header * {
  z-index: 10;
}

.header .content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0 20px;
}

.header .content h1 {
  font-size: 55px;
}

.header .content p {
  font-size: 23px;
  max-width: 600px;
  margin: 20px 0 30px;
}

.header:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.header.blog {
  background: url("../assets/home/blog.jpg") no-repeat center center/cover;
  height: 30vh;
}
</style>