import { el } from "./utils/dom.js";
import { store } from "./state/store.js";
import { Logo } from "./components/Logo.js";
import { BackButton } from "./components/BackButton.js";
import { ItemForm } from "./components/ItemForm.js";
import { ItemList } from "./components/ItemList.js";
import { Toast } from "./components/Toast.js";
import { registerServiceWorker } from './src/pwa/pwa.js';

registerServiceWorker();

const toast = Toast({ message: "O item foi removido da lista" });

const list = ItemList({
  onToggle: store.toggleItem,
  onRemove(id) {
    store.removeItem(id);
    toast.show();
  },
});

const page = el(
  "main",
  { class: "container py-4 py-md-5", style: "max-width:680px" },
  Logo(),
  BackButton({ onClick: (e) => { e.preventDefault(); history.back(); } }),
  el("h2", { class: "h3 fw-bold mt-3 mb-4" }, "Compras da semana"),
  ItemForm({ onAdd: store.addItem }),
  list.element
);

document.body.prepend(page);
document.body.append(toast.element);

store.subscribe((state) => list.update(state.items));
list.update(store.getState().items);