<template>
  <div>
    <Navbar />
    <Home />
    <Highlight />
    <About />
    <HireMeSection />
    <Project />
    <PageFooter />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Project from "../components/Projects.vue";
import Highlight from "../components/Highlights.vue";
import HireMeSection from "../components/HireMeSection.vue";
import PageFooter from "../components/Footer.vue";
export default {
  components: {
    Navbar,
    Home,
    About,
    Project,
    Highlight,
    HireMeSection,
    PageFooter
  }
};
</script>
