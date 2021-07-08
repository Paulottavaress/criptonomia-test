<template>
    <footer class="footer bg-dark">
      <div class="social">
        <a href="https://www.criptonomia.com/" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
        <a href="#" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
        <a href="#" target="_blank"><i class="fab fa-youtube fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/lincolnaugusto/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
      </div>
      <p>Copyright &copy; 2021 - Criptonomia</p>
    </footer>
</template>

<style scoped>
/* Footer */
.footer {
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
  height: 200px;
}

.footer a {
  color: #fff;
}

.footer a:hover {
  color: #28a745;
}

.footer .social > * {
  margin-right: 30px;
}
</style>