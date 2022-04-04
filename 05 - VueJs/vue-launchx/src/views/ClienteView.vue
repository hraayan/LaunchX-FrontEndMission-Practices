<template>
    <Navbar />
    <br> <br><br>
    <Productos />
    <Footer />
</template>


<script>

import Navbar from '@/components/Navbar.vue';
import Productos from "@/components/Productos.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "ClienteView",
  components:{
    Navbar,
    Productos,
    Footer,
  }
};
</script>