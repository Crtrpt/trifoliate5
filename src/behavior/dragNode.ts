const DragNodeMixin = {
  data() {
    return {
      isDrag: false,
    };
  },
  methods: {
    drop(e: DragEvent, parent: any) {
      var tdstr = e.dataTransfer?.getData("Text");
      if (!tdstr) {
        return;
      }

      var td = JSON.parse(tdstr);
      this.page?.addNode({
          parent: parent,
          ...td,
        });
      this.page.setSelectNode({});

      this.isDrag = false;
      this.page.cancelDragoverNode(parent);
      e.stopPropagation();
    },
    dragstart(e: DragEvent, payload: any) {
      this["setCurNode"](payload);
      
      e.dataTransfer?.setData(
        "Text",
        JSON.stringify({
          action: "add",
          node: payload,
        })
      );
    },
    drag(e: DragEvent) {
      e.stopPropagation();
    },
    dragenter(e: DragEvent) {
      this.isDrag = true;
      console.log(this.page);
      this.page.setDragoverNode(this.context);
      e.stopPropagation();
    },
    dragleave(e: DragEvent) {
      this.isDrag = false;
      this.page.cancelDragoverNode(this.context);
      e.stopPropagation();
    },
    dragover(e: DragEvent) {
      this.page.setDragoverNode(this.context);
      e.preventDefault();
      e.stopPropagation();
    },
  },
};

export default DragNodeMixin;
