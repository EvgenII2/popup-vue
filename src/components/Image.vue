<template>
  <a href="{{image.url}}" key="{{image.id}}" class="image-card__link">
    <img
      class="image-card__image"
      v-bind:src="getCropImage(image.download_url, 5)"
      alt="{{image.author}}"
    />
  </a>
</template>

<script>
export default {
  name: 'ImageItem',
  props: ['image'],
  methods: {
    getCropImage(src, size = 2) {
      const [domain, key, id, width, height] = src.split('/').splice(2);
      const newWidth = Math.floor(+width / size);
      const newHeight = Math.floor(+height / size);

      return `https://${domain}/${key}/${id}/${newWidth}/${newHeight}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.image-card__link {
  overflow: hidden;
  display: inline-block;
  border-radius: 6px;
  min-height: 100px;
  width: 100%;
}

.image-card__image {
  display: flex;
  width: 100%;
}
</style>
