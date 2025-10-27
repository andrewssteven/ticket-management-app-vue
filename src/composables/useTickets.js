import { ref, onMounted } from "vue";
import {
  fetchTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} from "../utils/tickets";

export function createTickets() {
  const tickets = ref([]);
  const isLoading = ref(true);

  async function load() {
    isLoading.value = true;
    try {
      const data = await fetchTickets();
      tickets.value = data || [];
    } catch (e) {
      console.error("Failed to load tickets", e);
      tickets.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  async function create(item) {
    const res = await createTicket(item);
    await load();
    return res;
  }

  async function update(item) {
    const res = await updateTicket(item);
    await load();
    return res;
  }

  async function remove(item) {
    const res = await deleteTicket(item);
    await load();
    return res;
  }

  onMounted(load);

  return { tickets, isLoading, load, create, update, remove };
}
