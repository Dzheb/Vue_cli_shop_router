<template>
  <div class="project__details">
    <div class="starter">
      <img
        class="starter__project__img"
        src="@/assets/img/Project_details_promo.svg"
        alt="Logo"
      />
    </div>
    <div class="project__details__main">
      <div id="carousel_block" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            v-for="item in btns"
            :key="item.id"
            type="button"
            data-bs-target="#carousel_block"
            :data-bs-slide-to="item.num"
            :class="item.class"
          ></button>
        </div>
        <div class="carousel-inner">
          <div v-for="it in getProjects" :key="it.id" :class="it.classActive">
            <div class="text__content">
              <div class="text__content__text">
                <p class="text__content__header">{{ it.header }}</p>
                {{ it.header_text }}
              </div>
            </div>
            <img :src="it.src" :alt="it.alt" class="d-block w-100" />
          </div>
        </div>
        <!-- Left and right controls/icons -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carousel_block"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carousel_block"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ShopProjectDetails',
  data() {
    return {
      btns: [
        { num: '0', class: 'active' },
        { num: '1', class: '' },
        { num: '2', class: '' },
        { num: '3', class: '' },
        { num: '4', class: '' },
        { num: '5', class: '' },
        { num: '6', class: '' },
        { num: '7', class: '' },
        { num: '8', class: '' },
      ],
    };
  },
  computed: {
    ...mapGetters(['getProjects']),
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
.starter {
  position: relative;
}
.starter__img {
  border-radius: 50px;
}
.starter__project__img {
  z-index: -1;
  margin-bottom: 50px;
  width: 100%;
}
.blog__details__content {
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project__details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project__details__main {
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 1200px;
}
.carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  border-radius: 50%;
  border: 2px solid black !important;
  flex: 0 1 auto;
  width: 20px;
  height: 20px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  margin-bottom: 30px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
.carousel-indicators .active {
  opacity: 1;
}

.text__content__text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  padding: 0 100px;
}
.d-block {
  border-radius: 50px;
}

.text__content__header {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0.02em;
  text-align: center;
}
</style>
