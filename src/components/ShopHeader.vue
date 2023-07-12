<template>
  <div>
    <header class="header">
      <div class="header__left">
        <img src="../assets/img/Logo.svg" alt="Logo" />
        <h3>Interno</h3>
      </div>
      <nav class="header__right">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/project">Project</router-link>
        <router-link class="link" to="/blog">Blog</router-link>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: 'ShopHeader',
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
.header {
  
  color: rgba(41, 47, 54, 1);
  font-family: Jost;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  margin: 53px 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.header__left {
  display: flex;
  align-items: baseline;
  gap: 4px;
}
.header__right {
  display: flex;
  align-items: baseline;
  gap: 40px;
}
</style>
