<template>
  <div class="app">
    <div class="header">
      <h1>TTGram</h1>
      <button class="profile-button">Profile</button>
    </div>
    <div class="main-content">
      <!-- <selectedPicture :uploadedPicture="uploadedPicture" /> -->
      <!-- <commentSection :userComment="userComment" /> -->
      <AlbumDisplay :album="album" />
    </div>
    <div class="footer">
      <p>&copy; 2023 TTGram</p>
    </div>
  </div>
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

<!-- need to install scss module? -->
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Arial", sans-serif;
  color: #333;
  background-color: #fafafa;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
}

.main-content {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

#imgLink {
  width: 100%;
  height: auto;
}

.tags {
  font-size: 12px;
  color: #8c8c8c;
  display: flex;
  justify-content: center;
}
.icon-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.icons:hover {
  cursor: pointer;
}

input {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.comment-input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.commentStyle {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
}

button {
  padding: 8px 16px;
  background-color: #3897f0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.footer {
  text-align: center;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);
  color: #999;
}
</style>
