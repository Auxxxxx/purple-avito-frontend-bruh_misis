
<template>
    <div class="card">
        <Tree 
        :value="nodes" 
        :filter="true" 
        filterMode="lenient" 
        class="w-full md:w-30rem"
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
    mounted() {
        NodeService.getTreeNodesData().then(data => this.nodes = data);
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
.card{
    width: 400px;
    height: 250px;
    background: #F2F2F2;
}

</style>
