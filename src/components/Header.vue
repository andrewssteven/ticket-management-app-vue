<template>
  <header
    class="w-full border-b border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm"
  >
    <div
      class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
    >
      <router-link to="/" class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold"
        >
          T
        </div>
        <div>
          <div class="font-semibold">Ticketly</div>
          <div class="text-xs text-gray-500 dark:text-gray-400">
            Ticket Management
          </div>
        </div>
      </router-link>

      <nav class="flex items-center gap-4">
        <router-link
          to="/tickets"
          class="hidden sm:inline-block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >Tickets</router-link
        >
        <router-link
          to="/dashboard"
          class="hidden sm:inline-block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >Dashboard</router-link
        >

        <div v-if="!authenticated" class="flex gap-2">
          <router-link
            to="/auth/login"
            class="px-4 py-2 rounded bg-indigo-600 text-white hover:opacity-95"
            >Login</router-link
          >
          <router-link
            to="/auth/signup"
            class="px-4 py-2 rounded border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >Get Started</router-link
          >
        </div>
        <button
          v-else
          @click="handleLogout"
          class="px-4 py-2 rounded bg-red-600 text-white hover:opacity-95"
        >
          Logout
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { isAuthenticated, logout } from "../utils/auth";
import { useRouter } from "vue-router";

export default {
  name: "AppHeader",
  setup() {
    const router = useRouter();
    const authenticated = computed(() => isAuthenticated());

    function handleLogout() {
      logout();
      router.push("/");
    }

    return { authenticated, handleLogout };
  },
};
</script>
