<template>
    <Navbar />  
    <Pedidos />
    <br><br><br>
    <Footer />
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Pedidos from "@/components/Pedidos.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "ClienteView",
  components:{
    Navbar,
    Pedidos,
    Footer,
  }
};
</script>