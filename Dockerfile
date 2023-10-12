# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
#RUN apk add --update libc6-compat openssl openssl-dev
RUN npm i -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./ 

RUN pnpm install 


# Rebuild the source code only when needed
ENV NEXT_TELEMETRY_DISABLED 1

FROM node:alpine AS builder
RUN apk add --update libc6-compat openssl openssl-dev
RUN npm i -g npm
WORKDIR /app
COPY *.js *.yaml *.ts? *.json ./
COPY pages pages
#COPY .git .git

COPY --from=deps /app/node_modules ./node_modules
RUN npm run export

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
