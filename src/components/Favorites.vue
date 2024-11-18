<template>
    <Div v-if="user">
        <Div class="product_section m-3">
            <div class="product_container flex-wrap">
                <div class="box flex-basis" v-for="cat,index of getFavouriteCats" :key="index">
                  <div class="box-content m-3" >
                    <div class="img-box">
                      <img :src=cat.image_link  alt="">
                    </div>
                    <div class="detail-box">
                      <div class="text">
                        <h6>
                          {{cat.name}}
                        </h6>
                      
                      </div>
                      <div class="like" v-if="user">
                        <h6 @click="removeFavourite(cat.name)" class="bg-danger p-1 text-white">
                          Delete
                        </h6>
                        
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div v-if="this.getFavouriteCats ==0"><h1>No kitty catty? :(</h1></div>
              </div>
</Div>
</Div>
</template>
<script>
import { mapGetters } from 'vuex';

export default{
        name: 'FavoriteS',
        data(){
            return{
                user: JSON.parse(localStorage.getItem('user')),
                
            }
        },
        mounted(){
          
                if(!this.user){
                    
                    this.$router.push('/login');
                    this.$emit('Useri',this.user);
                    
                }
            
        },
       
        computed: {
            ...mapGetters(['getFavouriteCats','notDeletedCats','cats']),
        },
        methods: {
            removeFavourite(name){
                this.$store.commit("removeFavorite", name)
                console.log("Poslato: " + name)
            }
        },
        
    }
</script>
