import { el } from "./src/utils/dom.js";
import { store } from "./src/state/store.js";
import { Logo } from "./src/components/Logo.js";
import { BackButton } from "./src/components/BackButton.js";
import { ItemForm } from "./src/components/ItemForm.js";
import { ItemList } from "./src/components/ItemList.js";
import { Toast } from "./src/components/Toast.js";
import { registerServiceWorker } from "./src/pwa/pwa.js";

// 1. Inicializa a camada PWA e o Service Worker
registerServiceWorker();

// 2. Criação dos componentes de interface
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

// 3. Inserção no DOM
document.body.prepend(page);
document.body.append(toast.element);

// 4. Reatividade do Estado
store.subscribe((state) => list.update(state.items));
list.update(store.getState().items);