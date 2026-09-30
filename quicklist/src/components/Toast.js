import { el } from "../utils/dom.js";

// Usa o Toast do Bootstrap (global `bootstrap`, carregado pelo bundle no index.html)
export function Toast({ message, delay = 3000 }) {
  const toast = el(
    "div",
    { class: "toast align-items-center text-bg-danger border-0", role: "alert", "aria-live": "assertive", "aria-atomic": "true" },
    el(
      "div",
      { class: "d-flex" },
      el("div", { class: "toast-body" }, message),
      el("button", { type: "button", class: "btn-close btn-close-white me-2 m-auto", "data-bs-dismiss": "toast", "aria-label": "Fechar" })
    )
  );

  const element = el("div", { class: "toast-container position-fixed bottom-0 start-50 translate-middle-x p-3" }, toast);
  const show = () => bootstrap.Toast.getOrCreateInstance(toast, { delay }).show();

  return { element, show };
}