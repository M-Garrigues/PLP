<template>
  <div id="app">
    <Navbar></Navbar>
    <MainWrapper></MainWrapper>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import MainWrapper from "./components/MainWrapper";
import Footer from "./components/Footer";

export default {
  name: 'app',
  components: {
    Footer,
    MainWrapper,
    Navbar
  }
}
</script>
