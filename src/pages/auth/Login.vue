<template>
  <div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <h2 class="text-2xl font-semibold mb-4">Login</h2>
    <form @submit.prevent="submit" class="space-y-4">
      <div>
        <label class="block text-sm">Email</label>
        <input
          v-model="form.email"
          name="email"
          type="email"
          class="mt-1 w-full px-3 py-2 rounded border"
        />
        <div v-if="errors.email" class="text-xs text-red-600 mt-1">
          {{ errors.email }}
        </div>
      </div>

      <div>
        <label class="block text-sm">Password</label>
        <input
          v-model="form.password"
          name="password"
          type="password"
          class="mt-1 w-full px-3 py-2 rounded border"
        />
        <div v-if="errors.password" class="text-xs text-red-600 mt-1">
          {{ errors.password }}
        </div>
      </div>

      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Login
        </button>
        <router-link to="/auth/signup" class="text-sm text-indigo-600"
          >Create account</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import { ref, inject } from "vue";
import { login } from "../../utils/auth";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Login",
  setup() {
    const form = ref({ email: "", password: "" });
    const errors = ref({});
    const router = useRouter();
    const route = useRoute();
    const toast = inject("toast");

    function validate() {
      const e = {};
      if (!form.value.email) e.email = "Email is required";
      if (!form.value.password) e.password = "Password is required";
      errors.value = e;
      return Object.keys(e).length === 0;
    }

    function submit() {
      if (!validate()) return;
      const ok = login({
        email: form.value.email,
        password: form.value.password,
      });
      if (!ok) {
        toast?.show({ type: "error", message: "Invalid credentials" });
        return;
      }
      toast?.show({ type: "success", message: "Welcome back!" });
      const redirect = route.query.from || "/dashboard";
      router.push(redirect);
    }

    return { form, submit, errors };
  },
};
</script>
