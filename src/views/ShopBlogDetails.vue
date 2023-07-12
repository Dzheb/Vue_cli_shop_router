<template>
  <div class="blog__details">
    <div class="main__block center transparent">
      <div class="starter">
        <img
          class="starter__blog__img"
          src="@/assets/img/Blog_details_promo.svg"
          alt="Logo"
        />
      </div>
      <!--  -->
      <div class="blog__details">
        <div class="blog__details__main">
          <!-- components -->
          <component :is="changeTab"></component>
        </div>
        <div class="tags">
          <p class="tags__heading">Tags</p>
          <button
            class="tag"
            @click="currentTab = btn"
            v-for="btn in nameBtns"
            :key="btn.id"
          >
            {{ btn }}
          </button>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import ShopKitchen from '../components/ShopKitchen.vue';
import ShopBedroom from '../components/ShopBedroom.vue';
import ShopBuilding from '../components/ShopBuilding.vue';
import ShopArchitecture from '../components/ShopArchitecture.vue';
import ShopKitchen_planning from '../components/ShopKitchenPlanning.vue';

export default {
  name: 'ShopBlogDetails',
  components: {
    ShopKitchen,
    ShopBedroom,
    ShopBuilding,
    ShopArchitecture,
    ShopKitchen_planning,
  },
  data() {
    return {
      nameBtns: [
        'Kitchen',
        'Bedroom',
        'Building',
        'Architecture',
        'Kitchen planning',
      ],
      currentTab: 'Kitchen',
    };
  },
  computed: {
    changeTab() {
      return `Shop${this.currentTab.replace(' ', '_')}`;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  width: 1600px;
  font-family: 'Lato', sans-serif;
}

.main__block {
  display: flex;
  flex-direction: column;
  /* width: 1600px;
  font-family: 'Lato', sans-serif; */
  min-height: 50%;
}

img {
  max-width: 100%;
}
a {
  text-decoration: none;
  color: rgba(77, 80, 83, 1);
}

.center {
  margin-left: calc(50% - 570px);
  margin-right: calc(50% - 570px);
}
.shift__up {
  padding: 20px;
  margin-top: -175px !important;
  margin-left: 350px !important;
  z-index: 2;
  width: 375px;
  min-height: 150px;
  border-radius: 30px 30px 0 0;
  background-color: rgba(255, 255, 255, 1);
}
header {
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
.header__right a {
  text-decoration: none;
}
.starter {
  position: relative;
}
.starter__img {
  border-radius: 50px;
}
.starter__blog__img {
  z-index: -1;
  margin-bottom: 50px;
  width: 100%;
}

.starter__content {
  position: absolute;
  top: 100px;
  left: 40px;
  width: 434px;
}
.starter__content__header {
  font-family: DM Serif Display;
  font-size: 65px;
  font-weight: 400;
  line-height: 81px;
  letter-spacing: 0em;
  text-align: left;
}
.starter__content__text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
}
.starter__content__button {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(41, 47, 54, 1);
  padding: 26px 48px;
  border-radius: 8px;
  font-family: Jost;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0.02em;
  text-align: center;
  transition: color 1s, background-color 1s;
}
.starter__content__button:hover {
  cursor: pointer;
  color: rgba(41, 47, 54, 1);
  background-color: rgba(255, 255, 255, 1);
  transition: color 1s, background-color 1s;
}
.post__header {
  margin: 16px 0;
  display: flex;
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0.02em;
  justify-content: left;
}
.post {
  margin: 50px 0 100px 0;
  display: flex;
  border: solid 1px;
  padding: 16px;
  border-radius: 50px 50px 50px 50px;
  justify-content: space-between;
}
.post__img {
  border-radius: 50px 50px 50px 50px;
}
.post__content {
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 8px;
}
.post__content__header {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
  color: rgba(41, 47, 54, 1);
}
.blog__news__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog__details__content {
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.projects__header {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin: 26px 0;
}
.projects__header__header {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0.02em;
  text-align: center;
}
.projects__text {
  width: 694px;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: center;
}
.projects__view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.project__item__img {
  height: fit-content;
  width: 500px;
}
.img__corner__right__up {
  border-radius: 0 60px 0 0;
}
.img__corner__right__down {
  border-radius: 0 0 60px 0;
}
.img__corner__left__down {
  border-radius: 0 0 0 60px;
}
.img__corner__left__up {
  border-radius: 60px 0 0 0;
}
.project__item {
  margin: 20px 0;
}
.project__item__content {
  display: flex;
  justify-content: space-between;
}
.project__item__text {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
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
.project__item__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 240, 236, 1);
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.project__item__btn:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 1);
}

.results {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 457px;
  background: rgba(244, 240, 236, 1);
  margin-bottom: 70px;
}
.results__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(205, 162, 116, 1);
  font-family: DM Serif Display;
  font-size: 85px;
  font-weight: 400;
  line-height: 106px;
  letter-spacing: 0.02em;
  text-align: left;
}
.results__item__text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: center;
  color: rgba(77, 80, 83, 1);
}

.news__view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.news__item__img {
  height: fit-content;
  border-radius: 50px 50px 0 0;
}
.news__item {
  position: relative;
  width: 300px;
  margin: 20px 0;
  border: solid 1px;
  padding: 16px;
  border-radius: 50px 50px 50px 50px;
}
.news__item:hover {
  background-color: rgba(231, 231, 231, 1);
}
.news__item__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.news__item__text {
  width: 85%;
  color: rgba(41, 47, 54, 1);
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
}
.news__buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 50px 0;
}
.news__section {
  position: absolute;
  top: 200px;
  left: 40px;
  background-color: aliceblue;
  padding: 8px;
  border-radius: 8px 8px 8px 0;
  border: solid 1px;
  color: rgba(77, 80, 83, 1);
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: center;
}
.news__section:active {
  background-color: rgb(145, 183, 216);
}
.blog__details {
  display: flex;
  justify-content: space-between;
}
.blog__details__main {
  display: flex;
  flex-direction: column;
  width: 600px;
}
.blog__details_kitchen {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.log__details_architecture {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.blog__details_bedroom {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.blog__details_kitchen_building {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.blog__details__img {
  width: 100%;
  object-fit: cover;
  border-radius: 50px;
}
.blog__details_kitchen_panning {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.blog__details__quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: rgba(244, 240, 236, 1);
  color: rgba(205, 162, 116, 1);
  border-radius: 40px;
  padding: 54px 123px;
  margin: 16px 0;
}
.ol {
  margin-left: 20px;
}
.normal {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
}
.blog__details__qoute__text {
  font-family: DM Serif Display;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.02em;
  text-align: center;
}
.tags {
  width: 400px;
  text-align: left;
}
.tags__heading {
  margin: 16px 0;
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
}
.tag {
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0.02em;
  text-align: center;
  padding: 8px 30px;
  margin: 4px;
  background-color: beige;
  color: rgb(54, 52, 52);
  border-radius: 8px;
  transition: background-color 1s, color 1s;
}
.tag:hover {
  background-color: rgb(54, 52, 52);
  color: beige;
  transition: background-color 1s, color 1s;
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
