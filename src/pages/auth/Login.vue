<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-xl font-semibold mb-4">Login</h2>
    <form @submit.prevent="submit">
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        class="w-full p-2 border rounded mb-2"
      />
      <input
        v-model="form.password"
        type="password"
        placeholder="Password"
        class="w-full p-2 border rounded mb-2"
      />
      <div class="flex gap-2">
        <button class="px-4 py-2 bg-indigo-600 text-white rounded">
          Login
        </button>
        <router-link to="/auth/signup" class="px-4 py-2 border rounded"
          >Sign up</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { login } from "../../utils/auth";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Login",
  setup() {
    const form = ref({ email: "", password: "" });
    const router = useRouter();
    const route = useRoute();

    function submit() {
      const ok = login(form.value);
      if (ok) {
        const redirect = route.query.from || "/dashboard";
        router.push(redirect);
      } else {
        // simple alert; can use toast
        alert("Invalid credentials");
      }
    }

    return { form, submit };
  },
};
</script>
