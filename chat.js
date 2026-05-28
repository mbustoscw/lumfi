# LUMFI · Agente Exógena DIAN AG 2025

Herramienta web para que contadores colombianos consulten vencimientos, construyan formatos y resuelvan dudas sobre información exógena AG 2025.

## Despliegue en Vercel (15 minutos, gratis)

### Paso 1 — Obtén una API key de Anthropic

1. Ve a https://console.anthropic.com
2. Crea una cuenta (gratis)
3. En "API Keys", crea una nueva key
4. Cópiala — la necesitas en el Paso 4

### Paso 2 — Sube el código a GitHub

1. Ve a https://github.com y crea una cuenta si no tienes
2. Crea un repositorio nuevo llamado `lumfi-exogena` (público o privado)
3. Sube estos archivos:
   - `index.html`
   - `api/chat.js`
   - `vercel.json`
   - `package.json`

   Opción más fácil: arrastra los archivos al repositorio desde el navegador.

### Paso 3 — Conecta con Vercel

1. Ve a https://vercel.com y crea cuenta con tu GitHub
2. Click en "Add New Project"
3. Importa tu repositorio `lumfi-exogena`
4. Vercel detecta automáticamente la configuración
5. Click en "Deploy" — NO todavía

### Paso 4 — Agrega la API key como variable de entorno

Antes de hacer Deploy, en la pantalla de configuración:

1. Busca la sección "Environment Variables"
2. Agrega:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** (pega tu API key del Paso 1)
3. Ahora sí click en "Deploy"

### Paso 5 — Tu URL pública

En 2 minutos Vercel te da una URL como:
```
https://lumfi-exogena.vercel.app
```

Comparte esa URL con tus 299 contadores. ¡Listo!

## Costos estimados

- Vercel: **Gratis** (plan hobby tiene 100GB bandwidth/mes)
- Anthropic API: ~$0.003 por consulta (claude-sonnet-4)
  - 299 contadores × 10 consultas/mes = ~$9 USD/mes
  - Puedes controlar el gasto en el dashboard de Anthropic

## Estructura del proyecto

```
lumfi-exogena/
├── index.html          # Frontend completo
├── api/
│   └── chat.js         # Serverless function (proxy seguro)
├── vercel.json         # Configuración de rutas
├── package.json        # Metadata del proyecto
└── README.md           # Este archivo
```

## Cómo funciona la seguridad

La API key **nunca** se expone al navegador del usuario. El flujo es:

```
Navegador del contador → /api/chat (Vercel) → Anthropic API
                         ↑ aquí vive la key
```

## Personalización

Para cambiar el modelo o el prompt base, edita `api/chat.js`.
Para cambiar el diseño o los formatos, edita `index.html`.

---

LUMFI · Copiloto fiscal para contadores colombianos
