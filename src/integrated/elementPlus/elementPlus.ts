import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const installElementPlus = (app: any) => {
  console.log("==================  install element");
  app.use(ElementPlus);
};

export default installElementPlus;
