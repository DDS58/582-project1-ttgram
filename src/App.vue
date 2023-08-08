<template>
  <selectedPicture :uploadedPicture="uploadedPicture" />
</template>

<script>
import selectedPicture from "./components/selectedPicture.vue";

export default {
  name: "App",
  components: {
    selectedPicture,
  },

  data() {
    return {
      uploadedPicture: {
        id: 1,
        username: "anonymous",
        image: "https://placehold.co/400",
        tags: "selfie",
        likes: 0,
        created_at: "08/08/2023",
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
