// src/pwa/pwa.js
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw.js')
        .then((registration) => {
          console.log('Service Worker registrado com sucesso! Escopo:', registration.scope);
        })
        .catch((error) => {
          console.error('Falha ao registrar o Service Worker:', error);
        });
    });
  }
}