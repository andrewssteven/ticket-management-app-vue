<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-xl font-semibold mb-4">Sign up</h2>
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
          Create account
        </button>
        <router-link to="/auth/login" class="px-4 py-2 border rounded"
          >Login</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { register } from "../../utils/auth";
import { useRouter } from "vue-router";

export default {
  name: "Signup",
  setup() {
    const form = ref({ email: "", password: "" });
    const router = useRouter();

    function submit() {
      const ok = register(form.value);
      if (ok) router.push("/dashboard");
      else alert("Invalid input");
    }

    return { form, submit };
  },
};
</script>
