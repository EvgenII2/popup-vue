<template>
  <div class="">
    <button-loading />
    <image-container />
    <popup-container />
    <loader-container />
  </div>
</template>

<script>
import ButtonLoading from './ButtonLoading.vue';
import ImageContainer from './Images.vue';
import LoaderContainer from './LoaderContainer.vue';
import PopupContainer from './PopupContainer.vue';
import { imageApi } from '../utils/ImageApi';

export default {
  name: 'MainContainer',
  data() {
    return {
      images: [],
      page: 2,
      currentImage: null,
      isLoading: false,
    };
  },
  methods: {
    loadImage() {
      this.isLoading = true;
      imageApi.getPictures(this.page).then((res) => {
        this.images.concat(res);
        this.page += 1;
        this.isLoading = false;
        console.log(res);
      });
    },
  },
  mounted: function () {
    this.loadImage();
  },
  components: {
    ButtonLoading,
    ImageContainer,
    PopupContainer,
    LoaderContainer,
  },
};
</script>

<!-- Add "s,
    LoaderContainercoped" attribute to limit CSS to this component only -->
<style scoped></style>
