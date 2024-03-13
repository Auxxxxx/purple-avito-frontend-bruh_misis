
<template>
    <div class="card">
        <Tree 
        :value="nodes" 
        :filter="true" 
        filterMode="lenient" 
        class="search-bar"
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
            this.expandedKeys[node.key] = true;

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
