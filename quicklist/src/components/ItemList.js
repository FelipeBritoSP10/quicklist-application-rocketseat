import { el } from "../utils/dom.js";
import { ListItem } from "./ListItem.js";

export function ItemList({ onToggle, onRemove }) {
  const ul = el("ul", { class: "list-unstyled d-flex flex-column gap-3 mb-0" });
  const empty = el("p", { class: "text-center text-secondary small py-5 d-none" }, "Sua lista está vazia. Adicione o primeiro item acima.");
  const element = el("section", {}, ul, empty);

  function update(items) {
    ul.replaceChildren(...items.map((item) => ListItem({ item, onToggle, onRemove })));
    empty.classList.toggle("d-none", items.length > 0);
  }

  return { element, update };
}