<template>
  <!-- <h2>Comment Section</h2> -->
  <div class="commentStyle">
    <p>{{ userComment.userid }} : {{ userComment.message }}</p>
  </div>
</template>

<script>
export default {
  name: "commentSection",
  props: {
    userComment: {
      type: Object,
      default() {
        return {
          cmtid: 0,
          userid: "userid#",
          message: "message#",
        };
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
