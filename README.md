# Página web de Angel Serrano

Portafolio personal: [developerangel.dev](https://developerangel.dev)

Hecho con Astro 5 y Tailwind CSS 4. Página en español (`/`) e inglés (`/en/`).

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera la web estática en dist/
npm run preview  # ver la versión compilada
```

## Editar contenido

Todo el texto está en `src/data/content.ts` (ES y EN).
El CV descargable está en `public/cv/AngelSerrano_CV.pdf`, así que basta con reemplazar ese archivo.

## Publicar (Vercel, gratis)

1. Subir el proyecto a un repositorio de GitHub.
2. En vercel.com → "Add New Project" → importar el repo (detecta Astro solo).
3. En Settings → Domains → agregar tu dominio y copiar los registros DNS
   que indica Vercel en el panel de tu proveedor de dominio.

## Publicar en tu propio servidor (Docker)

Requisitos en el servidor: Docker + Docker Compose, y los puertos 80 y 443 libres.

1. Apunta el DNS de tu dominio a la IP del servidor:
   - Registro `A` para `@` → IP del servidor
   - Registro `A` para `www` → IP del servidor
2. Copia el proyecto al servidor (con `git clone` o `scp`).
3. Crea el archivo `.env`:
   ```bash
   cp .env.example .env   # y edita DOMAIN=tudominio.com
   ```
4. Levanta todo:
   ```bash
   docker compose up -d --build
   ```
   Caddy obtiene el certificado HTTPS solo (tarda unos segundos la primera vez).

Para actualizar la web después de un cambio:
```bash
git pull && docker compose up -d --build
```

Ver logs: `docker compose logs -f`

### Si tu servidor ya tiene Caddy u otro proxy en los puertos 80/443

Levanta solo la web (queda en `127.0.0.1:8080`):
```bash
docker compose -f docker-compose.web.yml up -d --build
```
Agrega el bloque de `docker/Caddyfile.snippet` al Caddyfile del servidor y recarga Caddy.
Con Cloudflare en modo proxy, usa SSL/TLS en **Full (strict)**.
