<template>
    <section class="product_section ">
      
        <div class="container">
          <div :class="user3 ? ' font text-success  m-auto d-flex justify-content-center align-items-center' : 'text-danger font '">{{messg}}</div>
          <div class="product_heading">
            <h2>
              Top Sale Watches
            </h2>
          </div>
          
          <div class="product_container">
            
            <div class="box" v-for="cats,index of cats" :key="index">
              
              <div class="box-content">
                <div class="img-box">
                  <img :src=cats.image_link  alt="">
                </div>
                <div class="detail-box">
                  <div class="text">
                    <h6>
                      {{cats.name}}
                    </h6>
                  
                  </div>
                  <div class="like" >
                    <h6>
                      <i class="fa-solid fa-heart-circle-plus" @click="addFavorite(cats.name)"></i>
                    </h6>
                    
                  </div>
                </div>
              </div>
              <div class="btn-box">
                <a @click="details(cats.name)">
                  Details <i class="fas fa-paw"></i>
                </a>
              </div>
              
            </div>
            
          </div>
        </div>
       
        <div class="button dugme  " @click="add()"><p class="m-0">More<i class="fas fa-caret-down"></i></p></div>
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
    props:{
      
      user3:{
        typeOf:Object,
        required:true
      },
      messg:{
        typeOf:String,
        required:true
      }
    },
    created(){

        
        this.getCats();
    },
    computed:{
        ...mapGetters(['cats','notDeletedCats','getFavouriteCats','addCats','addFavoriteCat'])
    },
    mounted(){
        
           this.$store.commit('resetPage')
           
          this.getCats()
        console.log(this.messg);
    },
    methods:{
            getCats(){
                this.$store.commit("apiFetch");
                
                return this.cats
                
            },
            add(){
             
                var p=localStorage.getItem('page');
                if(p >=3){
                    
                    this.$store.commit("addCats");
                
                this.getCats();
                }
               
                
                
            },
            addFavorite(name){
              if(this.user3){
                var cat = this.notDeletedCats.filter(x=>x.name==name)[0];
                this.$store.commit('addFavoriteCat',name);
                this.$emit('proceedMessage','You successfully added the '+cat.name)
              }
             else{
              
              this.$emit('proceedMessage','First you have to sign in.')
             }
            },
            
            details(name){
                this.$router.push({ name: 'details', params: {name: name}})
            },
            
    },

}
</script>
