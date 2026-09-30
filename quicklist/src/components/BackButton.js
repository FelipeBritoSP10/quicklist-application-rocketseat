import { el, html } from "../utils/dom.js";

const ARROW = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>`;

export const BackButton = ({ onClick } = {}) =>
  el("a", { href: "#", class: "btn btn-outline-primary btn-sm rounded-pill d-inline-flex align-items-center gap-1 px-3 fw-semibold", onClick }, html(ARROW), "Voltar");