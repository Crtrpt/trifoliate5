<template>
    <div v-if="hoverNode!=null" class=" transition-all border 
       bg-blue-300
    border-blue-400 opacity-60 select-none pointer-events-none" :style="style"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    name: "HandlerView",
    props:{
      workspaceRef:Object
    },
    data(){
      return {
        style:{}
      };
    },
    computed: {
        hoverNode: {
            get() {
              var el:HTMLElement=this.$store.getters["page/getHoverNode"]?.attr['el'];
              if(el){
                var rect=el?.getBoundingClientRect();
                var wrect=this.workspaceRef.getBoundingClientRect();
                // console.log(rect);
                this.style.width=rect.width+"px";
                this.style.height=rect.height+"px"
                this.style.top=rect.top-wrect.top+"px"
                this.style.left=rect.left-wrect.left+"px"

                // console.log( this.style);
              }

              return this.$store.getters["page/getHoverNode"];
            },
            set(value) { },
        },
    },
    components: {  }
});
</script>



