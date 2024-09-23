ARG NODE_REPO=oven/bun
ARG NODE_VERSION=alpine
ARG NODE_LOCK=bun.lockb
ARG NPM=bun
ARG NODE=bun

# ARG NODE_REPO=node
# ARG NODE_VERSION=alpine
# ARG NODE_LOCK=package-lock.json
# ARG NPM=npm
# ARG NODE=node

FROM ${NODE_REPO}:${NODE_VERSION} as deps
ARG NODE_LOCK
ARG NPM
WORKDIR /app
COPY package.json ${NODE_LOCK} ./
RUN ${NPM} install

ENV NEXT_TELEMETRY_DISABLED 1

FROM ${NODE_REPO}:${NODE_VERSION} as builder
ARG NPM
WORKDIR /app
COPY *.js *.yaml *.ts? *.json ./
COPY pages pages

COPY --from=deps /app/node_modules ./node_modules
RUN ${NPM} run export

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html/idocs
