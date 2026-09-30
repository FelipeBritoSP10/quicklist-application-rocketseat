import { el, html } from "../utils/dom.js";

const ICON = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <rect x="2" y="4" width="20" height="4" rx="2" />
  <rect x="2" y="10" width="14" height="4" rx="2" />
  <rect x="2" y="16" width="20" height="4" rx="2" />
</svg>`;

export const Logo = () =>
  el("h1", { class: "h4 fw-bold text-center text-brand mb-5 d-flex align-items-center justify-content-center gap-2" }, html(ICON), "quicklist");