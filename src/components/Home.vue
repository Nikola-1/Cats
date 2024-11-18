<template>
    <div>
        <Slider></Slider>
        <Products :user3="this.user2" :messg="MsgForProduct" @proceedMessage="HomeMessage"></Products>
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
    props:{
        user2:{
            typeof:Object,
            required:true
        },
        MsgForProduct:{
            typeof:String,
            required:true
        }
    },
    data(){
        return{
             perPage:3 ,
             user:'',
             mess:''
        }
    },
    mounted(){
       
    },
    methods:{
       HomeMessage(value){
        this.mess=value
        this.$emit('FinalMessage',this.mess);
       },
       
       
    }
    
}
</script>
