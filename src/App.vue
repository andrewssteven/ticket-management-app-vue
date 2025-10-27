<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main
      class="flex-1 w-full mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8"
    >
      <router-view />
    </main>
    <Footer />
    <Toast />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Toast from "./components/Toast.vue";

export default {
  name: "App",
  components: { Header, Footer, Toast },
};
</script>
