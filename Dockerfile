FROM node:18-alpine as deps
WORKDIR /app
COPY package*.json .
RUN yarn install --frozen-lockfile

FROM node:18-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM nginx:stable-perl as prod
COPY --from=builder /app/dist /usr/share/nginx/html