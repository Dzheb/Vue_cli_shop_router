<template>
  <div>
    <footer class="footer">
      <div class="footer__logo__block">
        <div class="footer__logo">
          <img src="../assets/img/Logo.svg" alt="Logo" />
          <h3>Interno</h3>
        </div>
        <p class="footer__logo__text">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <div class="footer__logo__twitter">
          <a href="">
            <img src="../assets/img/twitter.svg" alt="Logo" />
          </a>
          <a href="">
            <img src="../assets/img/in.svg" alt="Logo" />
          </a>
        </div>
      </div>
      <div class="footer__pages">
        <h3>Pages</h3>
        <nav class="footer__pages__menu">
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/project">Project</router-link>
          <router-link class="link" to="/blog">Blog</router-link>
        </nav>
      </div>
      <div class="footer__contact">
        <h3>Contacts</h3>
        <p class="address">55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p class="email">contact@interno.com</p>
        <p class="tel">(123) 456 - 7890</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ShopFooter',
};
</script>
<style lang="css" scoped>
.link {
  text-decoration: none;
  color: rgba(77, 80, 83, 1);
}
.link:hover {
  color: rgb(227, 46, 119);
}
.footer {
  margin: 180px 0;
  display: flex;
  justify-content: center;
  gap: 10vw;
}
.footer__logo {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  justify-content: left;
  gap: 10px;
}
.footer__logo__block {
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;
}
.footer__logo__text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
}
.footer__logo__twitter {
  display: flex;
  justify-content: left;
  gap: 40px;
}
.footer__pages {
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
}
.footer__pages__menu {
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 66px;
  letter-spacing: 0.01em;
  color: rgba(77, 80, 83, 1);
}
.footer__contact {
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  gap: 16px;
}
</style>
