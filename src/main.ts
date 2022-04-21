import { createApp } from 'vue'
import Trifoliate5 from "./Trifoliate5.vue";
import "./index.css";
import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret,faChevronLeft, faChevronDown, faChevronRight, faCircle, faCircleDot, faCube,faCubes, faCubesStacked, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(
  faUserSecret,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCircleDot,
  faCube,
  faCubes,
  faCubesStacked,
  faSliders
);

import store from "./store";



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

app.component("font-awesome-icon", FontAwesomeIcon);
//注册组件
componentsList.forEach((component) => {
  app.component(component.name, component);
});

app.mount('#app')
