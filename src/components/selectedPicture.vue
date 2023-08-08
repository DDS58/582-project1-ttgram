<template>
  <div>
    <h2>viewing pic</h2>
    <h3>{{ uploadedPicture.username }}</h3>
    <img
      :src="uploadedPicture.image"
      alt="uploaded picture"
      @dblclick="likePicture"
    />
    <p>{{ uploadedPicture.tags }}</p>
    <p>
      <font-awesome-icon
        v-if="!isLiked"
        @click="likePicture"
        icon="fa-regular fa-heart"
      />
      <font-awesome-icon v-else @click="likePicture" icon="fa-solid fa-heart" />
      {{ uploadedPicture.likes + count }}
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

  data() {
    return {
      isLiked: false,
      count: 0,
    };
  },

  methods: {
    likePicture() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        this.count++;
        this.isLiked = true;
      } else {
        this.count--;
        this.isLiked = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
