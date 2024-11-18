<template>
    <div>
        <div  v-if="user && user.role == 'admin'">
        <section class="section-margin--small mb-5 cat-section">
            <h1>Admin panel</h1>
            <h2>Edit cats</h2>
            <div class="container">
              <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                  <section class="lattest-product-area pb-40 category-list">
                    <form class="row login_form d-flex justify-content-center">
                        <SelectComponent v-model="selectedCat" id="catSelect" label="Select cat:" :items="notDeletedCats" displayProperty="name" @updatedValue="selectedCat=$event"/>
                        <TextBox v-model="children_friendly" type="text" id="children_friendly" placeholder="children_friendly" label="children_friendly:" @updatedValue="children_friendly=$event"/>
                        <TextBox v-model="family_friendly" type="text" id="family_friendly" placeholder="family_friendly" label="family_friendly:" @updatedValue="family_friendly=$event"/>
                        <TextBox v-model="general_health" type="text" id="general_health" placeholder="general_health" label="general_health:" @updatedValue="general_health=$event"/>
                        <TextBox v-model="grooming" type="text" id="grooming" placeholder="grooming" label="grooming:" @updatedValue="grooming=$event"/>
                        <TextBox v-model="intelligence" type="text" id="intelligence" placeholder="intelligence" label="intelligence:" @updatedValue="intelligence=$event"/>
                        <TextBox v-model="length" type="text" id="length" placeholder="length" label="length" @updatedValue="length=$event"/>
                        <TextBox v-model="max_life_expectancy" type="text" id="max_life_expectancy" placeholder="max_life_expectancy" label="max_life_expectancy:" @updatedValue="max_life_expectancy=$event"/>
                        <TextBox v-model="min_life_expectancy" type="text" id="min_life_expectancy" placeholder="min_life_expectancy" label="min_life_expectancy:" @updatedValue="min_life_expectancy=$event"/>
                        <TextBox v-model="min_weight" type="text" id="min_weight" placeholder="Min weight" label="Min weight:" @updatedValue="min_weight=$event"/>
                        <TextBox v-model="max_weight" type="text" id="max_weight" placeholder="Max weight" label="Max weight:" @updatedValue="max_weight=$event"/>
                        <TextBox v-model="image_link" type="text" id="image_link" placeholder="Image link" label="Image link:" @updatedValue="image_link=$event"/>
                        <div class="col-md-12 form-group d-flex justify-content-center" id="imgPrev">
                            <img v-if="image_link" width="400" :src="image_link" class="img img-round" />
                        </div>
                        <div class="col-md-4 form-group">
                            <input type="button" value="Update" class="button button-register w-100" @click="editCat()" />
                        </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
           
           
        </section>
        <div class="col-md-6 user-section">
            <h2>Edit users</h2>
            <h5 v-if="email != ''">Email: {{email}}</h5>
            <section class="lattest-product-area pb-40 category-list ">
              <form class="row login_form d-flex justify-content-center">
                  <SelectComponent v-model="selectedUser" id="CatItems"  label="Select user:" :items="users" displayProperty="username" @updatedValue="selectedUser=$event"/>
                  <TextBox v-model="username" type="text" id="user"  placeholder="username" label="Username:" @updatedValue="username=$event"/>
                  <TextBox v-model="password" type="text" id="user2" placeholder="password" label="Password:" @updatedValue="password=$event"/>
                  <div class="col-md-4 form-group">
                      <input type="button" value="Update" class="button button-register w-100" @click="editUser()" />
                  </div>
              </form>
            </section>
          </div>
        </div>
        <div v-else>
            <h1>Error 404: Page not found</h1>
        </div>
    </div>  
</template>
<script>
import { mapGetters } from 'vuex'

    export default{
        name: 'AdminPanel',
        data(){
            return{
                name: '',
                image_link: '',
                children_friendly: 0,
                family_friendly: 0,
                general_health: 0,
                grooming: 0,
                intelligence: 0,
                length: 0,
                max_life_expectancy: 0,
                min_life_expectancy: 0,
                max_weight: 0,
                min_weight: 0,
                selectedCat: '',
                selectedUser: '',
                username: '',
                password: '',
                email: '',
                user: JSON.parse(localStorage.getItem('user')),
            }
        },
        created(){
            this.$store.commit('apiFetchAll');
            
            console.log(this.cats)
             if(this.notDeletedCats.length == 0){
                 this.getCats()
             }
            
        },
        
        computed: {
            ...mapGetters(['cats','notDeletedCats','users',])
        },
        methods: {
            getCats(){
                this.$store.commit("apiFetchAll");
                
                return this.cats
                
            },
            editCat: function() {
                this.$store.commit("updateCatDrop", 
                {
                    name: this.name,
                    image_link: this.image_link,
                    children_friendly: this.children_friendly,
                    family_friendly: this.family_friendly,
                    general_health: this.general_health,
                    grooming: this.grooming,
                    intelligence: this.intelligence,
                    length: this.length,
                    max_life_expectancy: this.max_life_expectancy,
                    min_life_expectancy: this.min_life_expectancy,
                    max_weight: this.max_weight,
                    min_weight: this.min_weight,
                }),
                this.$store.commit("updateCatPage", 
                {
                    name: this.name,
                    image_link: this.image_link,
                    children_friendly: this.children_friendly,
                    family_friendly: this.family_friendly,
                    general_health: this.general_health,
                    grooming: this.grooming,
                    intelligence: this.intelligence,
                    length: this.length,
                    max_life_expectancy: this.max_life_expectancy,
                    min_life_expectancy: this.min_life_expectancy,
                    max_weight: this.max_weight,
                    min_weight: this.min_weight,
                })
            },

            editUser: function() {
                this.$store.commit("updateUser", 
                {
                    username: this.username,
                    password: this.password,
                    email: this.email,
                })
            },
        },
        watch: {
            selectedCat(){
                let cat = this.notDeletedCats.filter(x => x.name == this.selectedCat)[0]
                this.name = cat.name
                this.image_link = cat.image_link
                this.children_friendly = cat.children_friendly
                this.family_friendly = cat.family_friendly
                this.general_health = cat.general_health
                this.grooming = cat.grooming
                this.intelligence = cat.intelligence
                this.length = cat.length
                this.min_life_expectancy = cat.min_life_expectancy
                this.max_life_expectancy = cat.max_life_expectancy
                this.min_weight = cat.min_weight
                this.max_weight = cat.max_weight
               console.log(cat);
            },
            selectedUser(){
                let user = this.users.filter(x => x.username == this.selectedUser)[0]
                this.username = user.username
                this.password = user.password
                this.email = user.email
            }
        }
    }
</script>
<style>
    #imgPrev img{
        border: 2px solid black;
        margin:0px auto;
    }
    h1{
        text-align: center;
    }
    h2{
        text-align: center;
        padding: 50px 0px 30px 0px;
    }
    h5{
        text-align: center;
    }
</style>