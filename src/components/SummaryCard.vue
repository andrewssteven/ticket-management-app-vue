<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <div class="text-sm text-gray-500">{{ title }}</div>
    <div class="mt-2 text-2xl font-bold">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "SummaryCard",
  props: {
    title: String,
    value: [String, Number],
  },
};
</script>
