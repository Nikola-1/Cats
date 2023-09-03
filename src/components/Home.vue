<template>
    <div>
        <Slider></Slider>
        <Products></Products>
    </div>
</template>
<script>

import Slider from "./Slider.vue"
import Products from "./Products.vue"


export default{
    name:"HomE",
    components:{
        Slider,Products
    },
    data(){
        return{
             perPage:3   
        }
    },
    
}
</script>
