<template>
    <Navbar />
    <br><br><br>
    <Stock />
    <br><br><br>
    <Footer />
    <br><br>

</template>
<script>

import Navbar from '@/components/Navbar.vue';
import Stock from "@/components/Stock.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "ClienteView",
  components:{
    Navbar,
    Stock,
    Footer,
  }
};
</script>