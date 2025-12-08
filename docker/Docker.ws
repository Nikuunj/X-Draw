FROM node:22-alpine

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml
COPY ./pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY ./packages ./packages

COPY ./turbo.json ./turbo.json
COPY ./apps/ws-backend ./apps/ws-backend

RUN pnpm i
RUN pnpm run build

EXPOSE 8080

CMD ["pnpm", "run", "start:ws"]
