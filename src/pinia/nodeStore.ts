import { defineStore } from 'pinia'


export const nodeStore = defineStore("nodeList",{
  state: () =>({
      nodeList: [
        {
          name: "base",
          expland: true,
          list: [
            {
              name: "Node",
              type: "Text",
              id: "1",
              style: {},
              props: {
                content: "node",
              },
              slot: {
                default: [],
              },
            },
            {
              name: "Container",
              type: "Container",
              id: "2",
              style: {
                height: "100px",
              },
              props: {},
              slot: {
                default: [],
              },
            },
          ],
        },
        {
          name: "layout",
          expland: true,
          list: [
            {
              name: "Row",
              type: "Container",
              id: "7",
              style: {
                height: "100px",
                width: "100%",
                display: "flex",
              },
              props: {},
              slot: {
                default: [],
              },
            },
          ],
        },
        {
          name: "test",
          expland: true,
          list: [
            {
              name: "chart",
              type: "Chartjs",
              id: "6",
              style: {
                height: "100%",
                width: "25%",
              },
              props: {
                type: "line",
                config: "",
                data: JSON.stringify({
                  labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
                  datasets: [
                    {
                      label: "My First Dataset",
                      data: [65, 59, 80, 81, 56, 55],
                      fill: false,
                      borderColor: "rgb(75, 192, 192)",
                      tension: 0.1,
                    },
                  ],
                }),
              },
            },
          ],
        },
      ],
      curNode: null,
  }),
  getters: {
    getNodeList: (state: any, getters: any) => {
      return state.nodeList;
    },
    getCurNode: (state: any, getters: any) => {
      return state.curNode;
    },
  },
  actions: {
    setCurNode(payload: any) {
      this.curNode = payload;
    },
  },
});