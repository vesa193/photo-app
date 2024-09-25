FROM node:20 as base

RUN npm install --global nodemon ts-node-dev

WORKDIR /app

COPY ["package.json", "package-lock.json*", "tsconfig.json",".env", "./"]

FROM base as dev

COPY . .

RUN npm install

FROM dev as build

RUN npm run build

FROM base as prod

COPY --from=build /app/dist /app
