# FlowDesk — Vue implementation

This folder contains the Vue 3 + Vite implementation of the FlowDesk demo. It mirrors the React UI and behavior, using `localStorage` as a demo backend.

## Quick start

```bash
cd ticket-management-vue
npm install
npm run dev
```

Open the URL shown by Vite (usually http://localhost:5173).

## Frameworks & libraries

- Vue 3
- Vite
- Tailwind CSS
- vue-router

## What this implementation includes

- Landing page with wave SVG hero and decorative elements.
- Login and Signup pages with validation and toast notifications.
- Dashboard with summary cards and navigation to Tickets.
- Tickets page with full CRUD, validation and toasts.
- Router guard to protect `/dashboard` and `/tickets` using `ticketapp_session`.

## App structure and key files

- `src/main.js` — app bootstrap and toast/tickets providers.
- `src/router/index.js` — routes and navigation guards.
- `src/pages/Landing.vue`, `src/pages/Dashboard.vue`, `src/pages/Tickets.vue` — main pages.
- `src/pages/auth/*.vue` — Login/Signup forms.
- `src/components/*` — Header, Footer, TicketCard, Toast, etc.
- `src/composables/useTickets.js` — tickets state and API wrapper.
- `src/composables/useToast.js` — toast provider.

## State and data

- Session token: `localStorage` key `ticketapp_session`.
- Tickets: stored under `ticketapp_tickets` as an array. Ticket shape matches the React version.

## Validation & accessibility

- Title and status are required; status must be `open`, `in_progress` or `closed`.
- Inline error messages and toast feedback are provided.
- Uses semantic HTML, visible focus states and responsive layout.

## Test credentials

- Example test account:
  - Email: `test@example.com`
  - Password: `password123`


## Known issues & notes

- Demo uses `localStorage` — no real backend. Data persists per browser profile.
- No automated tests included; ask if you want smoke tests added.

