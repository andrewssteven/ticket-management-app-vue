<template>
  <div
    class="fixed bottom-6 right-6 flex flex-col gap-3 z-50"
    aria-live="polite"
  >
    <div
      v-for="t in toasts"
      :key="t.id"
      :class="toastClass(t)"
      class="px-4 py-3 rounded shadow-lg text-sm max-w-sm"
    >
      {{ t.message }}
    </div>
  </div>
</template>

<script>
import { inject, ref, onMounted } from "vue";

export default {
  name: "Toast",
  setup() {
    const toast = inject("toast");
    const toasts = toast._toasts;

    function toastClass(t) {
      return t.type === "error"
        ? "bg-red-600 text-white"
        : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100";
    }

    return { toasts, toastClass };
  },
};
</script>
