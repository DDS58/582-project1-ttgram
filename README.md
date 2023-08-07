# Ttgram, my instagram clone

## Planning

### main components : selectedPicture
-  Profile picture, username, Timestamp, link to main profil?
-  Photo, Caption, Tags
-  Like button, heart icon, like number
-  Comment section, username, comment, list, send comment button, Comment Input, Timestamp

### other possible component
- albumDisplay, image list a la Tt, click to enter selectedPicture
- header, navigation bar, logo, search functionality
- user profile link

-use something similar
data() {
return {
posts,
filters,
image:
"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",
caption: "",
filterType: "normal",
step: 1,
showDetails: false,
fileInput: ""
};
},
