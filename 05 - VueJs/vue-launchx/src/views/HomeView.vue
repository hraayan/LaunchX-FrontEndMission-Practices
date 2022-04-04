<template>
  <Navbar />
  <br><br><br><br>
  <div class="home">
    <img alt="Vue logo" src="../assets/cakelogo.png" style="margin-top:5%;"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "HomeView",
  components:{
    Navbar,
  }
};
</script>

<style>
body {
  background: radial-gradient(
    circle,
    rgba(174, 195, 238, 1) 0%,
    rgba(148, 233, 170, 1) 100%
  );
}
</style>
