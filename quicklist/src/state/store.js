import { loadItems, saveItems } from "../services/storage.js";

let state = { items: loadItems() };
const listeners = new Set();

function setState(next) {
  state = next;
  saveItems(state.items);
  listeners.forEach((fn) => fn(state));
}

export const store = {
  getState: () => state,

  subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },

  addItem: (name) =>
    setState({ items: [...state.items, { id: crypto.randomUUID(), name, done: false }] }),

  toggleItem: (id) =>
    setState({ items: state.items.map((i) => (i.id === id ? { ...i, done: !i.done } : i)) }),

  removeItem: (id) =>
    setState({ items: state.items.filter((i) => i.id !== id) }),
};