<template>
  <div className="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow mt-[140px]">
      <SectionSix />
      <SectionSeven />
      <!-- <HowCanWeHelp /> -->
      <OurClients />
      <!-- <OurProcess /> -->
      <NeedAgency />
      <Forms />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../partials/Header.vue";
import Hero from "../partials/Hero.vue";
import OurClients from "../partials/OurClients.vue";
import Forms from "../partials/Forms.vue";
import Footer from "../partials/Footer.vue";
import HowCanWeHelp from "../partials/HowCanWeHelp.vue";
import OurProcess from "../partials/OurProcess.vue";
import NeedAgency from "../partials/NeedAgency.vue";
import SectionSix from "../partials/SectionSix.vue";
import SectionSeven from "../partials/SectionSeven.vue";

export default {
  name: "Home",
  components: {
    Header,
    Hero,
    OurClients,
    NeedAgency,
    Forms,
    Footer,
    HowCanWeHelp,
    OurProcess,
    SectionSix,
    SectionSeven,
  },
};
</script>