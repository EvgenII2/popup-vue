<template>
  <div class="images-container">
    <image-item
      v-for="(image, index) in images"
      :key="+image.id + index"
      :image="image"
      @on-click="onImageClick"
    >
    </image-item>
  </div>
</template>

<script>
import ImageItem from './Image.vue';
export default {
  name: 'ImagesList',
  props: ['images'],
  components: { ImageItem },
  emits: ['onImageClick'],
  methods: {
    onImageClick(ev) {
      console.log(ev);
      this.$emit('onImageClick', ev);
    },
  },
};
</script>

<style lang="scss" scoped>
.images-container {
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  column-count: 4;
  column-gap: 5px;
  min-height: 400px;
}
</style>
