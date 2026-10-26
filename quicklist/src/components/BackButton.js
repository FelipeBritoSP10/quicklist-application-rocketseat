import { el } from "../utils/dom.js";

export function BackButton({ onClick }) {
  return el(
    "a",
    {
      href: "#",
      class: "btn btn-link text-decoration-none px-0",
      onclick: onClick,
    },
    "← Voltar"
  );
}