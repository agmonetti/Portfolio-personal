# --- ETAPA 1: BUILD (Usamos la RAM y Swap aquí) ---
FROM node:20-alpine AS builder

# Activamos pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copiamos solo los package.json primero (para cachear dependencias)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copiamos el resto del código
COPY . .

# Compilamos (Genera la carpeta /app/dist)
RUN pnpm build

# --- ETAPA 2: PRODUCTION (Nginx ultraligero) ---
FROM nginx:alpine

# Copiamos SOLO la carpeta dist desde la etapa "builder"
COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]