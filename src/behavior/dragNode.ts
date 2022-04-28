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
      this.$store
        .dispatch("page/addNode", {
          parent: parent,
          ...td,
        })
        .then(() => {
          this.$store.dispatch("page/selectNode", {});
        });

      this.isDrag = false;
      this.$store.dispatch("page/cancelDragoverNode", parent);
      e.stopPropagation();
    },
    dragstart(e: DragEvent, payload: any) {
      this["nodeList/setCurNode"](payload);
      e.dataTransfer?.setData(
        "Text",
        JSON.stringify({
          action: "add",
          content: payload,
        })
      );
    },
    drag(e: DragEvent) {
      e.stopPropagation();
    },
    dragenter(e: DragEvent) {
      this.isDrag = true;
      this.$store.dispatch("page/dragoverNode", this.context);
      e.stopPropagation();
    },
    dragleave(e: DragEvent) {
      this.isDrag = false;
      this.$store.dispatch("page/cancelDragoverNode", this.context);
      e.stopPropagation();
    },
    dragover(e: DragEvent) {
      this.$store.dispatch("page/dragoverNode", this.context);
      e.preventDefault();
      e.stopPropagation();
    },
  },
};

export default DragNodeMixin;
