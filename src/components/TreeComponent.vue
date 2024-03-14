<template>
    <div class="treeLocation">
        <div class="treeLocation-content">
            <div class="treeLocation_tree">
                <tree-view :isLocation='isLocation'/>
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
        },
        isLocation: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>



.treeLocation-content{
    padding: 40px 34px;
}

</style>