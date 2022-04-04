<template>

    <div class="navbar">
        
        <a href="#" style="margin-top: -13px; margin-bottom: -14px; margin-right: 20%;"><img src="../assets/cakelogo.png" alt="logo" class="brand"></a>
       
         <router-link to="/">
        <a class="active" href="#" style="margin-left: 30%;"><i class="fa fa-fw fa-home"></i> Home</a> </router-link>
        <router-link to="/cliente">
        <a href="#"><i class="fa fa-fw fa-search"></i> Clientes</a> 
        </router-link>
        <router-link to="/pedidos">       
        <a href="#"><i class="fa fa-fw fa-envelope"></i> Pedidos</a>
        </router-link>
        <router-link to="/stock">
        <a href="#"><i class="fa fa-fw fa-user"></i> Stock Pastelero</a>
        </router-link>
        <router-view />
    </div>
    
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
    width: 100%;
    background-color: #555;
    overflow:hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-bottom: 15%;
    padding-bottom: 8px;
    height: min-content;
    
  }
  
  .navbar a {
    float: left;
    
    bottom: 50%;
    vertical-align: middle;
    padding: 12px;
    color: white;
    text-decoration: none;
    font-size: 17px;
    margin-top: 15px;
  }
  
  .navbar a:hover {
    background-color: #000;
  }
  
  .active {
    background-color: #08bb79;
  }
  
  @media screen and (max-width: 500px) {
    .navbar a {
      float: none;
      display: block;
    }
  }

.brand{
  height: 68px !important; 
  width: 95px !important;
  /* margin-right: 20%; */
  margin-top: 5px;
  margin-bottom: -5px;
  background-color: aqua;
  transform: scale(110%);
  /* float: left; */
  
  
}
</style>