<template>
    <div class="treeLocation">
        <div class="treeLocation-content">
            <h3 class="treeLocation_title">{{ title }}</h3>
            <div class="treeLocation_tree">
                <tree-view/>
            </div>
        </div>
    </div>
</template>

<script>
//Connect components
import TreeView from '@/components/TreeView';

export default {
    components: {
        TreeView
    }, 
    props:{
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.treeLocation_title{
    font-weight: 700;
    font-size: 28px;
    color: #0D0421;   
}

.treeLocation{
    background-color: #fff;
    border-radius: 14.3px;
    box-shadow: 4px 0px 11px #E6E6E6, -4px 0px 8px #E6E6E6;
}

.treeLocation-content{
    padding: 40px 34px;
}

</style>