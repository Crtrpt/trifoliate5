const DragNodeMixin = {
  data() {
    return {
      isDrag: false,
    };
  },
  methods: {
    drop(e: Event) {
      console.log("放下");
      this.$store.dispatch("page/cancelDragoverNode", this.context);
      e.stopPropagation();
    },
    drag(e: Event) {
      console.log("drag");
      e.stopPropagation();
    },
    dragenter(e: Event) {
      this.isDrag = true;
      this.$store.dispatch("page/dragoverNode", this.context);
      console.log("enter");
      e.stopPropagation();
    },
    dragleave(e: Event) {
      this.isDrag = false;
      this.$store.dispatch("page/cancelDragoverNode", this.context);
      console.log("leave");
      e.stopPropagation();
    },
    dragover(e: Event) {
      this.$store.dispatch("page/dragoverNode", this.context);
      e.preventDefault();
    },
  },
};

export default DragNodeMixin;
