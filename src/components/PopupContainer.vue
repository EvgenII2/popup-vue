<template>
  <div v-if="image" class="popup">
    <button class="popup__button-close" @click="$emit('closePopup', null)">
      &times;
    </button>
    <div class="popup__content">
      <figure class="popup__image-container">
        <img
          class="popup__image"
          :src="image.download_url"
          :alt="image.author"
        />
        <figcaption class="popup__caption">
          Автор: <address class="popup__author">{{ image.author }}</address>
        </figcaption>
      </figure>
      <a
        class="popup__link popup__link_open"
        :href="image.url"
        rel="noreferrer"
        target="_blank"
      >
        Открыть в полном размере
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopuContainer',
  props: ['image'],
  emits: ['closePopup'],
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  z-index: 1;
  visibility: visible;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(33, 33, 33, 0.5);
}
.popup_open {
  z-index: 1;
  visibility: visible;
}
.popup__content {
  text-align: right;
  column-count: initial;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  max-width: 600px;
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;
}

.popup__image-container {
  max-width: 100%;
  min-height: 350px;
  margin: 0;
}

.popup__image {
  width: 100%;
  max-width: 100%;
  display: bloсk;
  border-radius: 6px;
}

.popup__caption {
  color: #424242;
  margin: 5px 0;
}

.popup__button-close {
  position: absolute;
  top: 50px;
  right: 50px;
  background-color: transparent;
  font-size: 50px;
  width: 40px;
  height: 40px;
  transition: 0.2s color;
  cursor: pointer;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup__button-close:hover {
  color: #cfd8dc;
  animation: spin 5s cubic-bezier(0.1, -0.6, 0.2, 0);
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
