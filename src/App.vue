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
          username: "Taylor",
          image:
            "https://saltlakemagazine-webaholics.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/10/perseids_NHQ202108110001_orig-scaled-1-1536x1294.jpeg",
          tags: "#Perseid #Meteor #Shower #Salt #Lake",
          likes: 123,
          created_at: "08/08/2023",
          allComments: [
            {
              cmtid: 1,
              userid: "lilynniebby",
              message: "This is literally so Taylor swift coded.",
            },
            {
              cmtid: 2,
              userid: "_divyesh_17",
              message: "The admin is a certified swiftie❤️",
            },
            {
              cmtid: 3,
              userid: "k.v.tie.s",
              message:
                "I don’t get the Taylor swift reference lol someone explain",
            },
            {
              cmtid: 4,
              userid: "devaansh__verma",
              message: "The Taylor swift references are so iconic",
            },
            {
              cmtid: 5,
              userid: "lucky_laad__",
              message: "Jyothim vannilla theeyum vannilla",
            },
          ],
        },
        {
          id: 2,
          username: "Nasa",
          image: "https://cdn.eso.org/images/thumb700x/potw1204a.jpg",
          tags: "#Barred #spiral #galaxy #swirls",
          likes: 52,
          created_at: "09/08/2023",
          allComments: [
            {
              cmtid: 3,
              userid: "female_advising",
              message: "Universe love button",
            },
            {
              cmtid: 4,
              userid: "ezginmr",
              message: "şu post atma saatini düzenle usta ya",
            },
            {
              cmtid: 5,
              userid: "abuadi321",
              message: "A beautiful thing, Glory be to God, the Creator",
            },
          ],
        },
        {
          id: 3,
          username: "JPL-Caltech",
          image:
            "https://skyandtelescope.org/wp-content/uploads/Gale-crater-hydrated.jpg",
          tags: "#Mars #Curiosity #RedPlanet #Hexagons #Space #NASA",
          likes: 10,
          created_at: "10/08/2023",
          allComments: [],
        },
        {
          id: 4,
          username: "Johns Hopkins University",
          image:
            "https://astroforumspace.com/wp-content/uploads/2023/06/SMACS-0723-JWST-first-picture.jpg",
          tags: "#Tolkien #SecondBreakfast #Stars #JWST #NASA",
          likes: 21,
          created_at: "11/08/2023",
          allComments: [
            {
              cmtid: 10,
              userid: "jmmcg1959",
              message:
                "I'm late, when did we start hating NASA? Science deniers are in need of help. My husband worked on the Webb, it's real 🤯",
            },
            {
              cmtid: 11,
              userid: "natesmodernlife",
              message: "You guys named a star after Lord of the Rings 🥹",
            },
          ],
        },
        {
          id: 5,
          username: "A. Sarajedini",
          image:
            "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_ngc6325_potw2320a_0.jpg",
          tags: "#Stars #Space #StarClusters #Hubble #Telescope #NASA",
          likes: 55,
          created_at: "12/08/2023",
          allComments: [
            {
              cmtid: 11,
              userid: "julianboards",
              message:
                "Turn the rhythm up, don't you wanna just come along for the ride?",
            },
          ],
        },
        {
          id: 6,
          username: "Bjorn Jonsson",
          image:
            "https://cdn.britannica.com/79/196079-050-A8735694/image-Jupiter-Great-Red-Spot-spacecraft-Juno.jpg",
          tags: "#Juno #Jupiter #Space #NASA #SolarSystem #Planet",
          likes: 665,
          created_at: "15/08/2023",
          allComments: [
            {
              cmtid: 3,
              userid: "lerina_septy",
              message: "Omellet on the planet😍😍",
            },
            {
              cmtid: 4,
              userid: "matthew.villinger",
              message: "EGG IN SPACE",
            },
            {
              cmtid: 5,
              userid: "teatime2121",
              message: "Fried egg",
            },
          ],
        },
        {
          id: 7,
          username: "S.Wolk",
          image: "https://www.nasa.gov/images/content/592344main_n281_665.jpg",
          tags: "#PacMan #Nebula #Stars #Space #NASA ⁣",
          likes: 222,
          created_at: "14/08/2023",
          allComments: [
            {
              cmtid: 3,
              userid: "your_favouritekira",
              message: "Nasa be quoting the most iconic stuff ever lmao",
            },
            {
              cmtid: 4,
              userid: "chrxstyz",
              message: "me if i was the pac-man nebula",
            },
            {
              cmtid: 5,
              userid: "manuel05_th",
              message: "La música de duki llega incluso al espacio exterior 😎",
            },
          ],
        },
        {
          id: 8,
          username: "Jesús Maíz Apellániz",
          image:
            "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/06/n11_is_a_vigorously_active_star_formation_region/10141234-2-eng-GB/N11_is_a_vigorously_active_star_formation_region_pillars.jpg",
          tags: "#NASA #Hubble #Stars #Nebula #Cloud #Astronomy #Space",
          likes: 105,
          created_at: "14/08/2023",
          allComments: [
            {
              cmtid: 3,
              userid: "_ranjana186",
              message: "I love space 🚀❤️",
            },
            {
              cmtid: 4,
              userid: "giannis.papio",
              message:
                "Space can really be the most beautiful thing and the scariest in the same time.. 😍😮",
            },
            {
              cmtid: 5,
              userid: "shania._kamal",
              message: "A sweet alot",
            },
            {
              cmtid: 3,
              userid: "mariliavieira13",
              message: "Uma delícia para os olhos😍😍",
            },
            {
              cmtid: 4,
              userid: "sicario53",
              message: "I say:a sweetheart, my dear NASA",
            },
            {
              cmtid: 5,
              userid: "lam.zahram",
              message: "How far is this beauty from us?",
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

h3 {
  margin-top: 25px;
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
  max-width: 1000px;
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

.toggle-comments-button {
  margin-bottom: 15px;
}

.footer {
  text-align: center;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);
  color: #999;
}
</style>
