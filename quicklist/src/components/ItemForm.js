import { el } from "../utils/dom.js";

export function ItemForm({ onAdd }) {
  const input = el("input", {
    type: "text",
    class: "form-control py-2",
    placeholder: "Adicione um novo item",
    autocomplete: "off",
    "aria-label": "Novo item",
  });

  return el(
    "form",
    {
      class: "d-flex flex-column flex-md-row gap-3 mb-4",
      onSubmit(e) {
        e.preventDefault();
        const name = input.value.trim();
        if (!name) return input.focus();
        onAdd(name);
        input.value = "";
        input.focus();
      },
    },
    input,
    el("button", { type: "submit", class: "btn btn-primary fw-semibold px-4 flex-shrink-0" }, "Adicionar item")
  );
}