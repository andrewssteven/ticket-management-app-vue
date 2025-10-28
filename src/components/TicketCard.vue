<template>
  <div class="bg-white dark:bg-gray-800 rounded p-4 shadow">
    <div class="flex justify-between items-start">
      <div>
        <div class="font-semibold">{{ ticket.title }}</div>
        <div class="text-sm text-gray-500">{{ ticket.description }}</div>
      </div>
      <div class="flex gap-2">
        <button
          @click="$emit('edit', ticket)"
          class="px-3 py-1 bg-indigo-600 text-white rounded"
        >
          Edit
        </button>
        <button
          @click="$emit('delete', ticket)"
          class="px-3 py-1 bg-red-600 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketCard",
  props: { ticket: Object },
};
</script>
