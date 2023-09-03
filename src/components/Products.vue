<template>
    <section class="product_section ">
        <div class="container">
          <div class="product_heading">
            <h2>
              Top Sale Watches
            </h2>
          </div>
          <div class="product_container">
            <div class="box" v-for="cats,index of notDeletedCats" :key="index">
              <div class="box-content">
                <div class="img-box">
                  <img :src=cats.image_link  alt="">
                </div>
                <div class="detail-box">
                  <div class="text">
                    <h6>
                      {{cats.name}}
                    </h6>
                    <h5>
                      <span>$</span> 300
                    </h5>
                  </div>
                  <div class="like">
                    <h6>
                      Like
                    </h6>
                    <div class="star_container">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-box">
                <a href="">
                  Add To Cart
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div class="button"><input type="button" @click="add()"></div>
      </section>
    
</template>
<script>

import { mapGetters } from "vuex";
export default{
    name:"ProductS",
    data(){
            return{
                    limit:false,
                    
            }
    },
    created(){

        
        this.getCats();
    },
    computed:{
        ...mapGetters(['cats','notDeletedCats','getFavouriteCats','addCats'])
    },
    mounted(){
        if(!localStorage.getItem("page")){
            localStorage.setItem('page',13);
           
        }
    },
    methods:{
            getCats(){
                this.$store.commit("apiFetch");
                console.log(this.$store)
                console.log(this.cats);
                console.log(this.notDeletedCats);
                return this.cats
                
            },
            add(){
             
                var p=localStorage.getItem('page');
                if(p >=3){
                    
                    this.$store.commit("addCats");
                
                this.getCats();
                }
               
                
                
            }
    },

}
</script>
