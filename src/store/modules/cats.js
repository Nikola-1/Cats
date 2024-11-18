/*const mongoose = require("mongoose");
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_collection = process.env.DB_COLLECTION;
const db_url = `mongodb+srv://${db_user}:${db_password}@mongo-01.exofm.mongodb.net/${db_collection}?retryWrites=true&w=majority`;
mongoose.connect(
    db_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    (err) => {
        if (!err) {
            console.log("Connection successful");
        } else {
            console.log("No Connection");
        }
    }
);*/
import axios from "axios"
import cats from './cats.json'

export default{
    state:{
        catsPage: cats,
        catsDrop:cats,
        searchCats:{keyword:null},
        deletedCats:[],
        notDeletedCats:[],
        favouriteCats:[],
        perPage:localStorage.getItem('page'),
        plus:3,
        total:0
    },
    mutations:{
        apiFetch(state){
            axios.get(`https://api.api-ninjas.com/v1/cats?grooming=5&offset=${state.perPage}`,
            {
                headers:{
                    "X-Api-Key": "7xjju0jL+F4JgZwkgXqalw==SxsZAt2Vvxrb4NlN"
                }
                
            }).then(function(response){
                state.catsPage = response.data
                state.total=state.catsPage.length;
                console.log(state.catsPage)
               
            })
        },
        apiFetchAll(state){
            axios.get(`https://api.api-ninjas.com/v1/cats?grooming=5&offset=1`,
            {
                headers:{
                    "X-Api-Key": "7xjju0jL+F4JgZwkgXqalw==SxsZAt2Vvxrb4NlN"
                }
                
            }).then(function(response){
                state.catsDrop = response.data
                console.log(state.catsDrop)
               
               
            })
            return state.catsDrop
        },
        addCats(state){
         
            
            state.perPage-=state.plus;
               localStorage.removeItem('page');
            localStorage.setItem('page',state.perPage)
          
       },
       updateCatPage(state, newCat){
        var Cat = state.catsPage.find(x => x.name == newCat.name)
        Cat.name = newCat.name
        Cat.image_link = newCat.image_link
        Cat.children_friendly = newCat.children_friendly
        Cat.family_friendly = newCat.family_friendly
        Cat.general_health = newCat.general_health
        Cat.grooming = newCat.grooming
        Cat.intelligence = newCat.intelligence
        Cat.length = newCat.length
        Cat.max_life_expectancy = newCat.max_life_expectancy
        Cat.min_life_expectancy = newCat.min_life_expectancy
        Cat.max_weight = newCat.max_weight
        Cat.min_weight = newCat.min_weight
    },
    updateCatDrop(state, newCat){
        var Cat = state.catsDrop.find(x => x.name == newCat.name)
        Cat.name = newCat.name
        Cat.image_link = newCat.image_link
        Cat.children_friendly = newCat.children_friendly
        Cat.family_friendly = newCat.family_friendly
        Cat.general_health = newCat.general_health
        Cat.grooming = newCat.grooming
        Cat.intelligence = newCat.intelligence
        Cat.length = newCat.length
        Cat.max_life_expectancy = newCat.max_life_expectancy
        Cat.min_life_expectancy = newCat.min_life_expectancy
        Cat.max_weight = newCat.max_weight
        Cat.min_weight = newCat.min_weight
    },
       addFavoriteCat(state,name){
       /* var cat=state.cats.filter(x=>x.name==name)[0];
        console.log(cat);
        if(state.favouriteCats.filter(x=>x.name==name) ==0){
            state.favouriteCats.push(cat);
            
        }
       console.log(state);*/
       state.favouriteCats.push(name);
         },
         removeFavorite(state,name){
            var Favorite = state.favouriteCats.filter(x=>x != name)
            state.favouriteCats = Favorite;
         },
       resetPage(state){
        
        
        localStorage.removeItem('page');
        localStorage.setItem('page',13);
        state.perPage=localStorage.getItem('page');
       },
      
    },
    getters:{
       cats(state){
        if(state.searchCats.keyword){
            return state.catsPage.filter(function(catsPage){
                return catsPage.name.toLowerCase().includes(state.searchCats.keyword.toLowerCase().trim());
            })
        }
        return state.catsPage;
       },
       AllCats(state){
        return state.catsDrop;
       },
       notDeletedCats(state, getters){
        return getters.AllCats.filter(x => !state.deletedCats.includes(x.name))
    },
    getFavouriteCats(state, getters){
        console.log(getters.cats.filter(x => state.notDeletedCats.includes(x.name)));
        console.log(state.favouriteCats);
        return getters.notDeletedCats.filter(x => state.favouriteCats.includes(x.name))
    },
    
   
    }
}
