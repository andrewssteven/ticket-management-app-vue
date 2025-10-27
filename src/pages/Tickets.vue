<template>
  <section>
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold">Tickets</h2>
      <button
        @click="openNew"
        class="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        New Ticket
      </button>
    </div>

    <div class="mt-6 grid gap-4">
      <div v-if="isLoading">Loading tickets...</div>
      <TicketCard
        v-for="t in tickets"
        :key="t.id"
        :ticket="t"
        @delete="removeTicket"
      />
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/40 flex items-center justify-center"
    >
      <div class="bg-white dark:bg-gray-800 p-6 rounded w-full max-w-md">
        <h3 class="font-semibold mb-4">Create ticket</h3>
        <input
          v-model="form.title"
          placeholder="Title"
          class="w-full mb-2 p-2 border rounded"
        />
        <textarea
          v-model="form.description"
          placeholder="Description"
          class="w-full mb-2 p-2 border rounded"
        ></textarea>
        <div class="flex gap-2 justify-end">
          <button
            @click="create"
            class="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Create
          </button>
          <button
            @click="showModal = false"
            class="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import TicketCard from "../components/TicketCard.vue";
import { useTickets } from "../composables/useTickets";

export default {
  name: "TicketsPage",
  components: { TicketCard },
  setup() {
    const { tickets, isLoading, create, remove } = useTickets();
    const showModal = ref(false);
    const form = ref({ title: "", description: "" });

    async function createTicket() {
      await create({
        ...form.value,
        status: "open",
        createdAt: new Date().toISOString(),
      });
      form.value = { title: "", description: "" };
      showModal.value = false;
    }

    function openNew() {
      showModal.value = true;
    }
    function removeTicket(t) {
      remove(t);
    }

    return {
      tickets,
      isLoading,
      showModal,
      form,
      openNew,
      create: createTicket,
      removeTicket,
    };
  },
};
</script>
