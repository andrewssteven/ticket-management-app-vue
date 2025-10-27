<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SummaryCard title="Total Tickets" :value="total" />
      <SummaryCard title="Open Tickets" :value="open" />
      <SummaryCard title="Resolved Tickets" :value="resolved" />
    </div>

    <div class="mt-8">
      <h3 class="text-lg font-semibold">Quick actions</h3>
      <div class="mt-4 flex gap-2">
        <router-link
          to="/tickets"
          class="px-4 py-2 bg-indigo-600 text-white rounded"
          >Manage Tickets</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import SummaryCard from "../components/SummaryCard.vue";
import { useTickets } from "../composables/useTickets";

export default {
  name: "Dashboard",
  components: { SummaryCard },
  setup() {
    const { tickets } = useTickets();
    const total = computed(() => tickets.value.length);
    const open = computed(
      () => tickets.value.filter((t) => t.status === "open").length
    );
    const resolved = computed(
      () => tickets.value.filter((t) => t.status === "closed").length
    );
    return { total, open, resolved };
  },
};
</script>
