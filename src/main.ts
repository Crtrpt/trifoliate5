import { createApp } from 'vue'
import Trifoliate5 from "./Trifoliate5.vue";
import "./index.css";

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
//注册组件
componentsList.forEach((component) => {
  app.component(component.name, component);
});

app.mount('#app')
