<template>
  <div
    v-if="
      selectNode != null &&
      selectNode.attr.get('eye') &&
      !selectNode.attr.get('lock')
    "
    :style="style"
    @drop="drop($event, selectNode)"
    @dragover="dragover($event)"
  >
    <div
      class="
        w-full
        h-full
        border
        bg-blue-200 bg-opacity-10
        transition-all
        border-blue-600
        opacity-80
        shadow-inner
      "
      @dblclick="dbclick($event)"
    >
      <div
        class="
          left_top
          border
          hover:bg-blue-100
          border-blue-600
          handler
          absolute
          -left-1
          -top-1
        "
        @mousedown="setHandler('leftTop')"
      ></div>
      <div
        class="
          left_bottom
          border
          hover:bg-blue-100
          border-blue-600
          handler
          absolute
          -left-1
          -bottom-1
        "
        @mousedown="setHandler('leftBottom')"
      ></div>
      <div
        class="
          right_top
          border
          hover:bg-blue-100
          border-blue-600
          handler
          absolute
          -right-1
          -top-1
        "
        @mousedown="setHandler('rightTop')"
      ></div>
      <div
        class="
          right_bottom
          border
          hover:bg-blue-100
          border-blue-600
          handler
          absolute
          -right-1
          -bottom-1
        "
        @mousedown="setHandler('rightBottom')"
      ></div>

      <div
        class="left gutter absolute -left-1 top-1 bottom-1 w-2"
        @mousedown="setHandler('left')"
      ></div>
      <div
        class="right gutter absolute -right-1 top-1 bottom-1 w-2"
        @mousedown="setHandler('right')"
      ></div>

      <div
        class="top gutter absolute -top-1 left-1 right-1 h-2"
        @mousedown="setHandler('top')"
      ></div>
      <div
        class="bottom gutter absolute -bottom-1 left-1 right-1 h-2"
        @mousedown="setHandler('bottom')"
      ></div>
      <div class="center w-full h-full" @mousedown="setHandler('center')"></div>
    </div>

    <div
      class="
        absolute
        -top-7
        overflow-visible
        whitespace-nowrap
        name
        border border-blue-500
        bg-blue-500
        hover:bg-blue-600
        cursor-pointer
        text-white
        rounded-full
        px-3
        py-0.5
        text-xs
      "
    >
      {{ selectNode.name }}
    </div>

    <div
      class="
        name
        border border-blue-500
        cursor-pointer
        text-gray-500
        absolute
        right-0
        -top-7
        rounded-full
        px-3
        py-0.5
        text-xs
        overflow-visible
        whitespace-nowrap
      "
    >
      <font-awesome-icon
        class="cursor-pointer px-1 hover:text-blue-600"
        icon="copy"
        @click="copyNode($event)"
      />
      <font-awesome-icon
        class="cursor-pointer px-1 hover:text-blue-600"
        icon="trash"
        @click="removeNode($event)"
      />
    </div>

    <div
      class="
        name
        border border-blue-500
        cursor-pointer
        text-gray-500
        absolute
        -right-7
        top-0
        rounded-full
        py-1
        px-0.5
        text-xs
        overflow-visible
        whitespace-nowrap
        flex flex-col
        w-6
      "
    >
      <font-awesome-icon
        class="cursor-pointer p-1 hover:text-blue-600"
        icon="arrows-up-to-line"
      />
      <font-awesome-icon
        class="cursor-pointer p-1 hover:text-blue-600"
        icon="arrow-up"
      />
      <font-awesome-icon
        class="cursor-pointer p-1 hover:text-blue-600"
        icon="arrow-down"
      />
      <font-awesome-icon
        class="cursor-pointer p-1 hover:text-blue-600"
        icon="arrows-down-to-line"
      />
    </div>

    <div
      v-if="parseInt(style.height) > 30"
      class="
        name
        absolute
        -bottom-6
        left-0
        right-0
        flex
        pointer-events-none
        overflow-visible
        whitespace-nowrap
      "
    >
      <div
        class="
          mx-auto
          inline
          rounded-full
          border
          bg-blue-500
          hover:bg-blue-600
          cursor-pointer
          text-white
          px-3
          py-0.5
          text-xs
        "
      >
        {{ style.width }} {{ style.height }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DragNodeMixin from "../../behavior/dragNode";
import { pageStore } from "../../pinia/pageStore";

export default defineComponent({
  setup() {
    const page = pageStore()
    return { page }
  },
  mixins: [DragNodeMixin],
  name: "SelectView",
  props: {
    workspaceRef: Object,
  },
  methods: {
    setHandler(postion: any) {
      this.handler = postion;
      this.start = JSON.parse(JSON.stringify(this.style));
      this.$emit("move", { value: true });
    },
    moveComplete() {},
    moveCallback(offset: any) {
      if (this.handler == "center") {
        this.style.left = parseInt(this.start.left) + offset.x + "px";
        this.style.top = parseInt(this.start.top) + offset.y + "px";
      }
      if (this.handler == "left") {
        this.style.left = parseInt(this.start.left) + offset.x + "px";
        this.style.width = parseInt(this.start.width) + -offset.x + "px";
      }
      if (this.handler == "right") {
        this.style.width = parseInt(this.start.width) + offset.x + "px";
      }
      if (this.handler == "top") {
        this.style.top = parseInt(this.start.top) + offset.y + "px";
        this.style.height = parseInt(this.start.height) + -offset.y + "px";
      }
      if (this.handler == "bottom") {
        this.style.height = parseInt(this.start.height) + offset.y + "px";
      }

      if (this.handler == "leftTop") {
        this.style.left = parseInt(this.start.left) + offset.x + "px";
        this.style.top = parseInt(this.start.top) + offset.y + "px";
        this.style.width = parseInt(this.start.width) + -offset.x + "px";
        this.style.height = parseInt(this.start.height) + -offset.y + "px";
      }
      if (this.handler == "leftBottom") {
        // this.style.top = parseInt(this.start.top) + -offset.y + "px";
        this.style.left = parseInt(this.start.left) + offset.x + "px";
        this.style.width = parseInt(this.start.width) + -offset.x + "px";
        this.style.height = parseInt(this.start.height) + offset.y + "px";
      }

      if (this.handler == "rightTop") {
        this.style.top = parseInt(this.start.top) + offset.y + "px";
        // this.style.left = parseInt(this.start.left) + offset.x + "px";
        this.style.width = parseInt(this.start.width) + offset.x + "px";
        this.style.height = parseInt(this.start.height) + -offset.y + "px";
      }

      if (this.handler == "rightBottom") {
        // this.style.top = parseInt(this.start.top) + -offset.y + "px";
        // this.style.left = parseInt(this.start.left) + offset.x + "px";
        this.style.width = parseInt(this.start.width) + offset.x + "px";
        this.style.height = parseInt(this.start.height) + offset.y + "px";
      }

      this.page.changeSelectStyle(this.style);
    },
    dbclick(e: Event) {
      this.page.cancelSelectNode( {});
      e.stopPropagation();
    },
    copyNode(e: Event) {
      this.page.copyNode(this.selectNode)
      e.stopPropagation();
    },
    removeNode(e: Event) {
      console.log(this.selectNode);
      this.page.removeNode(this.selectNode);
      e.stopPropagation();
    },
  },
  data() {
    return {
      position: "",
      handler: null,
      start: {},
      style: {
        width: "0px",
        height: "0px",
        top: "0px",
        left: "0px",
      },
    };
  },
  computed: {
    selectNode: {
      get() {
        var node = this.page.getCurrentNode;
        if (node) {
          var el = node.attr.get("el");
          var rect = el?.getBoundingClientRect();
          var wrect = this.workspaceRef?.getBoundingClientRect();
          // console.log(rect);
          this.style.width = parseInt(rect.width) + "px";
          this.style.height = parseInt(rect.height) + "px";
          this.style.top = rect.top - wrect.top + "px";
          this.style.left = rect.left - wrect.left + "px";
          // this.position = node.style.position;
          // console.log( this.style);
        }

        return node;
      },
      set(value: any) {},
    },
  },
  components: {},
});
</script>


<style lang="scss" scoped>
.handler {
  width: 10px;
  height: 10px;
  // border:1px solid blue;
  background-color: white;
}
.gutter {
  border: 2px solid #ff00ff00;
}
.left {
  cursor: e-resize;
}
.right {
  cursor: e-resize;
}
.top {
  cursor: s-resize;
}
.bottom {
  cursor: s-resize;
}

.center {
  grid-area: center;
}

.left_top {
  cursor: se-resize;
}
.left_bottom {
  cursor: sw-resize;
}
.right_top {
  cursor: sw-resize;
}
.right_bottom {
  cursor: se-resize;
}

.left_up {
  cursor: e-resize;
}
.left_down {
  cursor: e-resize;
}
.right_up {
  cursor: e-resize;
}
.right_down {
  cursor: e-resize;
}

.top_left {
  cursor: s-resize;
}
.top_right {
  cursor: s-resize;
}
.bottom_left {
  cursor: s-resize;
}
.bottom_right {
  cursor: s-resize;
}
</style>




