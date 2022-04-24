<template>
  <div v-if="selectNode != null" :style="style">
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
    </div>

    <div
      class="
        name
        border border-blue-500
        bg-blue-500
        hover:bg-blue-600
        cursor-pointer
        text-white
        absolute
        -top-7
        rounded-full
        px-3
        py-0.5
        text-xs
        overflow-visible
        whitespace-nowrap
      "
    >
      {{ selectNode.name }}
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

export default defineComponent({
  name: "SelectView",
  props: {
    workspaceRef: Object,
  },
  methods: {
    setHandler(postion: any) {
      this.handler = postion;
    },
    dbclick(e: Event) {
      this.$store.dispatch("page/cancelSelectNode", {});
      e.stopPropagation();
    },
  },
  data() {
    return {
      handler: null,
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
        var el: HTMLElement =
          this.$store.getters["page/getCurrentNode"]?.attr["el"];
        if (el) {
          var rect = el?.getBoundingClientRect();
          var wrect = this.workspaceRef?.getBoundingClientRect();
          // console.log(rect);
          this.style.width = parseInt(rect.width) + "px";
          this.style.height = parseInt(rect.height) + "px";
          this.style.top = rect.top - wrect.top + "px";
          this.style.left = rect.left - wrect.left + "px";

          // console.log( this.style);
        }

        return this.$store.getters["page/getCurrentNode"];
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




