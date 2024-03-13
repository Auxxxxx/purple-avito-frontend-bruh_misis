
<template>
    <div class="card">
        <Tree 
        :value="nodes" 
        :filter="true" 
        filterMode="lenient" 
        
        ></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        };
    },
    async mounted() {
        this.nodes = await NodeService.getTreeNodesData();
    },
    methods: {
        // async handleNodeExpand(node) {
        // // Обработчик разворачивания узла
        // if (node.children && node.children.length === 0) {
        //     // Если у узла нет детей, загружаем их с сервера
        //     const children = await NodeService.getNodeChildren(node.id);
        //     // Обновляем данные узла
        //     node.children = children;
        // }
        // },
        expandAll() {
            for (let node of this.nodes) {
                this.expandNode(node);
            }

            this.expandedKeys = { ...this.expandedKeys };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            this.expandedKeys[node.id] = true;

            if (node.children && node.children.length) {
                for (let child of node.children) {
                    this.expandNode(child); 
                }
            }
        }
    }
}

</script>

<style scoped>
.card {
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-bar {
    background: none;
    border: none;
    width: 100%;
    max-width: 300px; /* Максимальная ширина */
}


</style>
