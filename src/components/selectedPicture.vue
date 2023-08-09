<template>
  <div>
    <!-- <h2>viewing pic</h2> -->
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
  <div>
    <commentSection
      v-for="userComment in allComments"
      :userComment="userComment"
      :key="userComment.cmtid"
    ></commentSection>
  </div>
</template>

<script>
import commentSection from "./commentSection.vue";

export default {
  name: "selectedPicture",

  props: {
    uploadedPicture: {
      type: Object,
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
    allComments: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  components: {
    commentSection,
  },

  data() {
    return {
      isLiked: false,
      count: 0,
      allComments: [
        {
          cmtid: 1,
          userid: "userid1",
          message: "comment1",
        },
        {
          cmtid: 2,
          userid: "userid2",
          message: "comment2",
        },
        {
          cmtid: 3,
          userid: "userid3",
          message: "comment3",
        },
      ],
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
    // this only take the first img src link on the array
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
