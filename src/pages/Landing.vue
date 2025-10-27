<template>
  <section class="text-center py-20">
    <h1 class="text-3xl font-bold">Welcome to Ticketly</h1>
    <p class="mt-4 text-gray-500">
      A simple ticket management demo built with Vue 3 and Tailwind CSS.
    </p>
    <div class="mt-6 flex justify-center gap-4">
      <router-link
        to="/auth/signup"
        class="px-4 py-2 rounded border border-indigo-600 text-indigo-600"
        >Get Started</router-link
      >
      <router-link
        to="/auth/login"
        class="px-4 py-2 rounded bg-indigo-600 text-white"
        >Login</router-link
      >
    </div>
  </section>
</template>

<script>
export default { name: "Landing" };
</script>
