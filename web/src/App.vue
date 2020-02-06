<template>

  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <div id="header-wrapper">
      <div id="header">
        <div id="logo">
          <h1><a href="#">PLP</a></h1>
          <span>Laziness is key to <a href="https://i.kym-cdn.com/entries/icons/original/000/000/248/profit.jpg" rel="nofollow" target="_blank">profit</a></span>
        </div>
        <div id="triangle-up"></div>
      </div>
    </div>
    <Navbar @onMenuClick="onMenuClick"></Navbar>
    <b-container fluid>
      <MainWrapper :leagueFilter=leagueFilter></MainWrapper>
    </b-container>
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