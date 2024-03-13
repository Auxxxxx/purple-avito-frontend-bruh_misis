<template>
    <div class="sideBar_item" :class="{'current-item': currentItem === true}">
        <i :class="iconClass"></i>
        <a href="#">{{ sideText }}</a>
    </div>
</template>

<script>
export default {
    //Take parameters
    props: {
        sideText: {
            type: String,
            required: true,
        },
        iconClass: {
            type: String,
            required: true,
        },
        currentItem:{
            type: Boolean,
            required: true,
        }
    } 
}
</script>

<style scoped>

.sideBar_item{
    display: flex;
    align-items: center;
    padding: 8px;
    margin-bottom:15px;
    margin-left:50px;
    height: 40px;
    border-radius: 8px;   
    width: 235px;
    /* box-shadow: 5px 5px 13px #DBDBDB, -5px -5px 13px #DBDBDB; */
}

.sideBar_item:hover{
    border: 1px solid #04e061;
}

.sideBar_item i{
    height: 20px;
    margin: 0 15px 0 0;
    color: #584D4D;
}

.sideBar_item a{
    color: #584D4D;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 17px;    
}

.current-item{
    border: 1px solid #04e061;
}

</style>