<template>
  
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container{
    background: linear-gradient(126deg, rgba(170,170,170,0.7094188017003676) 0%, rgba(194,245,239,0.6281863087031687) 100%);
    margin-top: 6rem;
    text-decoration: dotted;
    border-radius: 10px 10px 10px 10px;
    
    
}
.container h3{
    margin: 15px;
    margin-top: 25px;
    color: black;
    transform: translateY(6px);
   
}
.container2{
    background: linear-gradient(126deg, rgba(170,170,170,0.7094188017003676) 0%, rgba(194,245,239,0.6281863087031687) 100%);
    margin-top: 1rem;
    text-decoration: dotted;
    border-radius: 10px 10px 10px 10px;
    margin-top: 8%;
    
}
.container2 h3{
    margin: 15px;
    margin-top: 25px;
    color: black;
    transform: translateY(6px);
   
}
.prod{
    margin-top: 15px;
    /* position: relative; */
   
    height: auto;
    background-color: rgba(236, 236, 236, 0.8);
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    align-items: left;
    justify-content: left;
    margin-bottom: 15px;
    margin-bottom: 5px;
    
}
.prod2{
  margin-top: 10px;
  background-color: rgba(236, 236, 236, 0.8);
  display:flex;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: 10px  ;
    text-align: center;
    font-family: arial;
    border-radius: 10px;
    width: 96%;
    height: 100%;
    margin-bottom: 5px;
}
.card p{
    margin: 5px;
    text-align: center;
}
.articulo {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto  ;
  text-align: center;
  font-family: arial;
  border-radius: 10px;
  width: 250px;
  height: 300px;
}
.articulo p{
  margin: 5px;
  text-align: center;
}

.img{
    margin-top: 3px;
    border-radius: 10px;
    height: 260px;
}
.img-art{
  margin-top: 3px;
  border-radius: 10px;
  width: 230px;
  height: 150px;
}
.sabor{
  font-size: large;
  float: left;
  background-color: #f5f5f5fb;
  margin: 15px;
  /* margin-right: 10px; */
  padding: 5px;
  border-radius: 8px;
  width: auto;
}
.cant{
 
  background-color:rgb(216, 216, 216);
  margin-left: 1rem;
  margin-right: auto;
  align-content:center;
  border-radius: 5px;
  width: 100px;
}
.btn{
  margin-left: 40%;
  font-size: large;
  color: #000000;
  background-color: #08bb79;
  
  margin-top: 1%;
  border-color: rgb(5, 226, 79);
  border-radius: 8px;
  margin-right: auto;
  /* transform: translateX(-150%); */
}
.footer {
  /* position: absolute; */
  
  position: relative;
  
  bottom: 0;
  width: 101%;
  margin-top: auto;
  
  margin-left: -0.5%;
  margin-right: 0.5%;
  background-color: rgb(0, 163, 128);
  color: rgb(0, 0, 0);
  font-family: sans-serif;
  
  
}
.address{
  margin-left: 30%;
  display: flex;
  margin-right: 30%;
}
.page-content{
  position: absolute;
  min-height: 100vh;
  margin-bottom: 3rem;
}
tr:nth-child(even) {
  background-color: #D6EEEE;
}
tr {
  border-bottom: 1px solid #ddd;
  margin: 5px;
  padding: 8px;
}
tr:hover {background-color: #D6EEEE;}
table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}
th, td {
  background-color: #96D4D4;
  margin: 5px;
  text-align: center;
  width: auto;
  padding: 8px;
  border-radius: 8px;
  letter-spacing:0.3ch;
  line-height: 3ch;
}

table{
  padding: 5px;
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: 8px;
}
</style>
