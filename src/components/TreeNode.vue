<template>
    <div v-if="node">
      <div :style="{ paddingLeft: level * 20 + 'px' }">
        <span>{{ node.label }}</span>
        <button v-if="node.children" @click="toggleNode">{{ node.expanded ? '-' : '+' }}</button>
      </div>
      <div v-if="node.expanded && node.children">
        <TreeNode v-for="child in node.children" :key="child.key" :node="child" :level="level + 1" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['node', 'level'],
    data() {
      return {
        expanded: false
      };
    },
    methods: {
      toggleNode() {
        this.expanded = !this.expanded;
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    margin-right: 5px;
  }
  </style>
  