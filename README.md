# AAI × Casa Nuestra — Presentación de la propuesta

Landing page en español que presenta la **Propuesta de gestión anual de la galería de Casa Nuestra** (Malinalco, México) de **AAI · Acelerador Artístico Inteligente**. Convierte el documento original en una experiencia editorial con sistema visual propio, diseño responsivo y animaciones.

## Contenido

- Hero con el monograma AAI animado y cifras clave
- La propuesta, el mandato solicitado y las prioridades del primer año
- 01 Contexto y oportunidad · 02 Modelo AAI (servicios interactivos y alcance)
- 03 Ruta de 12 meses (línea de tiempo por etapas) y ritmo de seguimiento
- 04 Sostenibilidad · 05 Caso de éxito e indicadores
- Sistema visual (logotipo, paleta y tipografía) y la decisión solicitada
- Descarga del PDF original

## Tecnología

TanStack Start (React 19), Tailwind CSS 4, lucide-react, Netlify Image CDN para las imágenes. Desplegado en Netlify.

## Desarrollo local

```bash
pnpm install
netlify dev   # o: pnpm dev
```

Los textos de tarjetas y listas están en `src/content/propuesta.ts`; los colores y tipografías en `src/styles.css`.
