<template>
 <div class="blog__details_bedroom">
  <div class="post__header">Design Your Nice Bedroom</div>
  <p class="normal">
    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
    turpmaximus.posuere in.Contrary to popular belief.There are many
    variations of passages of Lorem Ipsum available, but the
    majority have suffered.
  </p>
  <ol class="normal ol">
    <li>
      Contrary to popular belief.There are many variations of
      passages of Lorem Ipsum available, but the majority have
      suffered.
    </li>
    <li>
      Contrary to popular belief.There are many variations of
      passages of Lorem Ipsum available, but the majority have
      suffered.
    </li>
  </ol>
  <img
    src="../assets/img/Blog_details_bedroom.svg"
    alt="img/Blog_details_bedroom.svg"
    class="blog__details__img"
  />
  <p class="normal">
    Embarrassing hidden in the middle of text. All the Lorem Ipsum
    generators on the Internet tend to repeat predefined chunks as
    necessary.
  </p>
</div>
</template>

<script>
export default {
  name: 'ShopBedroom',

  data() {
    return {
      
    };
  },

  methods: {
    
  },
};
</script>

<style lang="css" scoped>
.blog__details_bedroom {
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
  justify-content: left;
}
.blog__details__img {
  width: 100%;
  object-fit: cover;
  border-radius: 50px;
}

.normal {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
}
.ol {
  margin-left: 20px;
}
</style>