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
    <p class="tags">{{ uploadedPicture.tags }}</p>
    <div class="icon-row">
      <p class="icons">
        <font-awesome-icon
          v-if="!isLiked"
          @click="likePicture"
          icon="fa-regular fa-heart"
        />
        <font-awesome-icon
          v-else
          @click="likePicture"
          icon="fa-solid fa-heart"
        />
        {{ uploadedPicture.likes + count }}
        <font-awesome-icon
          @dblclick="shareLink"
          icon="fa-regular fa-share-from-square"
        />
      </p>
      <p>{{ uploadedPicture.created_at }}</p>
    </div>
  </div>

  <div class="comment-input">
    <input v-model="newComment" placeholder="Enter your comment" />
    <button @click="addComment">Add Comment</button>
  </div>

  <button
    @click="toggleComments"
    class="toggle-comments-button"
    v-if="hasComments"
  >
    {{ uploadedPicture.showComments ? "Hide All" : "View All Comment" }}
  </button>

  <div class="comments" v-show="uploadedPicture.showComments">
    <commentSection
      v-for="userComment in uploadedPicture.allComments"
      :userComment="userComment"
      :key="userComment.cmtid"
    />
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
          allComments: [],
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
      imageSrc: this.uploadedPicture.image,
      newComment: "",
    };
  },

  methods: {
    addComment() {
      if (this.newComment.trim() !== "") {
        const newCommentObj = {
          cmtid: this.uploadedPicture.allComments.length + 1,
          userid: "David58",
          message: this.newComment,
        };
        const updatedUploadedPicture = { ...this.uploadedPicture };
        updatedUploadedPicture.allComments.push(newCommentObj);
        this.newComment = "";
      }
    },

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
      navigator.clipboard.writeText(this.imageSrc);
      console.log("Link copied to clipboard: " + this.imageSrc);
    },

    toggleComments() {
      this.$emit("toggleComments", this.uploadedPicture.id);
    },
  },
  emits: ["toggleComments"],

  computed: {
    hasComments() {
      return this.uploadedPicture.allComments.length > 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
