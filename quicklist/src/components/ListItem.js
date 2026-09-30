import { el } from "../utils/dom.js";

export function ListItem({ item, onToggle, onRemove }) {
  const id = `item-${item.id}`;
  const doneClasses = item.done ? " text-decoration-line-through text-secondary" : "";

  return el(
    "li",
    { class: "card flex-row align-items-center gap-3 p-3 border-0 shadow-sm" },
    el("input", {
      type: "checkbox",
      id,
      class: "form-check-input fs-5 m-0 flex-shrink-0 rounded-circle",
      checked: item.done,
      onChange: () => onToggle(item.id),
    }),
    el("label", { for: id, class: `flex-grow-1 small text-break${doneClasses}` }, item.name),
    el(
      "button",
      {
        type: "button",
        class: "btn btn-sm btn-outline-danger border-0",
        "aria-label": `Remover ${item.name}`,
        onClick: () => onRemove(item.id),
      },
      "🗑"
    )
  );
}