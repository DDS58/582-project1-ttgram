<template>
  <div>
    <h2>viewing pic</h2>
    <h3>{{ uploadedPicture.username }}</h3>
    <img :src="uploadedPicture.image" alt="uploaded picture" />
    <p>{{ uploadedPicture.tags }}</p>
    <p>
      <font-awesome-icon icon="fa-regular fa-heart" />
      <font-awesome-icon icon="fa-solid fa-heart" />
      {{ uploadedPicture.likes }}
    </p>
    <p>{{ uploadedPicture.created_at }}</p>
  </div>
</template>

<script>
export default {
  name: "selectedPicture",
  props: {
    uploadedPicture: Object,
    default() {
      return {
        id: 0,
        username: "username",
        image: "image",
        tags: "tags",
        likes: 0,
        created_at: "timestamp",
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
