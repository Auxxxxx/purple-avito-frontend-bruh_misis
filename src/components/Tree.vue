<template>
    <div>
      <TreeNode :node="treeData" :level="0" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import TreeNode from '@/components/TreeNode.vue';
  
  export default {
    components: {
      TreeNode
    },
    data() {
      return {
        treeData: null
      };
    },
    async mounted() {
      this.treeData = await this.fetchTreeData();
    },
    methods: {
      async fetchTreeData() {
        try {
          const response = await axios.get('http://localhost/category/');
          console.log(response.data);
          return response.data;
        } catch (error) {
          console.error('Ошибка при загрузке данных:', error);
          return null;
        }
      }
    }
  };
  </script>
  