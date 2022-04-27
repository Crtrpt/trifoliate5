import { createApp } from "vue";
import Trifoliate5 from "./Trifoliate5.vue";

import store from "./store";

import "./index.css";
import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import { createRouter, createWebHashHistory } from "vue-router";
import {
  faUserSecret,
  faChevronLeft,
  faChevronDown,
  faChevronRight,
  faCircleDot,
  faCube,
  faCubes,
  faCubesStacked,
  faSliders,
  faAdd,
  faTrash,
  faDotCircle,
  faEye,
  faLock,
  faLockOpen,
  faRedo,
  faUndo,
  faCopy,
  faCut,
  faPaste,
  faRightToBracket,
  faSave,
  faFolderOpen,
  faKeyboard,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { createI18n } from "vue-i18n";

import messages from "./i18n/message.js";
import tooltip from "./directive/tooltip";

// import headlessui from "@headlessui/vue";
// import installAntv from "./integrated/antv/antv";
// import installElementPlus from "./integrated/elementPlus/elementPlus";

library.add(
  faUserSecret,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCircleDot,
  faCube,
  faCubes,
  faCubesStacked,
  faSliders,
  faAdd,
  faTrash,
  faDotCircle,
  faEye,
  faLock,
  faLockOpen,
  faRedo,
  faUndo,
  faCopy,
  faCut,
  faPaste,
  faRightToBracket,
  faSave,
  faFolderOpen,
  faKeyboard,
  faChevronRight,
  faFlag
);

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

var componentsList = [];

var components = import.meta.globEager("./component/*.vue");
for (const idx in components) {
  componentsList.push(components[idx].default);
}
var views = import.meta.globEager("./view/**/*.vue");

for (const idx in views) {
  componentsList.push(views[idx].default);
}

var widgets = import.meta.globEager("./widget/*.vue");
for (const idx in widgets) {
  componentsList.push(widgets[idx].default);
}

var node = import.meta.globEager("./node/*.vue");
for (const idx in node) {
  componentsList.push(node[idx].default);
}

var app = createApp(Trifoliate5);

app.use(store);
app.use(i18n);

const router = createRouter({
  routes: [],
  history: createWebHashHistory(),
});
app.use(router);

app.directive("tooltip", tooltip);

app.component("font-awesome-icon", FontAwesomeIcon);
//注册组件
componentsList.forEach((component) => {
  app.component(component.name, component);
});

// installAntv(app);

// installElementPlus(app);

app.mount("#app");
