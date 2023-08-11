<template>
  <!-- <selectedPicture :uploadedPicture="uploadedPicture" /> -->
  <!-- <commentSection :userComment="userComment" /> -->
  <AlbumDisplay :album="album" />
</template>

<script>
// import selectedPicture from "./components/selectedPicture.vue";
// import commentSection from "./components/commentSection.vue";
import AlbumDisplay from "./components/albumDisplay.vue";

export default {
  name: "App",
  components: {
    // selectedPicture,
    // commentSection,
    AlbumDisplay,
  },

  data() {
    return {
      album: [
        {
          id: 1,
          username: "anonymous",
          image: "https://placehold.co/400",
          tags: "#selfie",
          likes: 0,
          created_at: "08/08/2023",
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
            {
              cmtid: 4,
              userid: "userid4",
              message: "comment4",
            },
            {
              cmtid: 5,
              userid: "userid5",
              message: "comment5",
            },
          ],
        },
        {
          id: 2,
          username: "david",
          image: "https://placehold.co/400",
          tags: "#selfie",
          likes: 5,
          created_at: "09/08/2023",
          allComments: [
            {
              cmtid: 3,
              userid: "userid3",
              message: "comment3",
            },
            {
              cmtid: 4,
              userid: "userid4",
              message: "comment4",
            },
            {
              cmtid: 5,
              userid: "userid5",
              message: "comment5",
            },
          ],
        },
        {
          id: 3,
          username: "fred",
          image: "https://placehold.co/400",
          tags: "#selfie",
          likes: 10,
          created_at: "10/08/2023",
          allComments: [],
        },
        {
          id: 4,
          username: "tommy",
          image: "https://placehold.co/400",
          tags: "#selfie",
          likes: 21,
          created_at: "11/08/2023",
          allComments: [
            {
              cmtid: 10,
              userid: "userid4",
              message: "comment4",
            },
            {
              cmtid: 11,
              userid: "userid5",
              message: "comment5",
            },
          ],
        },
        {
          id: 5,
          username: "chester",
          image: "https://placehold.co/400",
          tags: "#selfie",
          likes: 55,
          created_at: "12/08/2023",
          allComments: [
            {
              cmtid: 11,
              userid: "userid3",
              message: "comment3",
            },
          ],
        },
        {
          id: 6,
          username: "jackson",
          image: "https://placehold.co/400",
          tags: "#selfie",
          likes: 665,
          created_at: "15/08/2023",
          allComments: [
            {
              cmtid: 3,
              userid: "userid3",
              message: "comment3",
            },
            {
              cmtid: 4,
              userid: "userid4",
              message: "comment4",
            },
            {
              cmtid: 5,
              userid: "userid5",
              message: "comment5",
            },
          ],
        },
        {
          id: 7,
          username: "steve",
          image: "https://placehold.co/400",
          tags: "#selfie",
          likes: 222,
          created_at: "14/08/2023",
          allComments: [
            {
              cmtid: 3,
              userid: "userid3",
              message: "comment3",
            },
            {
              cmtid: 4,
              userid: "userid4",
              message: "comment4",
            },
            {
              cmtid: 5,
              userid: "userid5",
              message: "comment5",
            },
          ],
        },
        {
          id: 8,
          username: "johnny",
          image: "https://placehold.co/400",
          tags: "#selfie",
          likes: 105,
          created_at: "14/08/2023",
          allComments: [
            {
              cmtid: 3,
              userid: "userid3",
              message: "comment3",
            },
            {
              cmtid: 4,
              userid: "userid4",
              message: "comment4",
            },
            {
              cmtid: 5,
              userid: "userid5",
              message: "comment5",
            },
            {
              cmtid: 3,
              userid: "userid3",
              message: "comment3",
            },
            {
              cmtid: 4,
              userid: "userid4",
              message: "comment4",
            },
            {
              cmtid: 5,
              userid: "userid5",
              message: "comment5",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
