import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const installAntv = (app: any) => {
  console.log("==================  install antv");
  app.use(Antd);
};

export default installAntv;
