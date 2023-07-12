<template>
  <div class="blog__details_kitchen">
    <div class="post__header">Let’s Get Your Own New Kitchen</div>
    <img
      src="../assets/img/Blog_details_kitchen.svg"
      alt="img/Blog_details_kitchen.svg"
      class="blog__details__img"
    />
    <div class="blog__details__content">
      <p class="small__text">28 Marzo,2023</p>
      <div class="breadcrumb">
        <div class="breadcrumb__box-link">
          <a class="breadcrumb__link" href="#">Interior</a>
        </div>
        <div class="breadcrumb__box-link">
          <a class="breadcrumb__link" href="index.html">Home</a>
        </div>
        <div class="breadcrumb__box-link">
          <a class="breadcrumb__link" href="index.html">Decor </a>
        </div>
        <!--закрытие   breadcrumb-->
      </div>
    </div>
    <div class="blog__details__text">
      <p class="normal">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopKitchen',

  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>
.blog__details_kitchen {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.post__header {
  margin: 16px 0;
  display: flex;
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0.02em;
  text-align: left;
}
.blog__details__img {
  width: 100%;
  object-fit: cover;
  border-radius: 50px;
}
.blog__details__content {
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.breadcrumb {
  display: flex;
}
.breadcrumb__box-link:last-child .breadcrumb__link {
  font-weight: 700;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #636363;
}
.breadcrumb__box-link:not(:last-child)::after {
  content: '/';
  padding-left: 8px;
  padding-right: 8px;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #636363;
}
.breadcrumb__link {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  color: #636363;
}
.breadcrumb__link:hover {
  color: rgb(241, 109, 127) !important;
}
.small__text{
  font-family: Jost;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.01em;
text-align: left;

}
.normal {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
}
</style>
