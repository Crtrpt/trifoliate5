import { defineStore } from 'pinia'
import { TPage } from '../type/page';
import TNode from '../type/tnode';
import TWorkspace from '../type/tworkspace';
import { DocumentSave } from '../utils/JsonToDoc';


export const pageStore = defineStore("pageStore",{
  state: () =>(new TPage()),
  getters: {
    getWorkspace: (state): TWorkspace => {
      return state.workspace!;
    },
    getDocument: (state): TNode[] => {
      return state.document!;
    },
    getCurrentNode: (state: any): TNode => {
      return state.currentNode;
    },
    getHoverNode: (state: any): TNode => {
      return state.hoverNode;
    },
    getDragoverNode: (state: any): TNode => {
      console.log(state.dragoverNode);
      return state.dragoverNode;
    },
  },
  actions: {
    initDocument( payload: any) {
      this.document = payload.document;
      this.hashIds = payload.hashIds;
      this.workspace = payload.workspace;
      this.maxId = payload.maxId;
    },
    setDragoverNode( payload: any) {
      this.dragoverNode = this.hashIds?.get(payload?.id);
    },
    cancelDragoverNode(payload: any) {
      //取消放置
      this.dragoverNode = undefined;
    },
    setAttrToggle( payload: any) {
      var node = this.hashIds?.get(payload.data.id);
      var oldVal = node?.attr?.get(payload.attrName);
      console.log(oldVal);
      node!.attr!.set(payload.attrName, !oldVal);
    },
    //增加节点
    addNode( payload: any) {
      if (payload.action == "add") {
        console.log(payload);
        var node = new TNode(payload.node);
        console.log(this);
        node.id = this.$state.getMaxId();
        node.parent = payload.parent;
        node.level = (node?.parent?.level || 0) + 1;
        node.attr!.set(
          "index",
          payload.index || payload?.parent?.length || this.document?.length || 0
        );
        this.hashIds?.set(node.id!, node);
        if (payload.parent == null) {
          this.document!.push(node);
        } else {
          payload.parent.slot["default"].push(node);
        }
      }
    },
    copyNode(payload: any) {
      console.log(payload);
      var node = new TNode(payload);
      node.parent = payload.parent;
      node.id = this.getMaxId();
      this.hashIds?.set(node.id!, node);
      if (payload.parent == null) {
        this.document!.push(node);
      } else {
        payload.parent.slot["default"].push(node);
      }
    },
    //删除节点
    removeNode(payload: any) {
      console.log("remove" + payload.id);
      if (this?.hoverNode?.id == payload.id) {
        this.hoverNode = undefined;
      }
      if (this?.currentNode?.id == payload.id) {
        this.currentNode = undefined;
      }
      var idx = payload.attr.get("index");
      var parentList = [];
      if (payload.parent == null) {
        parentList = this!.document!;
        parentList = [
          ...parentList?.slice(0, idx),
          ...parentList?.slice(idx + 1, parentList.length),
        ];
        this.document = parentList;
      } else {
        var slot = payload.attr.get("slot");
        parentList = payload.parent.slot[slot];

        parentList = [
          ...parentList.slice(0, idx),
          ...parentList.slice(idx + 1, parentList.length),
        ];
        payload.parent.slot[slot] = parentList;
      }

      this.hashIds?.delete(payload.id);
    },
    setHoverNode( payload: any) {
      console.log(payload);
      this.hoverNode = this.hashIds?.get(payload?.id);
    },
    cancelHoverNode( payload: any) {
      //取消悬停
      this.hoverNode = undefined;
    },
    setSelectNode( payload: any) {
      this.currentNode = this.hashIds?.get(payload.id || this.maxId);
    },
    bindEl( payload: any) {
      this.hashIds?.set(payload.id, payload);
    },
    cancelSelectNode( payload: any) {
      //取消选择
      this.currentNode = undefined;
    },
    changeSelectStyle( payload: any) {
      //取消选择
      this.currentNode!.style = {
        ...this.currentNode!.style,
        ...payload,
      };
    },
    setCurrentProp( payload: any) {
      var props=this.currentNode?.props!;
      var name=payload.name as String;
      props[name] = payload.value;
    },
    save(payload: any) {
      DocumentSave(this);
    },
  },
});