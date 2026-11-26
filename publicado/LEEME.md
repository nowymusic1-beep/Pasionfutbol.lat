# Versión publicada con catálogo PF (63 camisetas)

- `index.html`: HTML de https://pasionfutbol.lat tomado del HAR de la sesión (versión en vivo, no está en `main`), con la lista de productos reemplazada por las 63 camisetas del catálogo a $19.990. Se conserva el producto de prueba oculto (`prueba-pagos`). Se quitaron los "Conjunto" (España y Noruega) porque no son camisetas del catálogo.
- `fotos/`: fotos `pf-*` reducidas a 512 px. Deben quedar en la raíz del sitio (`/pf-XXXXXX-frente.webp`, etc.).
- Cambio en el script: `computeProductMeta` usa `item.meta` si existe, para clasificar los productos nuevos (país / club, liga y colores).

Pendiente antes de publicar:
- El código del servidor (worker) que sirve esta página no está en git: hay que subir `index.html` y `fotos/` a ese despliegue.
- No está probado en navegador.
