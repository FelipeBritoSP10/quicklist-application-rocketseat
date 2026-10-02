// src/pwa/pwa.js
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw.js')
        .then((registration) => {
          console.log('Service Worker registrado com sucesso! Escopo:', registration.scope);

          // Deteta se existe uma nova versão disponível no servidor
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                // Se já houver um worker antigo ativo e o novo estiver instalado
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('Nova versão detetada! A atualizar a aplicação...');
                  // Opcional: podes atualizar de imediato
                  window.location.reload();
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('Falha ao registrar o Service Worker:', error);
        });
    });

    // Garante que se o Service Worker mudar de controlo, a página recarrega com os ficheiros novos
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }
}
