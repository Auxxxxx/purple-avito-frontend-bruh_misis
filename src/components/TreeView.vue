
<template>
    <div class="card">
        <div class="tree-container" ref="treeContainer">
            <Tree 
            :value="nodes" 
            :filter="true" 
            filterMode="lenient" 
            filterPlaceholder="Поиск..."
            ></Tree>
        </div>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {},
            containerHeight: 300,
        };
    },
    props:{
        isLocation: {
            type: Boolean,
            required: true,
        }
    },
    async mounted() {
        let treeData;
        if(this.isLocation){
            treeData = await NodeService.getTreeNodesLocation();
        } else{
            treeData = await NodeService.getTreeNodesCategory();
        }
        // Преобразуем полученные данные в нужный формат
        this.nodes = treeData;
    },
    methods: {

        // TODO: ХОТЕЛИ ДОБАВИТЬ ЛЕНИВУЮ ЗАГРУЗКУ УЗЛОВ
        // async loadInitialNodes() {
        //     let treeData;
        //     if (this.isLocation) {
        //         treeData = await NodeService.getTreeNodesLocation();
        //     } else {
        //         treeData = await NodeService.getTreeNodesCategory();
        //     }
        //     // Ограничим количество отображаемых родительских узлов
        //     this.nodes = treeData.slice(0, 15);
        // },

        // async handleNodeExpand(node) {
        //     if (!node.children || node.children.length === 0) {
        //         // Если у узла нет детей, загружаем их с сервера
        //         const children = await NodeService.getNodeChildren(node.id);
        //         // Обновляем данные узла
        //         this.$set(node, 'children', children);
        //     }
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
            this.expandedKeys[(node.key).toString()] = true;
            console.log();

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

.tree-container {
  max-height: 300px; /* Максимальная высота контейнера */
  overflow-y: auto; /* Включить вертикальную прокрутку */
  overflow-x: hidden; /* Скрыть горизонтальную прокрутку */
}

</style>
