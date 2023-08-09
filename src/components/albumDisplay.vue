<template>
  <h2>AlbumDisplay</h2>
  <selectedPicture
    v-for="uploadedPicture in album"
    :uploadedPicture="uploadedPicture"
    :key="uploadedPicture.id"
  ></selectedPicture>
</template>

<script>
import selectedPicture from "./selectedPicture.vue";

export default {
  name: "albumDisplay",
  props: {
    album: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  components: {
    selectedPicture,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
