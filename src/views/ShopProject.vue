<template>
  <div>
    <div class="starter">
      <img
        class="starter__project__img"
        src="../assets/img/Project_promo.svg"
        alt="Logo"
      />
    </div>
    <div class="projects__header shift__up">
      <p class="projects__header__header">Our Project</p>
      <div class="breadcrumb">
        <div class="breadcrumb__box-link">
          <a class="breadcrumb__link" href="#">Home</a>
        </div>
        <div class="breadcrumb__box-link">
          <a class="breadcrumb__link" href="#">Project</a>
        </div>
      </div>
    </div>
    <div class="project__tags">
      <button
        class="project__tag"
        @click="chngTab(btn, index)"
        v-for="(btn, index) in nameBtns"
        :key="index"
      >
        {{ btn }}
      </button>
    </div>
    <div class="projects__list">
      <div
        v-for="item in filteredProjects"
        :key="item.id"
        class="project__item"
      >
        <div class="stars">
          <div v-html="starsPrint(item.like)"></div>
        </div>
        <img class="project__item__img" :src="item.img" alt="" />
        <div class="project__item__content">
          <div class="project__item__contenet_left">
            <p class="project__item__text">{{ item.item_text }}</p>
            <div class="breadcrumb">
              <div class="breadcrumb__box-link">
                <a class="breadcrumb__link" href="index.html">Decor </a>
              </div>
              <div class="breadcrumb__box-link">
                <a class="breadcrumb__link" href="#">Artchitecture</a>
              </div>
            </div>
            <!--закрытие   breadcrumb-->
          </div>
          <router-link class="project__item__btn" to="/projectdetails">
            <svg
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00012 19L9.00012 10L1.00012 1"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
        <a :href="item.section_href" class="news__section">{{
          item.section_name
        }}</a>
      </div>
    </div>
    <div class="project__buttons">
      <button
        v-for="item in buttons"
        :key="item.id"
        @click="showPage(item.id)"
        class="project__item__btn"
      >
        {{ item.number }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopProject',
  data() {
    return {
      nameBtns: ['Kitchen', 'Bedroom', 'Bath room', 'Living area'],
      currentTab: 'Kitchen',
      projects: [
        {
          id: 0,
          img: require('../assets/img/Project_kitchen_1.svg'),
          section_name: 'Kitchen',
          item_text: 'Minimal Kitchen',
          like: 1,
        },
        {
          id: 1,
          img: require('../assets/img/Project_kitchen_2.svg'),
          section_name: 'Kitchen',
          item_text: 'Modern Kitchen',
          like: 0,
        },
        {
          id: 3,
          img: require('../assets/img/Project_bathroom_1.svg'),
          section_name: 'Bath room',
          item_text: 'Minimal bathroom',
          like: 5,
        },
        {
          id: 4,
          img: require('../assets/img/Project_bathroom_2.svg'),
          section_name: 'Bath room',
          item_text: 'Modern bathroom',
          like: 0,
        },
        {
          id: 5,
          img: require('../assets/img/Project_bedroom_1.svg'),
          section_name: 'Bedroom',
          item_text: 'Minimal bedroom',
          like: 2,
        },
        {
          id: 6,
          img: require('../assets/img/Project_bedroom_2.svg'),
          section_name: 'Bedroom',
          item_text: 'Modern bedroom',
          like: 0,
        },
        {
          id: 7,
          img: require('../assets/img/Project_livingroom_1.svg'),
          section_name: 'Living area',
          item_text: 'Minimal livingroom',
          like: 3,
        },
        {
          id: 8,
          img: require('../assets/img/Project_livingroom_2.svg'),
          section_name: 'Living area',
          item_text: 'Modern livingroom',
          like: 0,
        },
      ],
      buttons: [
        {
          id: 0,
          number: '01',
        },
        {
          id: 1,
          number: '02',
        },
      ],
      star: '<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4153 5.8541C14.014 4.01148 16.6208 4.01148 17.2195 5.8541L18.2361 8.98278C18.5038 9.80682 19.2717 10.3647 20.1382 10.3647H23.4279C25.3653 10.3647 26.1709 12.844 24.6034 13.9828L21.942 15.9164C21.241 16.4257 20.9477 17.3284 21.2155 18.1525L22.232 21.2812C22.8308 23.1238 20.7218 24.656 19.1544 23.5172L16.493 21.5836C15.792 21.0743 14.8428 21.0743 14.1418 21.5836L11.4804 23.5172C9.91297 24.656 7.80401 23.1238 8.40272 21.2812L9.41929 18.1525C9.68703 17.3284 9.39372 16.4257 8.69274 15.9164L6.03133 13.9828C4.46391 12.844 5.26946 10.3647 7.2069 10.3647H10.4966C11.363 10.3647 12.131 9.80682 12.3987 8.98278L13.4153 5.8541Z" fill="#FFA928"/> </svg>',
    };
  },

  methods: {
    chngTab(btn, index) {
      this.currentTab = btn;
      const tags = document.querySelectorAll('.project__tag');
      tags.forEach((tag) => {
        tag.classList.remove('selected');
      });
      tags[index].classList.add('selected');
    },
    chngPage() {
      this.$parent.currentPage = 'ProjectDetails';
    },
    starsPrint(stars) {
      let element = '';
      for (let i = 0; i < stars; i++) {
        element += this.star;
      }
      return element;
    },
  },
  computed: {
    filteredProjects() {
      if (this.currentTab)
        return this.projects.filter(
          (item) => item.section_name === this.currentTab
        );
      else return this.projects;
    },
  },
  mounted() {
    const tags = document.querySelectorAll('.project__tag');
    tags[0].classList.add('selected');
  },
};
</script>
<style lang="css" scoped>
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
  width: 1600px;
  font-family: 'Lato', sans-serif;
  min-height: 50%;
  background: linear-gradient(rgb(199, 199, 218) 0 0) calc(1 * 100% / 6),
    linear-gradient(rgb(199, 199, 218) 0 0) calc(2 * 100% / 6),
    linear-gradient(rgb(199, 199, 218) 0 0) calc(3 * 100% / 6),
    linear-gradient(rgb(199, 199, 218) 0 0) calc(4 * 100% / 6),
    linear-gradient(rgb(199, 199, 218) 0 0) calc(5 * 100% / 6);
  background-size: 1px 100%;
  background-repeat: no-repeat;
}

img {
  max-width: 100%;
}
a {
  text-decoration: none;
  color: rgba(77, 80, 83, 1);
}

.shift__up {
  padding: 20px;
  position: absolute;
  margin-top: -175px !important;
  margin-left: 350px !important;
  z-index: 2;
  width: 375px;
  min-height: 150px;
  border-radius: 30px 30px 0 0;
  background-color: rgba(255, 255, 255, 1);
}

.starter {
  position: relative;
}

.starter__project__img {
  z-index: -1;
  margin-bottom: 50px;
  width: 100%;
}

.projects__header {
  display: flex;
  flex-direction: column;
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

.project__buttons {
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
.projects__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  display: flex;
  justify-content: space-between;
}
.blog__details__img {
  width: 100%;
  object-fit: cover;
  border-radius: 50px;
}

.project__tags {
  margin: 35px 0;
  display: flex;
  justify-content: center;
}

.project__tag {
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0.02em;
  text-align: center;
  padding: 8px 30px;
  margin: 4px;
  background-color: beige;
  color: rgba(41, 47, 54, 1);

  border-radius: 8px;
  transition: background-color 1s, color 1s;
}
.project__tag:hover {
  background-color: rgba(205, 162, 116, 1);

  color: beige;
  transition: background-color 1s, color 1s;
}
.selected {
  background-color: rgb(205, 61, 36);

  color: beige;
  transition: background-color 1s, color 1s;
}
.project__item__img {
  height: fit-content;
}
.project__item {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  margin: 20px 0;
  padding: 16px;
}

.project__item__content {
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project__item__text {
  width: 100%;
  color: rgba(41, 47, 54, 1);
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
}
.stars {
  display: flex;
  position: absolute;
  z-index: 2;
  justify-content: right;
  width: 90%;
  margin-top: 8px;
}
</style>
