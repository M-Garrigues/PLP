<template>
  <div id="app">
    <Navbar @onMenuClick="onMenuClick"></Navbar>
    <MainWrapper :leagueFilter=leagueFilter></MainWrapper>
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
  },
  data() {
    return {
      leagueFilter: ""
    }
  },
  methods: {
    onMenuClick(newValue) {
      this.leagueFilter = newValue;
    }
  }
}
</script>