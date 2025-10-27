import { ref } from "vue";

export function createToast() {
  const _toasts = ref([]);

  function show({ type = "info", message = "", duration = 4000 }) {
    const id = Date.now();
    _toasts.value.push({ id, type, message });
    setTimeout(() => {
      _toasts.value = _toasts.value.filter((t) => t.id !== id);
    }, duration);
  }

  return { show, _toasts };
}
