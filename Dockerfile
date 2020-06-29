FROM node:lts-alpine as build
LABEL maintainer="Benoît Suttor"
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN RAZZLE_API_PATH=https://backend.oality.com yarn build

FROM node:lts-alpine
WORKDIR /app
COPY --from=build /app/build /app/build
COPY --from=build /app/package.json /app/
COPY --from=build /app/node_modules /app/node_modules
EXPOSE 3000
CMD ["yarn", "start:prod"]
