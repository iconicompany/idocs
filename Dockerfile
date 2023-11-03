# Install dependencies only when needed
FROM node:alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install

ENV NEXT_TELEMETRY_DISABLED 1

FROM node:alpine AS builder
RUN apk add --update libc6-compat openssl openssl-dev
WORKDIR /app
COPY *.js *.yaml *.ts? *.json ./
COPY pages pages

COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html/idocs
