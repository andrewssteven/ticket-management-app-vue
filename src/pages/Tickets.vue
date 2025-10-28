<template>
  <section>
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 class="text-lg font-semibold mb-2">
        {{ editing ? "Edit ticket" : "Create ticket" }}
      </h3>
      <form
        @submit.prevent="submitForm"
        class="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div class="md:col-span-2">
          <label class="block text-sm">Title</label>
          <input
            v-model="form.title"
            name="title"
            :aria-describedby="errors.title ? 'title-error' : undefined"
            @input="clearError('title')"
            class="mt-1 w-full px-3 py-2 rounded border"
          />
          <div
            v-if="errors.title"
            id="title-error"
            class="text-xs text-red-600 mt-1"
          >
            {{ errors.title }}
          </div>
        </div>

        <div>
          <label class="block text-sm">Status</label>
          <select
            v-model="form.status"
            name="status"
            :aria-describedby="errors.status ? 'status-error' : undefined"
            @change="clearError('status')"
            class="mt-1 w-full px-3 py-2 rounded border"
          >
            <option value="open">open</option>
            <option value="in_progress">in_progress</option>
            <option value="closed">closed</option>
          </select>
          <div
            v-if="errors.status"
            id="status-error"
            class="text-xs text-red-600 mt-1"
          >
            {{ errors.status }}
          </div>
        </div>

        <div class="md:col-span-3">
          <label class="block text-sm"
            >Description
            <span class="text-xs text-gray-400">(optional)</span></label
          >
          <textarea
            v-model="form.description"
            name="description"
            :aria-describedby="
              errors.description ? 'description-error' : undefined
            "
            @input="clearError('description')"
            class="mt-1 w-full px-3 py-2 rounded border"
            rows="3"
          ></textarea>
          <div
            v-if="errors.description"
            id="description-error"
            class="text-xs text-red-600 mt-1"
          >
            {{ errors.description }}
          </div>
        </div>

        <!-- priority removed to match other implementations -->

        <div class="flex items-end gap-2">
          <button
            type="submit"
            class="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            {{ editing ? "Update" : "Create" }}
          </button>
          <button
            type="button"
            @click="resetForm"
            class="px-4 py-2 border rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>

    <div class="grid gap-4">
      <div v-if="isLoading">Loading...</div>
      <TicketCard
        v-else
        v-for="t in tickets"
        :key="t.id"
        :ticket="t"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    </div>

    <!-- Confirm delete modal -->
    <div
      v-if="confirm.open"
      class="fixed inset-0 bg-black/40 flex items-center justify-center"
    >
      <div class="bg-white dark:bg-gray-800 p-6 rounded w-full max-w-md">
        <h3 class="text-lg font-semibold mb-2">Confirm delete</h3>
        <p>
          Are you sure you want to delete
          <strong>{{ confirm.ticket?.title }}</strong
          >?
        </p>
        <div class="mt-4 flex gap-2">
          <button
            @click="confirmDelete"
            class="px-4 py-2 bg-red-600 text-white rounded"
          >
            Delete
          </button>
          <button
            @click="() => ((confirm.open = false), (confirm.ticket = null))"
            class="px-4 py-2 border rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, inject } from "vue";
import TicketCard from "../components/TicketCard.vue";
import { useTickets } from "../composables/useTickets";

export default {
  name: "TicketsPage",
  components: { TicketCard },
  setup() {
    const toast = inject("toast");
    const { tickets, isLoading, create, update, remove } = useTickets();
    const editing = ref(null);
    const form = ref({
      title: "",
      description: "",
      status: "open",
    });
    const errors = ref({});
    const confirm = ref({ open: false, ticket: null });

    function resetForm() {
      editing.value = null;
      form.value = { title: "", description: "", status: "open" };
      errors.value = {};
    }

    function clearError(field) {
      if (errors.value[field]) delete errors.value[field];
    }

    function handleEdit(ticket) {
      editing.value = ticket;
      form.value = { ...ticket };
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function handleDelete(ticket) {
      confirm.value = { open: true, ticket };
    }

    async function submitForm() {
      const eobj = {};
      if (!form.value.title) eobj.title = "Title is required";
      if (!form.value.status) eobj.status = "Status is required";
      const allowed = ["open", "in_progress", "closed"];
      if (form.value.status && !allowed.includes(form.value.status))
        eobj.status = "Invalid status";
      if (form.value.description && form.value.description.length > 1000)
        eobj.description = "Description is too long (max 1000 chars)";
      // priority removed

      errors.value = eobj;
      if (Object.keys(eobj).length > 0) {
        const first = Object.keys(eobj)[0];
        const el = document.querySelector(`[name="${first}"]`);
        if (el) el.focus();
        return;
      }

      if (editing.value) {
        update(form.value)
          .then(() => toast?.show({ message: "Ticket updated" }))
          .catch(() =>
            toast?.show({ type: "error", message: "Failed to update ticket" })
          );
        editing.value = null;
      } else {
        create(form.value)
          .then(() => toast?.show({ message: "Ticket created" }))
          .catch(() =>
            toast?.show({ type: "error", message: "Failed to create ticket" })
          );
      }

      resetForm();
    }

    function confirmDelete() {
      remove(confirm.value.ticket)
        .then(() => toast?.show({ message: "Ticket deleted" }))
        .catch(() =>
          toast?.show({ type: "error", message: "Failed to delete ticket" })
        );
      confirm.value = { open: false, ticket: null };
    }

    return {
      tickets,
      isLoading,
      editing,
      form,
      errors,
      confirm,
      resetForm,
      clearError,
      handleEdit,
      handleDelete,
      submitForm,
      confirmDelete,
    };
  },
};
</script>
