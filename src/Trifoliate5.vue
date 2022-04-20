<template>
  <div id="trifoliate5" class=" flex  flex-row w-fit overflow-hidden">
      <LeftViewport class="w-1/6 shrink-0"></LeftViewport>
      <FlatViewport class="grow-0 shrink-1   overflow-auto min-w-0 min-h-0"></FlatViewport>
      <TreeViewport class="shrink-0" :style='{
        width:"300px"
      }'></TreeViewport>
  </div>
</template>

<style>
#trifoliate5 {
  width: 100vw;
  height: 100vh;
}
</style>
