const KEY = "quicklist:items";

const DEFAULT_ITEMS = ["Pão de forma", "Café preto", "Suco de laranja", "Bolacha"].map(
  (name, i) => ({ id: `seed-${i}`, name, done: false })
);

export function loadItems() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : DEFAULT_ITEMS;
  } catch {
    return DEFAULT_ITEMS;
  }
}

export function saveItems(items) {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
  }
}