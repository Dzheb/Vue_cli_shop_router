<template>
  <div class="page__404">
    <div class="content">
      <p class="content__header">404</p>
      <p class="content__content">
        We are sorry, but the page you requested was not found
      </p>
      <router-link class="back__home__btn" to="/">
        <button class="tag">
          Back To Home
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
              stroke="#CDA274"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </router-link>
    </div>
    <div class="img__404">
      <img
        src="../assets/img/404.svg"
        alt="../assets/img/404.svg"
        class="404__img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopNot',
};
</script>

<style lang="css" scoped>
.content__header {
  font-family: DM Serif Display;
  font-size: 250px;
  font-weight: 400;
  line-height: 313px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(205, 162, 116, 1);
}
.content {
  width: 40%;
}
.content__content {
  font-family: DM Serif Display;
  font-size: 35px;
  font-weight: 400;
  line-height: 53px;
  letter-spacing: 0.01em;
  text-align: left;
}
.img__404 {
  width: 50%;
}
.page__404 {
  display: flex;
  justify-content: space-between;
}

.tag {
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0.02em;
  text-align: center;
  padding: 26px 54px 26px 54px;
  border-radius: 18px;
  gap: 10px;
  margin: 40px 0;
  background-color: beige;
  color: rgb(54, 52, 52);
  transition: background-color 1s, color 1s;
}
.tag:hover {
  background-color: rgb(54, 52, 52);
  color: beige;
  transition: background-color 1s, color 1s;
}
</style>
