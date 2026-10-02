/**
 * Registra o Service Worker garantindo o escopo global do app
 */
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./src/pwa/sw.js', { scope: './' })
        .then((registration) => {
          console.log('Service Worker registrado em src/pwa! Escopo:', registration.scope);
        })
        .catch((error) => {
          console.error('Erro ao registrar Service Worker:', error);
        });
    });
  }
}