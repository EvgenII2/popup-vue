<template>
  <div class="main">
    <button class="button-load" @click="loadImage">Загрузить картинки</button>
    <image-container :images="images" />
    <popup-container />
    <loader-container :isLoading="isLoading" />
  </div>
</template>

<script>
import ImageContainer from './Images.vue';
import LoaderContainer from './LoaderContainer.vue';
import PopupContainer from './PopupContainer.vue';
import { imageApi } from '../utils/ImageApi';

export default {
  name: 'MainContainer',
  data() {
    return {
      images: [],
      page: 1,
      currentImage: null,
      isLoading: false,
    };
  },
  methods: {
    loadImage() {
      this.isLoading = true;
      imageApi.getPictures(this.page).then((res) => {
        this.images = this.images.concat(res);
        this.page += 1;
        this.isLoading = false;
      });
    },
  },
  mounted: function () {
    this.loadImage();
  },
  components: {
    ImageContainer,
    PopupContainer,
    LoaderContainer,
  },
};
</script>

<!-- Add "s,
    LoaderContainercoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  max-width: 1400px;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 50px auto;
}
.button-load {
  background-color: #66bb6a;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px auto;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: 0.2s background-color;
}

.button-load:disabled {
  background-color: #cfd8dc;
}

.button-load:hover {
  background-color: #4caf50;
}
</style>
