FROM node:22-alpine AS dependencies
ARG APP_NAME

WORKDIR /app

COPY package*.json ./
# pnpm 설치 추가
RUN npm install -g pnpm
RUN pnpm install

# Build stage
FROM dependencies AS build

COPY . .
RUN APP_NAME=$APP_NAME pnpm run build

# Production stage
FROM node:22-alpine AS prod
ARG APP_NAME

WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN apk update
RUN apk add --update curl && \
    rm -rf /var/cache/apk/*

COPY package*.json ./
# pnpm 설치 추가
RUN npm install -g pnpm
RUN pnpm install --prod

COPY --from=build /app/_output/dist/${APP_NAME}/index.js /app/_output/dist/index.js

CMD ["node", "_output/dist/index.js"]
