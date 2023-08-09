<template>
  <div>
    <h2>viewing pic</h2>
    <h3>{{ uploadedPicture.username }}</h3>
    <img
      id="imgLink"
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
      <font-awesome-icon
        @dblclick="shareLink"
        icon="fa-regular fa-share-from-square"
      />
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
    shareLink() {
      var copyText = document.getElementById("imgLink");
      navigator.clipboard.writeText(copyText.src);
      console.log("link copied to clipboard :" + copyText.src);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
