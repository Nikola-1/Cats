<template>
    <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <span>
                HandTime
              </span>
            </a>
  
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>
  
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  ">
               
                <li class="nav-item" v-for="a,index of Links" :key="index">
                 <router-link :to="a.path" class="link"> {{a.name}}</router-link>
                </li>
               
              </ul>
              <div class="user_optio_box">
                <a href="">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
</template>
<script>


export default{
        name:"NaV",
        data(){
                
        },
        props:{
            Links:{
                type:Array,
                required:true
            
            }
                
        }
}
</script>
