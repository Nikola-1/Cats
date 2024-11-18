<template>
    <div class="card-details">
        <div class="name-details text-white">
        <h1>{{this.name}}</h1>
        </div>
        <div class="info-details">
            <Div>
        <img :src="this.image_link" width="250" height="250">
        </Div>
        <Div class="d-block">
        <Div>
        <h1>Details</h1>
        <p>children_friendly:{{this.children_friendly}}</p>
        <p>family_friendly:{{this.family_friendly}}</p>
        <p>general_health:{{this.general_health}}</p>
        <p>length:{{this.length}}</p>
        <p>max_life_expectancy:{{this.max_life_expectancy}}</p>
    </Div>
    <input type="button" value="add to Favorites" class="btnLog w-100" @click="addFavorite(name)">
</Div>
    </div>
    
    <div class="fill-container"></div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
    name:"DetailS",
    data(){
        return{
            name:"",
            children_friendly:0,
            family_friendly:0,
            general_health:0,
            length:"",
            max_life_expectancy:0,
            image_link:"",
            user:localStorage.getItem('user')
        }
    },
    computed:{
        ...mapGetters(['notDeletedCats','AllCats'])
    },
    mounted(){
     
      console.log(this.notDeletedCats.length)
      if(this.notDeletedCats.length == 0){
       this.$router.push('/home')
      }
      if(this.notDeletedCats.length == 0){
            this.$store.commit("apiFetch");
            this.$store.commit("apiFetchAll");
             }
        this.name=this.$route.params.name
       
        
        if(this.$route.params.name){
            var cat=this.notDeletedCats.filter(x=>x.name == this.name)[0]
           
            console.log(cat);
            this.image_link=cat.image_link
            this.children_friendly=cat.children_friendly
            this.family_friendly=cat.family_friendly
            this.general_health=cat.general_health
            this.length=cat.length
            this.max_life_expectancy=cat.max_life_expectancy
        }
        
    },
    methods:{
        getCats(){
                this.$store.commit("apiFetchAll");
          
                console.log(this.$store)
                console.log(this.cats);
                console.log(this.notDeletedCats);
                return this.cats
                
            },
            addFavorite(name){
              
              if(this.user){
              
              
                this.$store.commit('addFavoriteCat',name);
               
              }
             
            }
    }
}
</script>
