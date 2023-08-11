<template>
  <h2>AlbumDisplay</h2>
  <selectedPicture
    v-for="uploadedPicture in album"
    :uploadedPicture="uploadedPicture"
    :key="uploadedPicture.id"
    @toggleComments="toggleComments"
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
  methods: {
    toggleComments(pictureId) {
      this.album.forEach((picture) => {
        if (picture.id === pictureId) {
          picture.showComments = !picture.showComments;
        } else {
          picture.showComments = false;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
