import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as falHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";

library.add(faHeart, falHeart, faShareFromSquare);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
